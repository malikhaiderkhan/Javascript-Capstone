const container = document.querySelector('.category');
const categoryData = (data) => {
        container.innerHTML = '';
    data.forEach(list => {
        const CAT_LIST = document.createElement('div');
        CAT_LIST.classList.add('cat-list');
        CAT_LIST.innerHTML = `${list} ${list.length}`;

        container.appendChild(CAT_LIST);

    });
     
  }

export default categoryData;


    
  
      