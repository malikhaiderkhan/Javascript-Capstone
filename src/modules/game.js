import display from './display.js';

class Game {
    #GET_ALL_TEAMS_ENDPOINT;

    #INVOLVEMENT_API_ENDPOINT;

    #APP_ID;

    constructor() {
      this.#APP_ID = 'myodB0I2hWMN7rQnMtyn';
      this.#GET_ALL_TEAMS_ENDPOINT = 'https://fakestoreapi.com/products';
      this.#INVOLVEMENT_API_ENDPOINT = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${this.#APP_ID}/likes/`;
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
        throw new Error('unknown error');
      }
    }

    async addNewApp() {
      const response = await fetch(this.#INVOLVEMENT_API_ENDPOINT, {
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
        method: 'POST',

      });
      return response;
    }
}

export default Game;