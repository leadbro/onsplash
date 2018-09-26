<template>
  <div class="banner">
    <div class="banner__container container">
      <h1 class="banner__title">Random Unsplash images</h1>
      <div class="banner__text">
        <p>
          Beautiful, free photos.
        </p>
        <p>
          Gifted by the world’s most generous community of photographers.
        </p>
      </div>
      <base-button class="banner__button" @click.native="onButtonClick">
        Randomize
      </base-button>

      <app-carousel class="banner__carousel carousel" :slides="slides">
        <figure class="carousel__item" slot-scope="{ slide }">
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
      </app-carousel>
    </div>
    <picture class="banner__picture">
      <img class="banner__image" v-lazy="bannerImage"/>
    </picture>
    <div class="banner__license">Read more about the <a target="_blank" href="https://unsplash.com/license">Unsplash License</a></div>
  </div>
</template>

<script>
  import throttle from 'lodash-es/throttle';
  import { mapGetters } from 'vuex';

  import BaseButton from '~/components/BaseButton';
  import AppCarousel from '~/components/AppCarousel'

  export default {
    computed: {
      ...mapGetters({
        slides: 'images/getPictures',
        bannerImage: 'images/getBanner'
      }),
    },
    methods: {
      onButtonClick: throttle(function() {
        this.$store.dispatch('images/getRandomImages');
      }, 500),
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
      font-family: var(--font-roboto);

      margin-top: 0;
      margin-bottom: 1.6rem;
    }

    &__text {
      color: #fff;
      font-size: 18px;
      margin-bottom: 2.4rem;

      p {
        margin: 1rem 0;
      }
    }

    &__container {

      padding: 10.4rem 0 6rem;

      position: relative;
      z-index: 2;
    }

    &__button {
      margin-bottom: 2.4rem;
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

      &:after {
        content: "";
        display: block;

        background: linear-gradient(180deg,rgba(0,0,0,.7) 0,rgba(0,0,0,.6) 40%,rgba(0,0,0,.6) 70%,rgba(0,0,0,.5));

        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 2;
      }
    }

    &__image {
      display: block;
      object-fit: cover;

      height: 100%;
      width: 100%;

      position: relative;
      z-index: 1;

      opacity: 0;
      transition: opacity .5s;

      &[lazy=loaded],
      &[lazy=error]{
        opacity: 1;
      }
    }

    &__license {
      color: hsla(0,0%,70%,.7);
      font-size: 13px;
      text-align: center;

      padding: 2rem;

      position: relative;
      z-index: 4;
      
      a {
        color: hsla(0,0%,100%,.8);
        text-decoration: none;
        transition: color .2s;
        
        &:hover {
          color: #fff;
        }
      }
    }
  }

  .carousel {

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
