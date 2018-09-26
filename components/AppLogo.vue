<template>
  <div class="logo">
    <logo-icon class="logo__icon"/>
    <div class="logo__text">Onsplash</div>
    <nuxt-link class="logo__link" to="/"></nuxt-link>
  </div>
</template>

<script>
  import LogoIcon from '~/components/AppLogoIcon';

  export default {
    components: {
      LogoIcon
    }
  }
</script>

<style lang="less">
  @import "../assets/mixins.less";

  .logo {
    display: flex;
    align-items: center;

    position: relative;

    &__icon {
      margin-right: .6rem;
    }

    &__text {
      font-family: var(--font-roboto);
      font-size: 2rem;
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
