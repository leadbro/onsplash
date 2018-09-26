<template>
  <div class="page-contacts">
    <div class="container">
      <h1 class="page-contacts__title">Contact Us</h1>

    </div>
  </div>
</template>

<script>


export default {
  transition: 'bounce',
  components: {

  }
}
</script>

<style lang="less">
  .page-contacts {
    padding-bottom: 6rem;

    &__title {
      font-size: 4rem;
      font-family: var(--font-roboto);

      margin-top: 4.2rem;
      margin-bottom: 1.8rem;
    }

    &__text {
      font-size: 2rem;

      p {

        &:first-child {
          margin-top: 0;
        }
      }
    }
  }
</style>
