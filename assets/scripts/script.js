const instructionbtn = document.querySelector("#instructions-button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");
const play = document.querySelector(".play-game");
const overlay = document.querySelector(".overlay");

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

close.addEventListener("click", closeinstruction);
instructionbtn.addEventListener("click", instructionlist);
play.addEventListener("click", closeinstruction);
document.addEventListener("keydown", closingEscape);
