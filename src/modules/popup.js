import countComments from './commentCounter.js';

const getComments = async (itemID) => {
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/myodB0I2hWMN7rQnMtyn/comments?item_id=${itemID}`;

  try {
    const response = await fetch(url);
    if (response.ok) {
      const comments = await response.json();
      return comments;
    }
    return [];
  } catch (error) {
    throw new Error('Error occurred while fetching comments:', error);
  }
};

const submitComment = async (itemID, username, comment) => {
  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/myodB0I2hWMN7rQnMtyn/comments/';
  const requestBody = JSON.stringify({ item_id: itemID, username, comment });

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: requestBody,
    });

    if (!response.ok) {
      throw new Error('Failed to submit comment');
    }
  } catch (error) {
    throw new Error('Error occurred while submitting comment');
  }
};

const refreshComments = async (itemID) => {
  const commentList = document.getElementById('comment-list');
  commentList.innerHTML = '';

  const comments = await getComments(itemID);

  comments.forEach((comment) => {
    const listItem = document.createElement('li');
    listItem.innerText = `${comment.creation_date} ${comment.username}: ${comment.comment}`;
    commentList.appendChild(listItem);
  });

  const commentsCount = countComments(commentList); // Get the comments count
  const commentsHeading = document.querySelector('.get-comment h3');
  commentsHeading.innerText = `Comments (${commentsCount})`; // Display the comments count
};

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
      <img src="${data.image}" alt="${data.title}">
      <div class="poptop"><h2>${data.title}</h2></div>
      <div class="coverpop">
        <div class="popbot">
          <p>Price: $${data.price}</p>
          <p>Rating: ${data.rating && data.rating.rate}</p>
        </div>
        <div class="popbot2">
          <p>Description: ${data.category}</p>
          <p>Count: ${data.rating && data.rating.count}</p>
        </div>
      </div>
      <div class="get-comment">
        <h3>Comments</h3>
        <ul id="comment-list"></ul>
      </div>
      <form id="comment-form">
        <h3>Add a comment</h3>
        <div>
          <input type="text" id="username" name="username" placeholder="Your name" required>
        </div>
        <div>
          <textarea id="comment" name="comment" placeholder="Your insights" required></textarea>
        </div>
        <button type="submit">Comment</button>
      </form>
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

  // Add event listener to comment form submission
  const commentForm = document.getElementById('comment-form');
  commentForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const comment = document.getElementById('comment').value;

    // Submit the comment
    await submitComment(data.id, username, comment);
    // Clear the form fields
    commentForm.reset();
    // Refresh the comments
    await refreshComments(data.id);
  });

  // Load comments
  await refreshComments(data.id);
};

const displayPopup = () => {
  const productContainer = document.querySelector('.products');
  productContainer.addEventListener('click', async (event) => {
    const { target } = event;
    if (target.classList.contains('btn-comment')) {
      const { url } = target.dataset;
      await openPopup(url);
    }
  });
};

export default displayPopup;