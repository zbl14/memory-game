// import 'bootstrap';
// import './css/styles.css';
// import $ from 'jquery';







$(document).ready(function() {
  function flipCard(){
    $(".memory-card").on("click", function(){
        $(this).toggleClass("flip");
    })
  }
  flipCard();
});