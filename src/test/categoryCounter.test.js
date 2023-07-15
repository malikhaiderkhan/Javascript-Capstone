import categoryData from '../modules/category.js';

describe('categoryData', () => {
  let container;

  beforeEach(() => {
    container = document.createElement('div');
    container.classList.add('category');
  });

  afterEach(() => {
    container = null;
  });

  test('should display the total count of items', () => {
    const data = [['Item 1', 'Item 2'], ['Item 3']];
    categoryData(data, container);

    const totalCountElement = container.querySelector('.total-count');
    expect(totalCountElement).toBeDefined();
    expect(totalCountElement.textContent).toBe('Total Items: 3');
  });

  test('should display the correct total count of items when data is empty', () => {
    const data = [];
    categoryData(data, container);

    const totalCountElement = container.querySelector('.total-count');
    expect(totalCountElement).toBeDefined();
    expect(totalCountElement.textContent).toBe('Total Items: 0');
  });

  test('should display the correct total count of items when data has nested arrays', () => {
    const data = [['Item 1', 'Item 2'], ['Item 3', 'Item 4', 'Item 5'], ['Item 6']];
    categoryData(data, container);

    const totalCountElement = container.querySelector('.total-count');
    expect(totalCountElement).toBeDefined();
    expect(totalCountElement.textContent).toBe('Total Items: 6');
  });
});