const instructionButtons = document.querySelector("#instructions-button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");
const play = document.querySelector(".play-game");
const overlay = document.querySelector(".overlay");
const musicButton = document.getElementById("music-button");
const audio = document.querySelector("audio");
let board = document.querySelector(".board");
let currMoleHole;
let currRabbitHole;

// Mole Appearance
setInterval(createMole, 1000);

// Rabbit Appearance
setInterval(createRabbit, 1000);

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
function instructionlist() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}
// Close button
function closeinstruction() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

// Escape button function
function closingEscape(e) {
  if (e.key === "Escape") {
    closeinstruction();
  }
}

// Holes grid
function startGame() {
  for (let i = 0; i < 9; i++) {
    console.log(i);
    let hole = document.createElement("div");
    hole.id = i.toString();
    // hole.addEventListener("click", selectHole)
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
  if (currMoleHole) {
    currMoleHole.innerHTML = "";
  }

  let mole = document.createElement("img");
  mole.src = "/assets/images/mole.webp";

  let num = randomHole();
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
  if (currRabbitHole) {
    currRabbitHole.innerHTML = "";
  }
  rabbit = document.createElement("img");
  rabbit.src = "/assets/images/rabbit.webp";
  let num = randomHole();
  currRabbitHole = document.getElementById(num);
  currRabbitHole.appendChild(rabbit);
}

close.addEventListener("click", closeinstruction);
instructionButtons.addEventListener("click", instructionlist);
play.addEventListener("click", closeinstruction);
document.addEventListener("keydown", closingEscape);
