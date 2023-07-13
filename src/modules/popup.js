const openPopup = async (url) => {
  // Close existing popup if any
  const existingPopup = document.querySelector('.popup');
  if (existingPopup) {
    existingPopup.remove();
  }

  // Fetch and display the popup content
  const response = await fetch(url);
  const data = await response.json();

  const popupContent = document.createElement('div');
  popupContent.classList.add('popup-content');
  popupContent.innerHTML = `
        <div class="close-icon">&times;</div>
        <img src="${data.image}" alt="${data.title}"
        <div class="poptop"><h2>${data.title}</h2><div>
        <div class="popbot"><p id="p1">Price: $${data.price}</p>
        <p>Description: ${data.category}</p></div>
        <div class="popbot2"><p id="p2">Rating: ${data.rating && data.rating.rate}</p>
        <p>Count: ${data.rating && data.rating.count}</p></div>
      `;

  const popupContainer = document.createElement('div');
  popupContainer.classList.add('popup');
  popupContainer.appendChild(popupContent);

  document.body.appendChild(popupContainer);

  // Add event listener to close icon
  const closeIcon = document.querySelector('.close-icon');
  closeIcon.addEventListener('click', () => {
    popupContainer.remove();
  });
};

const displayPopup = () => {
  const productContainer = document.querySelector('.products');
  productContainer.addEventListener('click', async (event) => {
    const { target } = event;
    if (target.classList.contains('btn-comment')) {
      // const parentCard = target.closest('.card');
      // const productId = parentCard.querySelector('.btn').id;
      // const url = `https://fakestoreapi.com/products/${productId}`;
      const { url } = target.dataset;
      await openPopup(url);
    }
  });
};

export default displayPopup;