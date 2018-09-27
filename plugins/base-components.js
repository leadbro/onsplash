import Vue from "vue";

import LogoIcon from '~/components/AppLogoIcon';
import BaseButton from '~/components/BaseButton';
import BaseInput from '~/components/BaseInput';
import BaseTextarea from '~/components/BaseTextarea';

const components = {
  BaseButton,
  BaseInput,
  BaseTextarea,
  LogoIcon
};

Object.keys(components).forEach(key => {
  Vue.component(key, components[key])
});