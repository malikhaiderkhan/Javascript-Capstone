import commentbtn from '../assets/comment.png';
import likes from '../assets/heart.png';

const productContainer = document.querySelector('.products');

const display = (data) => {
  productContainer.innerHTML = '';
  data.forEach((list) => {
    const productWrap = document.createElement('div');
    productWrap.classList.add('card');
    productWrap.innerHTML = `
            <div class='card-img'><img src='${list.image}' /></div>
            <div class='card-title'><h4>${list.title}</h4></div>
            <div class='card-price'><h5>$${list.price}</h5></div>
            <div class='card-like'><img src='${likes}' class='likes' id='${list.id}' /><span id='${list.id}' class='nlikes'></span> Likes</div>
            <button class='btn btn-comment'>Comments <img src='${commentbtn}' /></button>
            <button class='btn' id='${list.id}'>Check Item</button>
        `;

    productContainer.appendChild(productWrap);

    const item_like = document.querySelector('.likes');
    productWrap.addEventListener('click', async (e) => {
        const target = e.target;
        const parentElement = target.parentNode;

        if (parentElement.className === 'likes' ) return;
        const item = parentElement;
        const item_id = list.id;
        const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/myodB0I2hWMN7rQnMtyn/likes/`;
        await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({
                item_id: item_id
            }),
            
        })
    })

  });

}


export default display;
