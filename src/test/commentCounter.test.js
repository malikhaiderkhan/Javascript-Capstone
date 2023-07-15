import countComments from '../modules/commentCounter.js';

describe('countComments', () => {
  test('should return the number of comments when commentList has child elements', () => {
    const commentList = document.createElement('ul');
    commentList.innerHTML = '<li>Comment 1</li><li>Comment 2</li><li>Comment 3</li>';

    expect(countComments(commentList)).toBe(3);
  });

  test('should return 0 when commentList does not have any child elements', () => {
    const commentList = document.createElement('ul');

    expect(countComments(commentList)).toBe(0);
  });
});