<template>
  <button
      class="base-button"
  >
    <slot></slot>
    <svg class="base-button__border" xmlns="http://www.w3.org/2000/svg" >
      <!--<rect height="3.2rem" width="100rem" rx="4" ry="4"></rect>-->
      <rect x="0" y="0" width="100%" height="32" rx="4" ry="4" />
    </svg>
  </button>
</template>

<script>
  export default {
    name: "BaseButton",
    data() {
      return {};
    },
  };
</script>

<style lang="less">

  .base-button {
    cursor: pointer;

    color: #fff;
    background: none;
    border: none;
    border-radius: 4px;
    box-shadow: inset 0 0 0 1px #fff;
    font-family: var(--font-roboto);
    font-size: 14px;
    line-height: 29px;
    text-align: center;
    outline: none;

    padding: 0 11px;

    height: 32px;

    position: relative;
    overflow: hidden;

    user-select: none;

    transition: background-color .3s;

    &__border {
      position: absolute;
      height: 100%;
      width: 100%;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;

      rect {
        fill: rgba(255,255,255,0);
        stroke: var(--color-orange);
        stroke-width: 3px;
        stroke-dasharray: 1000;
        stroke-dashoffset: 1000;

        /*height: 100%;*/
        /*width: 100%;*/

        animation-name: round;
        animation-duration: 3s;
        animation-direction: normal;
        transition-timing-function: cubic-bezier(0.39, 0.575, 0.565, 1);
      }
    }

    &:active {
      background-color: rgba(0, 0, 0, .4) !important;
      transition: background-color .2s;
    }

    &:hover,
    &:focus {
      background-color: rgba(0, 0, 0, .2);
      transition: background-color .5s;
    }

    &::-moz-focus-inner {
      border: 0;
    }

    &:active &__border rect {
      animation: none;
    }


    @keyframes round {
      0% {
        opacity: 0;
      }

      50% {
        opacity: 1;
      }

      100% {
        stroke-dashoffset: 0;
        opacity: 0;
      }
    }
  }
</style>
