const itemLike = document.querySelector('.likes');

const initLikes = () => {
  itemLike.addEventListener('click', async (e) => {
    const { target } = e;
    console.log(target);
  });
};

export default initLikes;
