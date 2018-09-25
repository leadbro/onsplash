<template>
  <button
      class="base-button"
  >
    <slot></slot>
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
    border: 1px solid #ddd;
    border-radius: 4px;
    box-shadow: 0 1px 1px rgba(0,0,0,.04);

    color: #999;
    background-color: #fff;

    height: 32px;
    padding: 0 11px;
    font-size: 14px;
    line-height: 29px;

    transition: all .2s ease-in-out;
    text-align: center;
    user-select: none;

    &:hover,
    &:focus {
      color: #111;
      border-color: #999;
    }
  }
</style>
