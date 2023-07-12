import display from './display.js';

class Game {
    #GET_ALL_TEAMS_ENDPOINT;

    constructor() {
      this.#GET_ALL_TEAMS_ENDPOINT = 'https://fakestoreapi.com/products';
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
}

export default Game;