import Vue from 'vue';
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
  preLoad: 6,
  error: 'https://picsum.photos/300/205/?random',
  attempt: 1,
  listenEvents: false
});