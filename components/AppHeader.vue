<template>
  <header class="header">
    <div class="header__container container">
      <app-logo class="header__icon"/>
      <header-menu class="header__menu"/>
    </div>
  </header>
</template>

<script>
  import AppLogo from '~/components/AppLogo';
  import HeaderMenu from '~/components/AppHeaderMenu';

  export default {
    name: 'AppHeader',
    components: {
      AppLogo,
      HeaderMenu
    }
  }
</script>

<style lang="less" scoped>
  @import "../assets/mixins.less";

  .header {
    padding: 2rem;

    &__container {
      display: flex;
      align-items: center;
    }

    &__menu {
      margin-left: auto;
    }

    &__icon {

    }
  }

</style>
