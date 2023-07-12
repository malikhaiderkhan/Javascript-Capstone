import './style.css';
import Game from './modules/game';
import displayPopup from './modules/popup';

const products = new Game();
products.getAllTeams();

  displayPopup();
