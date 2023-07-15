const categoryData = (data, container) => {
  if (!container) {
    container = document.querySelector('.category'); // Use default container if not provided
  }
  container.innerHTML = '';
  data.forEach((list) => {
    const CAT_LIST = document.createElement('div');
    CAT_LIST.classList.add('cat-list');
    CAT_LIST.innerHTML = `${list} ${list.length}`;

    container.appendChild(CAT_LIST);
  });
};

export default categoryData;