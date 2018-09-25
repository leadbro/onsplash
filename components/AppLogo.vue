<template>
  <div class="logo">
    <logo-icon class="logo__icon"/>
    <div class="logo__text">TestTask</div>
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

    &__icon {
      margin-right: .5rem;
    }

    &__text {
      font-family: var(--font-cabin);
      font-size: 2.5rem;
    }
  }
</style>
