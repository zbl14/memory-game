import 'bootstrap';
import './css/styles.css';
import $ from 'jquery';
// import { Card } from '..src/js/game.js'

let hasFlippedCard = false;
let firstCard, secondCard;

let flipCard = () => {
  $(".memory-card").on("click", function(){
    this.classList.add("flip");
    if (!hasFlippedCard) {
      console.log(hasFlippedCard);
      hasFlippedCard = true;
      console.log(hasFlippedCard);
      firstCard = this;
      console.log(firstCard);
      return;
    }
    console.log(hasFlippedCard);
    secondCard = this;
    console.log(secondCard);
    hasFlippedCard = false;
    console.log(hasFlippedCard);
    checkMatch();
  });
};

let checkMatch = () => {
  let isMatch = firstCard.dataset.name === secondCard.dataset.name;
  isMatch ? disableCards() : unflipCard();
};

let disableCards = () => {
  $(".memory-card").off("click", flipCard);
};

let unflipCard = () => {
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
  }, 1500);
};




// function unflipCard(){
//   $(".memory-card").on("click", function(){
//     $(this).removeClass("flip");
//   });
// }




$(document).ready(function() {

  flipCard();


});