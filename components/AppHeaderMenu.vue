<template>
  <div class="header-menu">
    <nuxt-link class="header-menu__item header-menu__home" to="/">Home</nuxt-link>
    <nuxt-link class="header-menu__item" to="/about">About Us</nuxt-link>
    <nuxt-link class="header-menu__item" to="/contact">Contact Us</nuxt-link>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="less">

  @import "../assets/mixins.less";

  .header-menu {

    &__item {
      color: #999;
      font-size: 1.2rem;
      font-family: var(--font-base);
      text-decoration: none;

      margin-right: 1rem;

      position: relative;

      transition: color .2s ease-in-out;

      @media @min768 {
        font-size: 1.4rem;
      }

      &:hover {
        color: #111;
      }
    }

    &__home {
      display: none;

      @media @min768 {
        display: inline;
      }
    }
  }

</style>
