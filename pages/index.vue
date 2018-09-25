<template>
  <div class="page-index">
    <app-banner/>

    <div class="container">
      <h2 class="page-index__title">About Us</h2>
      <div class="page-index__text">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta distinctio eaque itaque quos suscipit
          velit. Distinctio fugiat illo odio rem. Alias atque eum illum impedit quas quidem, quis voluptates? Numquam!
        </p>
        <p>At cumque eaque error, et excepturi expedita fuga laudantium maxime officia officiis quas saepe sequi sunt
          suscipit tempore tenetur totam vel voluptate. Amet at error, exercitationem harum nobis sunt ullam.
        </p>
        <p>Doloribus ea error facilis itaque iure iusto molestias necessitatibus nemo nihil officiis quisquam,
          reprehenderit sed sint sunt unde ut vel veniam vero. Alias assumenda id provident reprehenderit totam ullam
          veniam.
        </p>
        <p>A amet dolores eveniet id illum porro quisquam sint voluptate. Architecto eaque illo nesciunt reprehenderit
          rerum! Doloremque earum, harum inventore molestiae nostrum officia perferendis quaerat quam, quisquam
          repudiandae suscipit vel?
        </p>
        <p>Aut consequatur consequuntur debitis maiores optio quos reprehenderit. Aliquid distinctio eius eligendi et,
          illum iure libero maiores nemo numquam qui quisquam, recusandae sint suscipit. Esse expedita, mollitia?
          Architecto itaque, nam?
        </p>
        <p>Consequuntur debitis, doloribus error laudantium magnam necessitatibus nisi pariatur praesentium, qui quod
          sapiente sed sit tempora veritatis vero vitae voluptatum. Dolorum est excepturi vel? Accusantium dolore in
          pariatur rem ullam!
        </p>
        <p>At cum laboriosam quisquam totam ut vero vitae! Amet architecto cupiditate dignissimos dolor earum eos est
          exercitationem inventore, iste nam nobis, nostrum recusandae rem, repellat repellendus sint suscipit tempore
          velit!
        </p>
        <p>Aperiam autem consequatur cum debitis dicta doloribus earum, enim eos ex facilis labore minus, neque nihil
          non placeat recusandae saepe suscipit! Accusamus alias aliquam deleniti ducimus enim fugiat magnam sapiente.
        </p>
      </div>
    </div>
  </div>
</template>

<script>

import AppBanner from '~/components/AppBanner'

export default {
  data() {
    return {
      slidesPerView: {
        mobile: 1
      }
    }
  },
  components: {
    AppBanner
  },
  fetch({store}) {
    store.dispatch('images/getRandomImages');
  }
}
</script>

<style lang="less">


  .page-index {

    &__title {
      font-size: 4rem;
      font-family: var(--font-cabin);
    }

    &__text {
      font-size: 3rem;
    }
  }
</style>
