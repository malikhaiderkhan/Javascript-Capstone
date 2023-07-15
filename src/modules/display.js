// display.js

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
            <div class='card-like'><img src='${likes}' class='likes' /> <span id='likes-${list.id}'>...</span> likes</div>
            <button class='btn btn-comment' data-url='https://fakestoreapi.com/products/${list.id}'>Comments <img src='${commentbtn}' /></button>
            <button class='btn'>Check Item</button>
        `;

    productContainer.appendChild(productWrap);

    const heartIcon = productWrap.querySelector('.likes');

    // Fetch the number of likes from the API
    fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/myodB0I2hWMN7rQnMtyn/likes/')
      .then((response) => response.json())
      .then((likesData) => {
        const likesElement = document.getElementById(`likes-${list.id}`);
        likesData.forEach((el) => {
          const likesCount = el.likes;
          const ITEM_ID = el.item_id;
          const EL_ID = list.id;
          if (ITEM_ID === EL_ID) {
            likesElement.textContent = likesCount;
          }
        });
      })
      .catch((error) => {
        throw new Error('Error fetching likes:', error);
      });

    heartIcon.addEventListener('click', async (e) => {
      e.stopPropagation();

      const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/myodB0I2hWMN7rQnMtyn/likes/';
      await fetch(url, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
          item_id: list.id,
        }),
      });

      const likesElement = document.getElementById(`likes-${list.id}`);
      const currentLikes = parseInt(likesElement.textContent);
      likesElement.textContent = currentLikes + 1;
    });
  });
};

export default display;