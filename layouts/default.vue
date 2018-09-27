<template>
  <div id="app">
    <app-header/>
    <nuxt/>
    <div class="footer">
      <logo-icon class="logo-bottom"/>
    </div>
  </div>
</template>

<script>
  import AppHeader from '~/components/AppHeader';


  export default {

    components: {
      AppHeader,
    }
  }

</script>

<style lang="less">
  @import "../assets/mixins.less";

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  :root {
    --color-green: #81C784;
    --color-orange: #FF7043;
    --color-purple: #3F51B5;

    --font-open-sans: 'Open Sans', sans-serif;
    --font-cabin: 'Cabin', sans-serif;
    --font-roboto: 'Roboto', sans-serif;
    --font-base: -apple-system, BlinkMacSystemFont, San Francisco, Helvetica Neue, Helvetica, Ubuntu, Roboto, Noto, Segoe UI, Arial, sans-serif;
  }

  html,
  body {
    padding: 0;
    margin: 0;
  }

  html,
  body,
  #__nuxt,
  #__layout,
  #app {
    min-height: 100%;
  }

  html {
    font-size: 10px;
    position: relative;
    height: 100%;
    overflow-y: scroll;
  }

  body {
    font-family: var(--font-open-sans);
    font-size: 1.6rem;
    width: 100%;
  }

  #app {

  }

  .footer {
    display: flex;
    justify-content: center;
    padding-bottom: 2rem;

    @media @min1024 {
      padding-bottom: 4rem;
    }
  }

  .logo-bottom {
    --icon-size: 3rem;
  }

  .container {
    margin: 0 auto;
    width: calc(~'100% - 1.5rem');

    @media @min768 {
      max-width: 94rem;
      width: calc(~'100% - 3rem');
    }
  }

  .bounce-enter-active {
    animation: bounce-in .8s;
  }
  .bounce-leave-active {
    animation: bounce-out .5s;
  }

  @keyframes bounce-in {
    0% {
      opacity: .9
    }
    100% {
      opacity: 1
    }
  }
  @keyframes bounce-out {
    0% {  opacity: 1 }
    100% { opacity: .9 }
  }
</style>
