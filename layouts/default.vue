<template>
  <div id="app">
    <app-header/>
    <nuxt/>
  </div>
</template>

<script>
  import AppHeader from '~/components/AppHeader';

  export default {

    components: {
      AppHeader
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

  .container {
    margin: 0 auto;
    width: calc(~'100% - 3rem');
    max-width: 96rem;
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
