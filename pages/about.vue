<template>
  <div class="page-index">
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

  export default {
    transition: 'bounce'
  }

</script>


<style lang="less">
@import "../assets/mixins.less";

  .page-index {
    padding-bottom: 2rem;

    @media @min1024 {
      padding-bottom: 6rem;
    }

    &__title {
      font-size: 3rem;
      font-family: var(--font-roboto);

      margin-right: 3rem;
      margin-bottom: 1.5rem;

      @media @min1024 {
        font-size: 4rem;

        margin-top: 4.2rem;
        margin-bottom: 1.8rem;
      }
    }

    &__text {
      font-size: 1.5rem;

      @media @min768 {
        font-size: 18px;
      }

      p {

        &:first-child {
          margin-top: 0;
        }
      }
    }
  }
</style>
