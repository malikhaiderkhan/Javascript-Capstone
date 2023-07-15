const categoryData = (data, container) => {
  if (!container) {
    container = document.querySelector('.category'); // Use default container if not provided
  }

  const totalItems = data.flat().length;
  const totalCountElement = document.createElement('div');
  totalCountElement.classList.add('total-count');
  totalCountElement.textContent = `Total Items: ${totalItems}`;

  // Clear the container before adding the total count element
  container.innerHTML = '';
  container.appendChild(totalCountElement);
};

export default categoryData;