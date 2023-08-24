// Game variables and constants
const settingButton = document.querySelectorAll(".settings-button");
const instructionButtons = document.querySelector("#instructions-button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");
const play = document.querySelector(".play-game");
const overlay = document.querySelector(".overlay");
const musicButton = document.getElementById("music-button");
const audio = document.querySelector(".audio");
const easyButton = document.querySelector(".easy-button");
const mediumButton = document.querySelector(".medium-button");
const hardButton = document.querySelector(".hard-button");
const reset = document.getElementById("reset-button");
let board = document.querySelector(".board");
const userName = document.getElementById("userName");
const saveButton = document.getElementById("saveButton");
const savedNameDisplay = document.getElementById("savedNameDisplay");
const form = document.querySelector(".form");
const difficultyMain = document.querySelector(".difficulty-main");
const hitMoleSound = document.querySelector(".hit-mole-sound");
const failSound = document.querySelector(".fail-sound");
const gameOverEffect = document.querySelector(".game-over");
const gameOverBox = document.querySelector(".game-over-box");
const playGameAgain = document.querySelector(".play-game-again");
let currMoleHole;
let currRabbitHole;
let score = 0;
let gameOver = false;

// Username in the localStorage
saveButton.addEventListener("click", function () {
  const name = userName.value;
  // hide the overlay of username
  hideOverlay();
  if (name) {
    localStorage.setItem("savedName", name);
    savedNameDisplay.textContent = name;
    form.classList.add("hidden");
  }
});

// Show Overlay
function showOverlay() {
  overlay.classList.remove("hidden");
  settingButton.forEach((button) => {
    button.classList.remove("index");
  });
}
showOverlay();

// Hide Overlay
function hideOverlay() {
  overlay.classList.add("hidden");
  settingButton.forEach((button) => {
    button.classList.add("index");
  });
}

// Display username from local storage on page load or refresh
window.addEventListener("load", () => {
  const savedName = localStorage.getItem("savedName");
  if (savedName) {
    userName.value = savedName;
    savedNameDisplay.textContent = savedName;
  }
});

overlay.classList.remove("hidden");

// Reset game
function gameRefreshed() {
  location.reload();
}

reset.addEventListener("click", gameRefreshed);

// Difficulty Settings

// Easy
easyButton.addEventListener("click", function () {
  hidDifficultyButtons();
  setInterval(createMole, 1500);
  setInterval(createRabbit, 3000);
});

// Medium
mediumButton.addEventListener("click", function () {
  hidDifficultyButtons();
  setInterval(createMole, 1000);
  setInterval(createRabbit, 1500);
});

// Hard
hardButton.addEventListener("click", function () {
  hidDifficultyButtons();
  setInterval(createMole, 900);
  setInterval(createRabbit, 2000);
});

// Hide buttons once
const hideDifficulty = localStorage.getItem("difficultyMain");
if (hideDifficulty) {
  difficultyMain.classList.add("hidden");
}

// Hide Buttons
function hidDifficultyButtons() {
  difficultyMain.classList.add("hidden");
}

// Music control settings //
musicButton.addEventListener("click", () => {
  if (audio.paused) {
    audio.volume = 0.2;
    audio.play();
    musicButton.innerHTML =
      '<i class="fa fa-stop" aria-hidden="true"></i> Pause Music';
  } else {
    audio.pause();
    musicButton.innerHTML =
      '<i class="fa fa-music" aria-hidden="true"></i> Play Music';
  }
});

// modal instructions //
function instructionList() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}
// Close button
function closeInstruction() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

// Escape button function
function closingEscape(e) {
  if (e.key === "Escape") {
    closeInstruction();
  }
}

// Holes grid
function startGame() {
  for (let i = 0; i < 9; i++) {
    console.log(i);
    let hole = document.createElement("div");
    hole.id = i.toString();
    hole.addEventListener("click", selectMole);
    board.appendChild(hole);
  }
}
startGame();

// Mole Randomly Appearing
function randomHole() {
  let num = Math.floor(Math.random() * 9);
  return num.toString();
}

// Creating Mole
function createMole() {
  if (gameOver) {
    return;
  }

  if (currMoleHole) {
    currMoleHole.innerHTML = "";
  }

  let mole = document.createElement("img");
  mole.src = "/assets/images/mole.webp";

  let num = randomHole();
  if (currRabbitHole && currRabbitHole.id == num) {
    return;
  }

  currMoleHole = document.getElementById(num);
  currMoleHole.appendChild(mole);
}

// Rabbit Randomly Appearing
function randomRabbit() {
  let num = Math.floor(Math.random() * 9);
  return num.toString();
}

// Creating Rabbit
function createRabbit() {
  if (gameOver) {
    return;
  }

  if (currRabbitHole) {
    currRabbitHole.innerHTML = "";
  }
  rabbit = document.createElement("img");
  rabbit.src = "/assets/images/rabbit.webp";
  let num = randomHole();

  if (currMoleHole && currMoleHole.id == num) {
    return;
  }
  currRabbitHole = document.getElementById(num);
  currRabbitHole.appendChild(rabbit);
}

// Score
function selectMole() {
  if (this == currMoleHole) {
    score += 10;
    var scoreElements = document.querySelectorAll(".score");

    for (var i = 0; i < scoreElements.length; i++) {
      scoreElements[i].innerHTML = score.toString();
    }

    hitMoleSound.play();
  } else if (this == currRabbitHole) {
    document.querySelector(".score").innerHTML = "Game Over" + score.toString();
    gameOver = true;
    failSound.play();
    gameOverEffect.classList.add("effect");
    gameOverBox.style = "display: block";
  }
}

gameOverBox.style = "display: none";

playGameAgain.addEventListener("click", function () {
  location.reload();
});

close.addEventListener("click", closeInstruction);
instructionButtons.addEventListener("click", instructionList);
play.addEventListener("click", closeInstruction);
document.addEventListener("keydown", closingEscape);
