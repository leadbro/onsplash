<template>
    <div class="swiper-container">
      <div class="swiper-wrapper">
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
</template>

<script>
  import Swiper from 'swiper/dist/js/swiper.js';
  import 'swiper/dist/css/swiper.min.css'

  export default {
    data() {
      return {
        slider: null,
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
        return {
          loop: this.loop,
          slidesPerView: this._slidesPerView.desktop,
          spaceBetween: this.spaceBetween,
          observer: true,
          breakpoints: {
            767: { slidesPerView: this._slidesPerView.mobile },
            1023: { slidesPerView: this._slidesPerView.tablet }
          }
        }
      },
    },
    methods: {
      mountInstance() {
        if (!this.slider) {
          this.slider = new Swiper(this.$el, this.swiperOptions);

        }
      }
    },
    mounted() {
      this.mountInstance();
    },

  }
</script>