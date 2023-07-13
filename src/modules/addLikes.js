const item_like = document.querySelector('.likes');

const initLikes = (game) => {
    item_like.addEventListener('click', async (e) => {
        const target = e.target;
        console.log(target);
    })
}

export default initLikes;
