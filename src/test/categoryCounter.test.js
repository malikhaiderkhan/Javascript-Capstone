import categoryData from '../modules/category.js';

describe('categoryData', () => {
  it('should display the length of each list', () => {
    // Create a mock container element
    const container = document.createElement('div');
    container.classList.add('category');
    document.body.appendChild(container); // Append the container to the document body

    // Define sample data
    const data = ['List 1', 'List 2', 'List 3'];

    // Call the categoryData method with the mock container
    categoryData(data, container);

    // Verify the correct number of cat-list elements are created
    const catListElements = container.querySelectorAll('.cat-list');
    expect(catListElements.length).toBe(data.length);

    // Verify that each cat-list element displays the list name and its length
    catListElements.forEach((element, index) => {
      const listName = data[index];
      const expectedText = `${listName} ${listName.length}`;
      expect(element.textContent).toBe(expectedText);
    });
  });
});