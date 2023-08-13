const instructionbtn = document.querySelector("#instructions-button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");
const play = document.querySelector(".play-game");

// modal instructions //
function instructionlist() {
  modal.classList.remove("hidden");
}
// Close button
function closeinstruction() {
  modal.classList.add("hidden");
}

// Escape button function
function closingEscape(e) {
  if (e.key === "Escape") {
    closeinstruction();
    modal.classList.add("hidden");
  }
}

close.addEventListener("click", closeinstruction);
instructionbtn.addEventListener("click", instructionlist);
play.addEventListener("click", closeinstruction);
document.addEventListener("keydown", closingEscape);
