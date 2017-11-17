// //******************************************************************
// // Game Logic
// //******************************************************************
function MemoryGame(cardsArray, matchesNum) {
    this.cardsArray = cardsArray;
    this.matchesNum = matchesNum;
    this.selectedCards = [];
    this.pairsClicked = 0;
    this.correctPairs = 0;
};

// Método para el reparto aleatorio de cartas
MemoryGame.prototype.shuffleCards = function() {
  var cardsLength = this.cardsArray.length;
  console.log( "Total de cartas barajar: " + cardsLength )
  console.log( "repeticiones por carta: " + this.matchesNum )
  var usedCards = this.cardsArray;
      for(var i=0; i<cardsLength*this.matchesNum; i++){
        cardSelected = Math.floor( Math.random()*usedCards.length );
        usedCards[cardSelected]["matches"]++;
        console.log( usedCards[cardSelected]["name"] );
        var sanitizedName = usedCards[cardSelected]["name"].split(' ').join('_');
        var card_sanitizedName = sanitizedName;
        var imgName = usedCards[cardSelected]["img"];
        $( "#memory_board" ).append( '<div class= "card" name="' + card_sanitizedName + '" style="background: url(img/' + imgName + ')"></div>');
              //$(".card:last-child").append('<div class="back" name="' + sanitizedName + '"></div>');
              //$(".card:last-child").append('<div class="front" style="background: url(img/green-arrow.jpg)" name="green_arrow"></div>');
              $(".card:last-child").append('<div></div>');
              $(".card:last-child").append('<div class="cover"></div>');
              if (usedCards[cardSelected]["matches"]===this.matchesNum){
          usedCards.splice(cardSelected,1);   
        }
      }
 }

// Método para jugar al seleccionar una carta
MemoryGame.prototype.selectCard = function(card){   
  clickName = $(card).attr("name");
  coverName = $(card.cover)
  console.log("clic en la carta " + clickName);
  if (coverName.is(':visible')) {
    coverName.hide();
  }  
  else{
    coverName.show();  
  }   
  this.selectedCards.push(clickName);
  this.pairsClicked = 0;
};



// //******************************************************************
// // HTML/CSS Interactions
// //******************************************************************


$(document).ready(function(){


 

  var cardsArray = [
    { name: "aquaman",         img: "aquaman.jpg",         matches: 0 },
    { name: "batman",          img: "batman.jpg",          matches: 0 },
    { name: "captain america", img: "captain-america.jpg", matches: 0 },
    { name: "fantastic four",  img: "fantastic-four.jpg",  matches: 0 },
    { name: "flash",           img: "flash.jpg",           matches: 0 },
    { name: "green arrow",     img: "green-arrow.jpg",     matches: 0 },
    { name: "green lantern",   img: "green-lantern.jpg",   matches: 0 },
    { name: "ironman",         img: "ironman.jpg",         matches: 0 },
    { name: "spiderman",       img: "spiderman.jpg",       matches: 0 },
    { name: "superman",        img: "superman.jpg",        matches: 0 },
    { name: "the avengers",    img: "the-avengers.jpg",    matches: 0 },
    { name: "thor",            img: "thor.jpg",            matches: 0 },
  ];


    var memoryGame = new MemoryGame(cardsArray, 3);

    memoryGame.shuffleCards();

    var usedCards = this.cardsArray;

    //evento click en cada card
    $(".card").click(function(){
      memoryGame.selectCard(this);
    });


});