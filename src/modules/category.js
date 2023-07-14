const container = document.querySelector('.category');
const categoryData = (data) => {
        container.innerHTML = '';
    data.forEach(list => {
        const CAT_LIST = document.createElement('div');
        CAT_LIST.classList.add('cat-list');
        CAT_LIST.innerHTML = `${list}`;

        container.appendChild(CAT_LIST);

    });
     // Modify this according to your data format and display requirements
     
  }

 


  fetch('https://fakestoreapi.com/products/category/jewelery')
  .then(response => response.json())
  .then(data => {
    // Display the number of products in the console
    const JEWELERY = data.length;
    window.JEWELERY = JEWELERY;
  })
  .catch(error => {
    throw new Error('An error occurred:');
  });

  fetch('https://fakestoreapi.com/products/category/electronics')
  .then(response => response.json())
  .then(data => {
    // Display the number of products in the console
    const ELECTRONICS = data.length;
    window.ELECTRONICS = ELECTRONICS;
  })
  .catch(error => {
    throw new Error('An error occurred:');
  });

export default categoryData;


    
  
      