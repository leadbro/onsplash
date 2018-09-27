export const state = () => ({
  name: 'Mark Knopfler',
  phone: '',
  message: ''
});

export const getters = {
  name(state) {
    return state.name
  },
  phone(state) {
    return state.phone
  },
  message(state) {
    return state.message
  },
};

export const mutations = {
  setName(state, name) {
    state.name = name
  },
  setPhone(state, phone) {
    state.phone = phone
  },
  setMessage(state, message) {
    state.message = message
  },
};

export const actions = {
  setData({commit}, data) {
    if (data) {
      commit('setName', data.name);
      commit('setPhone', data.phone);
      commit('setMessage', data.message);
    }
  }
};