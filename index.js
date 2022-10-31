let firstCard = 0;
let secondCard = 0;
let sum = 0;
let cards = [];
let hasBlackJack = false;
let isAlive = false;
let message = " ";
sum = firstCard + secondCard;

let messageEl = document.getElementById("message-el");
let sumEL = document.querySelector("#sum-el");
let cardEl = document.querySelector("#card-el");

let player = {
  Name: "Ajay",
  chips: 145,
};

let playerEl = document.querySelector("#player-el");
playerEl.textContent = player.Name + ": $" + player.chips;

function getRandomCard() {
  let randomNo = Math.floor(Math.random() * 13) + 1;
  if (randomNo === 1) return 11;
  else if (randomNo >= 11 && randomNo <= 13) return 10;
  else return randomNo;
}
function startGame() {
  isAlive = true;
  firstCard = getRandomCard();
  secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function renderGame() {
  cardEl.textContent = "Card:";
  sumEL.textContent = "Sum:" + sum;
  for (let i = 0; i < cards.length; i++) {
    cardEl.textContent += " " + cards[i];
  }
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
}
function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
  }
}
