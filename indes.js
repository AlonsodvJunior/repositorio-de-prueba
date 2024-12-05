const urlCards = [

  "/cards/adelianaLora/adelianabbc.html",
  "/cards/adelianaLora/adelianabbc.html",
  "/cards/adelianaLora/adelianabbc.html",
  "/cards/adelianaLora/adelianabbc.html",
  "/cards/adelianaLora/adelianabbc.html",
  "/cards/adelianaLora/adelianabbc.html",
  "/cards/adelianaLora/adelianabbc.html",
  "/cards/adelianaLora/adelianabbc.html",
  "/cards/adelianaLora/adelianabbc.html",
  "/cards/adelianaLora/adelianabbc.html",
  "/cards/adelianaLora/adelianabbc.html",
  "/cards/adelianaLora/adelianabbc.html",
  
];

let filterCards = [];
let btnsCreated = [];


function x ( totalPages ) {
  
  for ( let num = 0; num <= totalPages; num++ ) {
    let firstDx = num * 6;
    let lastDx;

    if ( num === totalPages ) {
      if ( firstDx === filterCards.length - 1 ) {
        lastDx = "limit";
      } else {
        lastDx = filterCards.length - 1;
      }
    } else {
      lastDx = filterCards.length + 6;

    let button = document.createElement("button");
    button.cardsSrc;
  }

}

function () {
  const totalPages;
  
  if ( filterCards.length >= 6 ) {

    totalPages = Math.ceil(filterCards.length / 6);

  } else {

    totalPages = 1;
  
  }

  x ( totalPages )
}