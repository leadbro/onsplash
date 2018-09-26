<template>
  <div class="carousel">
    <div class="swiper-container" ref="swiper">

      <!-- Wrapper -->
      <div class="carousel__wrapper swiper-wrapper">
        <div
            class="swiper-slide"
            v-for="slide in slides"
            :key="slide.id"
        >
          <slot :slide="slide">
            <img :src="slide.imageSrc"/>
          </slot>
        </div>
      </div>
    </div>

    <div class="carousel__pagination"></div>

    <!-- Navigation -->
    <carousel-button
        class="carousel__button carousel__button--prev"
        @click.native="slidePrev"
        type="prev"
    />

    <carousel-button
        class="carousel__button carousel__button--next"
        @click.native="slideNext"
        type="next"
    />
  </div>
</template>

<script>
  import Swiper from 'swiper/dist/js/swiper.js';
  import 'swiper/dist/css/swiper.min.css'

  import CarouselButton from '~/components/AppCarouselButton';

  export default {
    data() {
      return {
        swiper: null,
        defaultOptions: {
          navigation: {
            nextEl: '.carousel__button--next',
            prevEl: '.carousel__button--prev',
          },
          pagination: {
            el: '.carousel__pagination',
            bulletClass: 'carousel__bullet',
            bulletActiveClass: 'carousel__bullet--active',
            bulletElement: 'button',
            clickable: true,
            type: 'bullets',
          },
          observer: true,
        }
      }
    },
    props: {
      slides: {
        type: Array,
        default() {
          return [];
        }
      },
      slidesPerView: {
        type: Object,
        default()  {
          return {
            mobile: 1,
            tablet: 2,
            desktop: 3
          }
        },
      },
      spaceBetween: {
        type: Number,
        default: 30
      },
      loop: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      _slidesPerView() {
        return {
          mobile: this.slidesPerView.mobile || 1,
          tablet: this.slidesPerView.tablet || 2,
          desktop: this.slidesPerView.desktop || 3,
        }
      },
      swiperOptions() {
        let options = {
          loop: this.loop,
          slidesPerView: this._slidesPerView.desktop,
          spaceBetween: this.spaceBetween,
          breakpoints: {
            767: { slidesPerView: this._slidesPerView.mobile },
            1023: { slidesPerView: this._slidesPerView.tablet }
          }
        };

        return Object.assign({}, this.defaultOptions, options)
      },
    },
    methods: {
      mountInstance() {
        if (!this.swiper) {
          this.swiper = new Swiper(this.$refs.swiper, this.swiperOptions);
        }
      },
      slideNext() {
        this.swiper.slideNext();
      },
      slidePrev() {
        this.swiper.slidePrev();
      },
      update() {
        this.swiper.update();
        this.swiper.slideTo(0);
      }
    },
    mounted() {
      this.mountInstance();
    },
    components: {
      CarouselButton
    }
  }
</script>

<style lang="less">
  @import "../assets/mixins.less";

  .carousel {
    position: relative;


    &__button {
      --carousel-button-size: 1.6rem;

      display: none;

      @media @min1024 {
        display: block;

        height: var(--carousel-button-size);
        width: var(--carousel-button-size);

        position: absolute;
        top: calc(~'50% - var(--carousel-button-size)/2');
      }

      &--prev {
        left: -3rem;
      }

      &--next {
        right: -3rem;
      }
    }

    &__wrapper {

    }

    &__pagination {
      display: flex;
      align-items: center;
      justify-content: center;

      position: absolute;
      bottom: -4rem;
      left: 0;
      right: 0;
      z-index: 4;
    }

    &__bullet {
      --carousel-bullet-size: 1rem;

      display: block;
      cursor: pointer;

      border: none;
      border-radius: 50%;
      background-color: rgba(255, 255, 255, .4);
      outline: none;

      margin: .5rem;
      padding: 0;

      height: var(--carousel-bullet-size);
      width: var(--carousel-bullet-size);

      transition: background-color .5s;

      &--active {
        background-color: var(--color-orange);
      }
    }
  }
</style>