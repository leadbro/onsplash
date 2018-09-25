export const state = () => ({
  
});

export const getters = {
  getFewPictures: () => count => {
    let items = [];

    for (let id = 0; id <= count; id++) {
      items.push({
        id,
        imageSrc: 'https://lorempixel.com/480/320/abstract/' + id,
        link: 'https://softex-lab.com'
      })
    }

    return items;
  }
};

