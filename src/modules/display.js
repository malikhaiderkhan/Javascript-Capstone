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
            <div class='card-like'><img src='${likes}' class='likes' /> <span id='likes'>0</span> Likes</div>
            <button class='btn btn-comment'>Comments <img src='${commentbtn}' /></button>
            <button class='btn' id='${list.id}'>Check Item</button>
        `;

    productContainer.appendChild(productWrap);
  });
};

export default display;