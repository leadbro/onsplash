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
  },
  hideImage(state, slideId) {
    state.items.find(item => item.id === slideId).isShowed = false;
  },
  showImage(state, slideId) {
    state.items.find(item => item.id === slideId).isShowed = true;
  }
};

export const actions = {
  getRandomImages({commit}, count) {
    let items = [];

    for (let i = 0; i < 10;) {
      let id = Math.floor(Math.random() * 1000);

      let isAlreadyExist = items.filter(item => item.id === id).length > 0;

      if (isAlreadyExist) continue;

      items.push({
        id,
        imageSrc: 'https://picsum.photos/300/205?image=' + id,
        link: 'https://picsum.photos/1920/1080?image=' + id,
        isShowed: false
      });

      i++;
    }

    commit('set', items);
  }
};

