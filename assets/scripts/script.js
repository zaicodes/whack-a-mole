const instructionButtons = document.querySelector("#instructions-button");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const allBtnSound = document.querySelector(".allbtnsound");
const enterButton = document.querySelector("#enter-button");

// modal instructions //
function instructionList() {
  allBtnSound.play();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
} // Close button
function closeInstruction() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
} // Escape button function
function closingEscape(e) {
  if (e.key === "Escape") {
    closeInstruction();
  }
}

document.addEventListener("keydown", closingEscape);

const close = document.querySelector(".close");
close.addEventListener("click", closeInstruction);
instructionButtons.addEventListener("click", instructionList);
enterButton.addEventListener("click", () => {
  allBtnSound.play();
});
