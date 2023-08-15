const instructionbtn = document.querySelector("#instructions-button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");
const play = document.querySelector(".play-game");
const overlay = document.querySelector(".overlay");
const musicButton = document.getElementById("music-button");
const audio = document.querySelector("audio");
let board = document.querySelector(".board");

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

close.addEventListener("click", closeinstruction);
instructionbtn.addEventListener("click", instructionlist);
play.addEventListener("click", closeinstruction);
document.addEventListener("keydown", closingEscape);
