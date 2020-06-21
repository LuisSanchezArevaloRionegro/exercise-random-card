var suits = ["spades", "diamonds", "clubs", "hearts"];
var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
var cardEmpty = "<div><div class=\"card\"><div class=\"paloSuperior\"><span></span></div><div class=\"valor\"></div><div class=\"paloInferior\"><span></span></div></div>";

function getRandomCard() {
  let elem = document.querySelector("body");
  elem.innerHTML = cardEmpty;

  let baseCard = document.querySelector(".card");
  baseCard.childNodes[1].innerHTML = values[Math.floor(Math.random() * values.length)]; 
  randomSuit = suits[Math.floor(Math.random() * suits.length)];

  switch (randomSuit) {
    case "spades":
      baseCard.firstChild.firstChild.innerHTML = "&#9824";
      baseCard.childNodes[2].firstChild.innerHTML = "&#9824";
      break;
    case "diamonds":
      baseCard.firstChild.firstChild.innerHTML = "&#9830";
      baseCard.firstChild.firstChild.style.color = "red";
      baseCard.childNodes[2].firstChild.innerHTML = "&#9830";
      baseCard.childNodes[2].firstChild.style.color = "red";
      break;
    case "clubs":
      baseCard.firstChild.firstChild.innerHTML = "&#9827";
      baseCard.childNodes[2].firstChild.innerHTML = "&#9827";
      break;
    case "hearts":
      baseCard.firstChild.firstChild.innerHTML = "&#9829";
      baseCard.firstChild.firstChild.style.color = "red";
      baseCard.childNodes[2].firstChild.innerHTML = "&#9829";
      baseCard.childNodes[2].firstChild.style.color = "red";
      break;
  }
  
}