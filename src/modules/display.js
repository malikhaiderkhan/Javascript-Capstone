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

  data.forEach(async (list) => {
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

    try {
      const likesResponse = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/myodB0I2hWMN7rQnMtyn/likes/');
      const likesData = await likesResponse.json();

      const likesElement = document.getElementById(`likes-${list.id}`);
      const likesInfo = likesData.find((el) => el.item_id === list.id);

      if (likesInfo) {
        likesElement.textContent = likesInfo.likes;
      }
    } catch (error) {
      throw new Error('Error fetching likes:', error);
    }

    heartIcon.addEventListener('click', async (e) => {
      e.stopPropagation();

      try {
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
        const currentLikes = parseInt(likesElement.textContent, 10);
        likesElement.textContent = currentLikes + 1;
      } catch (error) {
        throw new Error('Error updating likes:', error);
      }
    });
  });
};

export default display;