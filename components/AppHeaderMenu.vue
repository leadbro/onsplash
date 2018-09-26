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
      color: #999;
      font-family: var(--font-base);
      text-decoration: none;

      margin-right: 1rem;

      position: relative;

      transition: color .2s ease-in-out;

      &:hover {
        color: #111;
      }
    }
  }

</style>
