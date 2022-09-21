import { bubbleRadius, snakeSpeed } from './globals.js';
import { ctx }  from './globals.js';

const scoreField = document.getElementById('scoreField');
const highscoresList = document.getElementById('highscoresList');

let currentScore = 0;
let scores;
const loadScores = () => {
  const storageString = localStorage.getItem('scores');
  scores = storageString ? JSON.parse(storageString) : [];
}
loadScores();

const cleanList = () => {
  return [...scores, currentScore].sort((a, b) => a - b).reverse().slice(0, 10);
}

const renderTable = () => {
  let hasHighlicht = false;
  highscoresList.innerHTML = cleanList().map(score => {
    let className = '';
    if(!hasHighlicht && score === currentScore) {
      className = 'highlighted'
      hasHighlicht = true;
    }
    return `<tr><td class="${ className }">${ score }</td></tr>`;
  }).join('');
}

const saveScores = () => {
  localStorage.setItem('scores', JSON.stringify(cleanList()));
}


export const resetScore = () => {
  loadScores();
}
export const updateScore = (score) => {
  currentScore = score;
  scoreField.textContent = score;
  saveScores();
  renderTable();
}