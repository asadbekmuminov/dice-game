const newGame = document.getElementById("new");
const dice = document.getElementById("dice");
const hold = document.getElementById("hold");
const image = document.getElementById("image");

//begin
image.style.display = "none";
let currentCcounter = 0;
let playingPlayer = 1;
let score = [0, 0];
let gameEnd = true;
const replace = function () {
  document
    .getElementById(`section-${playingPlayer}`)
    .classList.add("no-active");
  currentCcounter = 0;
  document.getElementById(`current-point-${playingPlayer}`).textContent = 0;
  playingPlayer = playingPlayer === 1 ? 2 : 1;
  document
    .getElementById(`section-${playingPlayer}`)
    .classList.remove("no-active");
};

//dice-btn
dice.addEventListener("click", () => {
  if (gameEnd) {
    image.style.display = "block";
    const random = Math.floor(Math.random() * 6 + 1);
    image.src = `./img/${random}.png  `;
    //   current1.textContent = currentCcounter;
    if (random !== 1) {
      currentCcounter += random;
      document.getElementById(`current-point-${playingPlayer}`).textContent =
        currentCcounter;
    } else {
      replace();
    }
  }
});
//hold

hold.addEventListener("click", () => {
  if (gameEnd) {
    score[playingPlayer - 1] += currentCcounter;
    document.getElementById(`point-${playingPlayer}`).textContent =
      score[playingPlayer - 1];
    // replace();
    if (score[playingPlayer - 1] >= 10) {
      gameEnd = false;
      document
        .getElementById(`section-${playingPlayer}`)
        .classList.add("winner");
      document.getElementById(`player-${playingPlayer}`).textContent =
        "YOU WIN🥳";
    } else {
      replace();
    }
  }
});

//new-game

newGame.addEventListener("click", () => {
  image.style.display = "none";
  currentCcounter = 0;
  playingPlayer = 1;
  score = [0, 0];
  gameEnd = true;
  document.getElementById(`player-1`).textContent = "Player 1";
  document.getElementById(`player-2`).textContent = "Player 1";
  document.getElementById(`current-point-1`).textContent = 0;
  document.getElementById(`current-point-2`).textContent = 0;
  document.getElementById(`point-1`).textContent = 0;
  document.getElementById(`point-2`).textContent = 0;
  document.getElementById(`section-1`).classList.remove("winner");
  document.getElementById(`section-2`).classList.remove("winner");
  document.getElementById(`section-1`).classList.remove("no-active");
  document.getElementById(`section-2`).classList.add("no-active");
});
