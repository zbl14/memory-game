import 'bootstrap';
import './css/styles.css';
import $ from 'jquery';

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let move = 0;
let match = 0;

const cards = $(".memory-card");

let flipCard = () => {
  cards.on("click", function(){
    if (lockBoard === false) {
      if (this.classList.contains('match') === false) {
        this.classList.add("flip");
        if (!hasFlippedCard) {
          hasFlippedCard = true;
          firstCard = this;
          return;
        }
        secondCard = this;
        hasFlippedCard = false;
        lockBoard = true;
        checkMatch();
        move++;
        $(".move").html(move);
      }
    }
  });
};

let checkMatch = () => {
  let isMatch = firstCard.dataset.name === secondCard.dataset.name;
  isMatch ? disableCards() : unflipCard();
};

let disableCards = () => {
  firstCard.classList.add('match');
  secondCard.classList.add('match');
  match++;
  lockBoard = false;
  endGame();
};

let unflipCard = () => {
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    lockBoard = false;
  }, 1000);
};

let endGame = () => {
  if (match === 8) {
    setTimeout(() => {
      alert("You Win!");
    }, 1000);
  }
};

(function shuffle() {
  for (let i = 0; i <=15; i++) { 
    let ramdomPos = Math.floor(Math.random() * 16);
    cards[i].style.order = ramdomPos;
  }
})();

$(document).ready(function() {
  flipCard();
});