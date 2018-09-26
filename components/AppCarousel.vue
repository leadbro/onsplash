<template>
  <div class="carousel">
    <div class="carousel__container">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <figure
              class="carousel__item swiper-slide"
              v-for="slide in slides"
              :key="slide.id"
          >
            <a
                class="carousel__link"
                :href="slide.link"
                target="_blank"
            ></a>

            <img
                class="carousel__image"
                v-lazy="slide.imageSrc"
                :alt="slide.link"
            />
          </figure>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';

  import Swiper from 'swiper/dist/js/swiper.esm.bundle';
  import 'swiper/dist/css/swiper.min.css'

  export default {
    data() {
      return {
        $swiper: {},
        lazyOptions: {
          selector: 'img',
          error: 'https://picsum.photos/300/205/?random'
        }
      }
    },
    props: {
      slidesCountMobile: {
        type: Number,
        default() {
          return 1
        }
      },
      slidesCountTablet: {
        type: Number,
        default() {
          return 2
        }
      },
      slidesCountDesktop: {
        type: Number,
        default() {
          return 3
        }
      },
      loop: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      ...mapGetters({
        slides: 'images/getPictures'
      }),
      swiperOptions() {
        return {
          loop: this.loop,
          slidesPerView: this.slidesCountDesktop,
          spaceBetween: 30,
          observer: true,
          breakpoints: {
            767: { slidesPerView: this.slidesCountMobile },
            1023: { slidesPerView: this.slidesCountTablet }
          }
        }
      },
    },
    methods: {
      // onloadImage() {
      //   return new Promise((resolve, reject) => {
      //     event.target.classList.add('carousel__image--loaded');
      //   });
      // },
      // onErrorImage() {
      //   /* Если изображения нет, подгружаем случайное существующее */
      //   event.target.src = 'https://picsum.photos/600/200/?random';
      // }
    },
    mounted() {
      this.$swiper = new Swiper('.swiper-container', this.swiperOptions);
    },

  }
</script>

<style lang="less">
  @import "../assets/mixins.less";

  .carousel {

    &__container {

    }

    &__item {
      margin: 0;
      position: relative;
      overflow: hidden;
      background: linear-gradient(180deg,rgba(0,0,0,.5) 0,rgba(0,0,0,.4) 40%,rgba(0,0,0,.4) 70%,rgba(0,0,0,.5));
      height: 20.5rem;

      &:after {
        --spinner-size: 4.4rem;
        --center-postiion: calc(~'50% - var(--spinner-size)/2');

        content: '';
        display: block;
        background-image: url('../assets/icons/spinner.svg');

        width: var(--spinner-size);
        height: var(--spinner-size);

        position: absolute;
        top: var(--center-postiion);
        left: var(--center-postiion);
        z-index: 1;
      }
    }

    &__image {
      display: block;
      height: 100%;
      width: 100%;
      object-fit: cover;

      position: relative;
      z-index: 2;

      opacity: 0;
      transition: opacity .5s;

      &[lazy=loaded],
      &[lazy=error]{
        opacity: 1;
      }
    }

    &__link {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 3;
    }
  }
</style>
