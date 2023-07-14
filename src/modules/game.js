import display from './display.js';
import categoryData from './category.js';

class Game {
  #GET_ALL_TEAMS_ENDPOINT;

  #INVOLVEMENT_API_ENDPOINT;

  #APP_ID;

  #CATEGORY_API_ENDPOINT;

  constructor() {
    this.#APP_ID = 'myodB0I2hWMN7rQnMtyn';
    this.#GET_ALL_TEAMS_ENDPOINT = 'https://fakestoreapi.com/products';
    this.#INVOLVEMENT_API_ENDPOINT = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${this.#APP_ID}/likes/`;
    this.#CATEGORY_API_ENDPOINT = 'https://fakestoreapi.com/products/categories';
  }

  async getAllTeams() {
    try {
      const response = await fetch(this.#GET_ALL_TEAMS_ENDPOINT);
      if (response.status === 200) {
        const data = await response.json();
        display(data);
        return;
      }
      throw new Error('Check connection, unable to fetch data');
    } catch (error) {
      throw new Error('Unknown error');
    }
  }

  async getCategory() {
    try {
      const response = await fetch(this.#CATEGORY_API_ENDPOINT);
      if (response.status === 200) {
        const data = await response.json();
        categoryData(data);
        return;
      }
      throw new Error('Check connection');
    } catch (error) {
      throw new Error('Unknown error');
    }
  }
}

export default Game;