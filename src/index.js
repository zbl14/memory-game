import 'bootstrap';
import './css/styles.css';
import $ from 'jquery';
// import { Card } from '..src/js/game.js'

let hasFlippedCard = false;
let firstCard, secondCard;

const cards = $(".memory-card")

let flipCard = () => {
  cards.on("click", function(){
    if (this.classList.contains('match') === false) {
      this.classList.add("flip");
      if (!hasFlippedCard) {
        console.log(hasFlippedCard);
        hasFlippedCard = true;
        console.log(hasFlippedCard);
        firstCard = this;
        return;
      }
      console.log(hasFlippedCard);
      secondCard = this;
      hasFlippedCard = false;
      console.log(hasFlippedCard);
      checkMatch();
    }
  })
}

let checkMatch = () => {
  let isMatch = firstCard.dataset.name === secondCard.dataset.name;
  isMatch ? disableCards() : unflipCard();
};

let disableCards = () => {
  firstCard.classList.add('match');
  secondCard.classList.add('match');
};

let unflipCard = () => {
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
  }, 1500);
};

(function shuffle() {
  for (let i = 0; i <=15; i++) { 
    let ramdomPos = Math.floor(Math.random() * 16);
    cards[i].style.order = ramdomPos;
  }
})()

$(document).ready(function() {
  flipCard();
});