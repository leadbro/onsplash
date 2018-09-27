<template>
  <app-carousel
      class="banner-carousel"
      ref="carousel"
      :slides="slides"
  >
    <figure class="banner-carousel__item" slot-scope="{ slide }">
      <a
          class="banner-carousel__link"
          :href="slide.link"
          target="_blank"
      ></a>

      <img
          class="banner-carousel__image"
          v-lazy="slide.imageSrc"
          :alt="slide.link"
      />
    </figure>
  </app-carousel>
</template>

<script>
  import AppCarousel from '~/components/AppCarousel';

  export default {
    components: {
      AppCarousel
    },
    methods: {
      update() {
        this.$refs.carousel.update();
      }
    },
    props: {
      slides: {
        type: [],
        default() {
          return []
        }
      }
    }
  }
</script>

<style lang="less">
  @import "../assets/mixins.less";

  .banner-carousel {

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
