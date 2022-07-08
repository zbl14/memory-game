// import $ from 'jquery';

// export class Game {
//   constructor() {
//     this.hasFlippedCard = false;
//     this.lockBoard = false;
//     this.firstCard;
//     this.secondCard;
//     this.move = 0;
//     this.match = 0;
//     this.cards = $(".memory-card");
//   }

//   flipCard () {
//     this.cards.on("click", function(){
//       if (this.lockBoard === false) {
//         if (this.classList.contains('match') === false) {
//           this.classList.add("flip");
//           if (!this.hasFlippedCard) {
//             this.hasFlippedCard = true;
//             this.firstCard = this;
//             return;
//           }
//           this.secondCard = this;
//           this.hasFlippedCard = false;
//           this.lockBoard = true;
//           Game.checkMatch();
//           this.move++;
//           $(".move").html(this.move);
//         }
//       }
//     });
//   }

//   checkMatch () {
//     let isMatch = this.firstCard.dataset.name === this.secondCard.dataset.name;
//     isMatch ? Game.disableCards() : Game.unflipCard();
//   }

//   disableCards () {
//     this.firstCard.classList.add('match');
//     this.secondCard.classList.add('match');
//     this.match++;
//     this.lockBoard = false;
//     Game.endGame();
//   }

//   unflipCard () {
//     setTimeout(() => {
//       this.firstCard.classList.remove("flip");
//       this.secondCard.classList.remove("flip");
//       this.lockBoard = false;
//     }, 1000);
//   }

//   endGame () {
//     if (this.match === 8) {
//       setTimeout(() => {
//         alert("You Win!");
//       }, 1000);
//     }
//   }
// }


