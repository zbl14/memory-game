// import 'bootstrap';
// import './css/styles.css';
// import $ from 'jquery';


function flipCard(){
  $(".memory-card").on("click", function(){
      $(this).addClass("flip");
  })
}

function unflipCard(){
  $(".memory-card").on("click", function(){
    $(this).removeClass("flip");
})
}




$(document).ready(function() {

  flipCard();


});