import './style.css';
import Game from './modules/game.js';
import displayPopup from './modules/popup.js';

const products = new Game();
products.getAllTeams();

displayPopup();
