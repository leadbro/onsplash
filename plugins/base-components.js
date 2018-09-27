import Vue from "vue";

import LogoIcon from '~/components/AppLogoIcon'
import BaseButton from '~/components/BaseButton'

const components = {
  BaseButton,
  LogoIcon
};

Object.keys(components).forEach(key => {
  Vue.component(key, components[key])
});