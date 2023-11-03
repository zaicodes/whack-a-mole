const instructionButtons = document.querySelector("#instructions-button");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const allBtnSound = document.querySelector(".allbtnsound");
const enterButton = document.querySelector("#enter-button");
const close = document.querySelector(".close");

// modal instructions //
function instructionList() {
  allBtnSound.play();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}
instructionButtons.addEventListener("click", instructionList);

// Close button for instructions
function closeInstruction() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}
close.addEventListener("click", closeInstruction);

// Escape button function
function closingEscape(e) {
  if (e.key === "Escape") {
    closeInstruction();
  }
}
document.addEventListener("keydown", closingEscape);

// Sound for Enter button
enterButton.addEventListener("click", () => {
  allBtnSound.play();
});
