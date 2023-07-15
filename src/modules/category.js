const container = document.querySelector('.category');

const categoryData = (data, container) => {
  if (!container) {
    container = document.querySelector('.category'); // Use default container if not provided
  }
  container.innerHTML = '';

  const totalItems = data.flat().length;
  const totalCountElement = document.createElement('div');
  totalCountElement.classList.add('total-count');
  totalCountElement.textContent = `Total Items: ${totalItems}`;
  container.appendChild(totalCountElement);
};

export default categoryData;