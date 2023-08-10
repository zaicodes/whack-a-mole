const instructionbtn = document.querySelector("#instructions-button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");
const play = document.querySelector(".play-game");

// modal instructions //
function instructionlist() {
  modal.classList.remove("hidden");
}

instructionbtn.addEventListener("click", instructionlist);

function closeinstruction() {
  modal.classList.add("hidden");
}

close.addEventListener("click", closeinstruction);

play.addEventListener("click", closeinstruction);
