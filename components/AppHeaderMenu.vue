<template>
  <div class="header-menu">
    <nuxt-link class="header-menu__item" to="/">Home</nuxt-link>
    <nuxt-link class="header-menu__item" to="/about">About Us</nuxt-link>
    <nuxt-link class="header-menu__item" to="/contact">Contact Us</nuxt-link>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="less">

  .header-menu {

    &__item {
      color: var(--color-purple);
      text-decoration: none;

      margin-right: 1rem;

      position: relative;

      &:after {
        content: '';
        display: block;

        background-color: var(--color-orange);

        height: .1rem;
        width: 0;

        position: absolute;
        left: 0;
        bottom: 0;

        transition: width .3s;
      }

      &:hover:after {
        width: 100%;
      }
    }
  }

</style>
