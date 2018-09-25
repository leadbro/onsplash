<template>
  <header class="header">
    <div class="header__container">
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

    &__container {
      display: flex;
      align-items: center;
    }

    &__icon {
      margin-right: 2rem;
    }
  }

</style>
