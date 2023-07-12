import commentbtn from '../images/comment.png';
const productContainer = document.querySelector('.products');

const display = (data) => {
    productContainer.innerHTML = '';
    data.forEach((list) => {
        const productWrap = document.createElement('div');
        productWrap.classList.add('card');
        productWrap.innerHTML = `
            <div class='card-img'><img src='${list.image}' /></div>
            <div class='card-title'><h4>${list.title}</h4></div>
            <div class='card-price'><h5>$${list.price}</h5><div class='comment'><img src='${commentbtn}' /></div></div>
            <button class='btn' data-url='https://fakestoreapi.com/products/${list.id}'>Check Item</button>
        `;

        productContainer.appendChild(productWrap);
    });
}

export default display;