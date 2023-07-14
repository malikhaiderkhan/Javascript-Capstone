import './style.css';
import Game from './modules/game.js';
import displayPopup from './modules/popup.js';
import fetchData from './modules/category.js';

const products = new Game();
products.getAllTeams();
products.getCategory();
displayPopup();
