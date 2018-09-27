<template>
  <form class="contacts-form" @submit.prevent="onSubmit">
    <base-input
        class="contacts-form__input"
        placeholder="Name"
        v-model="name"
        required
    />
    <base-input
        class="contacts-form__input"
        type="tel"
        required
        placeholder="Phone"
        v-mask="['+7 (###) ### ## ##']"
        v-model="phone"
    />
    <base-textarea
        class="contacts-form__textarea"
        maxlength="250"
        placeholder="Message"
        v-model="message"
    />
    <base-button type="submit" :color-scheme="buttonColorScheme">Call me</base-button>

    <transition name="fade">
      <div v-if="isFormSuccess" class="contacts-form__success">
        <h2 class="contacts-form__title">Success</h2>
        <p class="contacts-form__text">Expect a call</p>
      </div>
    </transition>

  </form>
</template>

<script>
  import {mask} from 'vue-the-mask';
  import { mapGetters } from 'vuex';

  export default {
    directives: {mask},
    data() {
      return {
        name: '',
        phone: '',
        message: '',
        isFormSuccess: false
      }
    },
    computed: {
      ...mapGetters({
        _sname: 'contacts/name',
        _sphone: 'contacts/phone',
        _smessage: 'contacts/message',
      }),
      isValidName() {
        return this.name.length >= 2
      },
      isValidPhone() {
        return this.phone.length === 18
      },
      isValidMessage() {
        return this.message.length < 250
      },
      isValidForm() {
        return this.isValidName && this.isValidMessage && this.isValidPhone
      },
      buttonColorScheme() {
        return this.isValidForm ? 'green' : 'orange'
      }
    },
    methods: {
      async onSubmit() {
        if (this.isValidForm) {
          let data = {
            name: this.name,
            phone: this.phone,
            message: this.message
          };

          let response = await this.sendData(data);

          if (response.status == 200) {
            this.isFormSuccess = true;
            this.$store.dispatch('contacts/setData', data);
          }
        }
      },
      async sendData(data) {
        return await this.$axios.$get('/api/contacts/response.json', data);
      }
    },
    created() {
      this.name = this._sname
    }
  }
</script>

<style lang="less">
  @import "../assets/mixins.less";

  .contacts-form {
    position: relative;

    &__title {
      font-size: 6rem;
      margin: 1rem 0;

      @media @min768 {
        font-size: 10rem;
        text-align: center;

      }
    }

    &__text {
      font-size: 3rem;
      margin: 1rem 0;

      @media @min768 {
        font-size: 4rem;
        text-align: center;

      }
    }

    &__input,
    &__textarea {
      display: block;
      margin-bottom: 1rem;

      &:last-of-type {
        margin-bottom: 4rem;
      }
    }

    &__success {
      background-color: #fff;

      display: block;

      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 2;
    }
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
    opacity: 0;
  }
</style>
