export const state = () => ({
  items: []
});

export const getters = {
  getPictures(state)  {
    return state.items
  }
};

export const mutations = {
  set(state, items) {
    state.items = items;
  }
};

export const actions = {
  getRandomImages({commit}, count) {
    let items = [];

    for (let i = 0; i <= 10; i++) {
      let id = Math.floor(Math.random() * 500);

      items.push({
        id,
        imageSrc: 'https://picsum.photos/600/200?image=' + id,
        link: 'https://example.com/'
      })
    }

    commit('set', items);
  }
};

