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
                :src="slide.imageSrc"
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
        $swiper: {}
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
    mounted() {
      this.$swiper = new Swiper('.swiper-container', this.swiperOptions);
    },

  }
</script>

<style lang="less">
  @import "../assets/mixins.less";

  .carousel {

    &__item {
      margin: 0;
      position: relative;
      overflow: hidden;
    }

    &__link {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 2;
    }
  }
</style>
