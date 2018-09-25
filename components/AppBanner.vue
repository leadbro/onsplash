<template>
  <div class="banner">
    <div class="banner__container container">
      <h1 class="banner__title">Random Unsplash images</h1>
      <base-button
          class="banner__button"
          @click.native="onButtonClick"
      >
        Randomize
      </base-button>

      <app-carousel class="banner__carousel"/>
    </div>
    <picture class="banner__picture">
      <img src="https://picsum.photos/g/1920/800/" alt="">
    </picture>
  </div>
</template>

<script>
  import BaseButton from '~/components/BaseButton';
  import AppCarousel from '~/components/AppCarousel'

  export default {
    methods: {
      onButtonClick() {
        this.$store.dispatch('images/getRandomImages');
      }
    },
    components: {
      BaseButton,
      AppCarousel
    }
  }
</script>

<style lang="less" scoped>
  @import "../assets/mixins.less";

  .banner {
    position: relative;

    &__title {
      color: #fff;
      font-size: 5rem;
      font-family: var(--font-cabin);

      margin-top: 0;
    }

    &__container {

      padding: 3rem 0;

      position: relative;
      z-index: 2;
    }

    &__button {
      margin-bottom: 4rem;
    }

    &__picture {
      display: block;

      overflow: hidden;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 1;

      img {
        display: block;
        position: relative;
        z-index: 1;

        object-fit: cover;
        width: 100%;
      }

      &:after {
        content: "";
        display: block;

        background: linear-gradient(180deg,rgba(0,0,0,.5) 0,rgba(0,0,0,.4) 40%,rgba(0,0,0,.4) 70%,rgba(0,0,0,.5));

        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 2;
      }
    }
  }

</style>
