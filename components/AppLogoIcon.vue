<template>
  <div class="logo-icon"></div>
</template>

<style lang="less">

  .logo-icon {
    --icon-size: 5rem;

    border-radius: 50%;
    background-color: var(--color-purple);
    background-clip: padding-box;
    border: .8rem solid var(--color-green);

    height: var(--icon-size);
    width: var(--icon-size);

    margin-right: .5rem;

    position: relative;

    &:before {
      --icon-before-size: 65%;

      content: '';
      display: block;

      background-color: var(--color-orange);
      border: .2rem solid var(--color-purple);
      border-radius: 50%;

      height: var(--icon-before-size);
      width: var(--icon-before-size);

      position: absolute;
      top: 0;
      right: 0;
      z-index: 1;
    }
  }
</style>
