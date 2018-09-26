<template>
  <button class="carousel-button" :class="buttonClass">
    <svg class="carousel-button__icon" viewBox="0 0 451.846 451.847">
      <g>
        <path d="M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744
		L278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284
		c6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z"/>
      </g>
    </svg>
  </button>
</template>

<script>

  export default {
    computed: {
      buttonClass() {
        return {
          'carousel-button--prev' : this.type === 'prev',
          'carousel-button--next' : this.type === 'next',
        }
      }
    },
    props: {
      type: {
        type: String,
        default: 'next'
      }
    }
  }
</script>

<style lang="less">
  @import "../assets/mixins.less";

  .carousel-button {
    display: block;
    cursor: pointer;

    background: none;
    border: none;
    outline: none;

    padding: 0;

    opacity: .6;

    transition: all .3s;

    &__icon {
      fill: #fff;
      height: 100%;
      width: 100%;
    }

    &--prev &__icon {
      transform: rotate(.5turn);
    }

    &[aria-disabled=true] {
      cursor: default;
      opacity: .2;
    }

    &[aria-disabled=false] {

      &:hover {
        opacity: 1;
        transform: scale(1.5)
      }
    }
  }
</style>
