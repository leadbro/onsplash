<template>
  <div class="carousel">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div
            class="swiper-slide carousel__item"
            v-for="slide in slides"
            :key="slide.id"
        >
          <img :src="slide.imageSrc" alt="">
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  import Swiper from 'swiper/dist/js/swiper.esm.bundle';
  import 'swiper/dist/css/swiper.min.css'


  export default {
    data() {
      return {
        swiperOptions: {
          slidesPerView: 'auto',
          loop: true
        },
        $swiper: {}
      }
    },
    computed: {
      ...mapGetters({
        getFewPictures: 'images/getFewPictures'
      }),
      slides() {
        return this.getFewPictures(5);
      },
    },
    mounted() {
      this.$swiper = new Swiper('.swiper-container', this.swiperOptions);
    }
  }
</script>

<style lang="less">
  @import "../assets/mixins.less";

  .carousel {

    &__item {
      margin-right: 2rem;
      width: calc(~'100%/5');

      overflow: hidden;
    }
  }
</style>
