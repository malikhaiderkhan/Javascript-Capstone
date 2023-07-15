import commentbtn from '../assets/comment.png';
import likes from '../assets/heart.png';
import logo from '../assets/images/logo.png';

const logoEl = document.querySelector('#logo');
const logoImg = document.createElement('img');
logoImg.classList.add('logo');
logoImg.src = logo;
logoEl.insertAdjacentElement('beforeend', logoImg);

const productContainer = document.querySelector('.products');

const display = async (data) => {
  productContainer.innerHTML = '';
  try {
    for (const list of data) {
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
      const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/myodB0I2hWMN7rQnMtyn/likes/');
      const likesData = await response.json();

      const likesElement = document.getElementById(`likes-${list.id}`);
      const like = likesData.find((el) => el.item_id === list.id);

      if (like) {
        likesElement.textContent = like.likes;
      }

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

        likesElement.textContent = parseInt(likesElement.textContent, 10) + 1;
      });
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export default display;