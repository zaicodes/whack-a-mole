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
const userName = document.getElementById("userName");
const saveButton = document.getElementById("saveButton");
const savedNameDisplay = document.getElementById("savedNameDisplay");
const form = document.querySelector(".form");
const difficultyMain = document.querySelector(".difficulty-main");
const hitMoleSound = document.querySelector(".hit-mole-sound");
const failSound = document.querySelector(".fail-sound");
const gameOverEffect = document.querySelector(".game-over");
const gameOverBox = document.querySelector(".game-over-box");
const playGameAgain = document.querySelectorAll(".play-game-again");
const gameWin = document.getElementById("celebration");
const leaderBoard = document.querySelector(".main-leaderboard");
const leaderBoardButton = document.getElementById("Leaderboard");
const closeLeaderBoard = document.querySelector(".close-leaderboard");
const allBtnSound = document.querySelector(".allbtnsound");
const playAgainSound = document.querySelector(".play-again-sound");
const screenshotButton = document.getElementById("screenshotbtn");
const screenshotImage = document.getElementById("screenshotimage");
const screenshotLayer = document.querySelector(".screenshot-layer");
const link = document.querySelector(".screenshot-link");
const closingScreenshot = document.querySelector(".closing-screenshot");
const screenshotName = document.querySelector(".screenshot-main");
let board = document.querySelector(".board");
let currMoleHole;
let currRabbitHole;
let score = 0;
let gameOver = false;
let moleClicked = false;
allBtnSound.volume = 0.2;
playAgainSound.volume = 0.2;

// Username in the localStorage
userName.addEventListener("input", function () {
  savedNameDisplay.textContent = userName.value;
});

saveButton.addEventListener("click", function () {
  const name = userName.value;
  allBtnSound.play();

  // hide the overlay of username
  hideOverlay();
  if (name) {
    localStorage.setItem("savedName", name);
    const savedName = localStorage.getItem("savedName");
    console.log(savedName);
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
  console.log(savedName);
  hideOverlay();
  if (savedName) {
    form.classList.add("hidden");
  }
});

overlay.classList.remove("hidden");

// Reset game
function gameRefreshed() {
  localStorage.removeItem("savedName");
  localStorage.removeItem("playerScore");
  location.reload();
  allBtnSound.play();
}

reset.addEventListener("click", gameRefreshed);

// Difficulty Settings

// Easy
easyButton.addEventListener("click", function () {
  hidDifficultyButtons();
  setInterval(createMole, 1300);
  setInterval(createRabbit, 1400);
  setInterval(showCelebration, 3000);
  allBtnSound.play();
});

// Medium
mediumButton.addEventListener("click", function () {
  hidDifficultyButtons();
  setInterval(createMole, 900);
  setInterval(createRabbit, 1000);
  setInterval(showCelebration, 3000);
  allBtnSound.play();
});

// Hard
hardButton.addEventListener("click", function () {
  hidDifficultyButtons();
  setInterval(createMole, 500);
  setInterval(createRabbit, 700);
  setInterval(showCelebration, 3000);
  allBtnSound.play();
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
function PlayMusic() {
  if (audio.paused) {
    audio.volume = 0.2;
    audio.play();
    musicButton.innerHTML =
      '<i class="fa fa-stop" aria-hidden="true"></i> Stop Music';
  } else {
    audio.pause();
    musicButton.innerHTML =
      '<i class="fa fa-music" aria-hidden="true"></i> Play Music';
  }
}
musicButton.addEventListener("click", PlayMusic);

// Buttons sound

settingButton.forEach((button) => {
  button.addEventListener("click", function () {
    allBtnSound.play();
  });
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
    hideLeaderBoard();
  }
}

// Holes grid
function startGame() {
  for (let i = 0; i < 9; i++) {
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
  mole.src = "assets/images/mole.webp";

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
  rabbit.src = "assets/images/rabbit.webp";
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
    if (!moleClicked) {
      moleClicked = true;
      score += 10;
      localStorage.setItem("playerScore", score);
      const playerScore = localStorage.getItem("playerScore");
      console.log(playerScore);
      var scoreElements = document.querySelectorAll(".score");
      for (var i = 0; i < scoreElements.length; i++) {
        scoreElements[i].innerHTML = score.toString();
      }

      hitMoleSound.play();

      this.removeEventListener("click", selectMole);

      setTimeout(() => {
        this.addEventListener("click", selectMole);
        moleClicked = false;
      }, 1000);
    }
  } else if (this == currRabbitHole) {
    document.querySelector(".score").innerHTML = score.toString();
    gameOver = true;
    failSound.play();
    gameOverEffect.classList.add("effect");
    gameOverBox.style = "display: block";
  }
}

// Game Over
gameOverBox.style = "display: none";

// Play game again button
function playAgain() {
  location.reload();
}
playGameAgain.forEach(function (button) {
  button.addEventListener("click", playAgain);
});

// Game Win
const showCelebration = function () {
  if (!gameOver && score >= 10) {
    console.log(score);
    gameWin.classList.remove("hidden");
    document.querySelector("canvas").classList.remove("hidden");
  } else if (gameOver) {
    gameOverEffect.classList.add("effect");
    gameOverBox.style = "display: block";
  }
};

// Overlay height
window.addEventListener("resize", function () {
  overlay.style.height = window.innerHeight + "px";
});

// Event Listeners

// Celebration effect - code from https://www.codehim.com/animation-effects/javascript-confetti-explosion-effect/

//-----------Var Inits--------------
canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
cx = ctx.canvas.width / 2;
cy = ctx.canvas.height / 2;

let confetti = [];
const confettiCount = 300;
const gravity = 0.5;
const terminalVelocity = 5;
const drag = 0.075;
const colors = [
  { front: "red", back: "darkred" },
  { front: "green", back: "darkgreen" },
  { front: "blue", back: "darkblue" },
  { front: "yellow", back: "darkyellow" },
  { front: "orange", back: "darkorange" },
  { front: "pink", back: "darkpink" },
  { front: "purple", back: "darkpurple" },
  { front: "turquoise", back: "darkturquoise" },
];

//-----------Functions--------------
resizeCanvas = () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  cx = ctx.canvas.width / 2;
  cy = ctx.canvas.height / 2;
};

randomRange = (min, max) => Math.random() * (max - min) + min;

initConfetti = () => {
  for (let i = 0; i < confettiCount; i++) {
    confetti.push({
      color: colors[Math.floor(randomRange(0, colors.length))],
      dimensions: {
        x: randomRange(10, 20),
        y: randomRange(10, 30),
      },

      position: {
        x: randomRange(0, canvas.width),
        y: canvas.height - 1,
      },

      rotation: randomRange(0, 2 * Math.PI),
      scale: {
        x: 1,
        y: 1,
      },

      velocity: {
        x: randomRange(-25, 25),
        y: randomRange(0, -50),
      },
    });
  }
};

//---------Render-----------
render = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  confetti.forEach((confetto, index) => {
    let width = confetto.dimensions.x * confetto.scale.x;
    let height = confetto.dimensions.y * confetto.scale.y;

    // Move canvas to position and rotate
    ctx.translate(confetto.position.x, confetto.position.y);
    ctx.rotate(confetto.rotation);

    // Apply forces to velocity
    confetto.velocity.x -= confetto.velocity.x * drag;
    confetto.velocity.y = Math.min(
      confetto.velocity.y + gravity,
      terminalVelocity
    );
    confetto.velocity.x += Math.random() > 0.5 ? Math.random() : -Math.random();

    // Set position
    confetto.position.x += confetto.velocity.x;
    confetto.position.y += confetto.velocity.y;

    // Delete confetti when out of frame
    if (confetto.position.y >= canvas.height) confetti.splice(index, 1);

    // Loop confetto x position
    if (confetto.position.x > canvas.width) confetto.position.x = 0;
    if (confetto.position.x < 0) confetto.position.x = canvas.width;

    // Spin confetto by scaling y
    confetto.scale.y = Math.cos(confetto.position.y * 0.1);
    ctx.fillStyle =
      confetto.scale.y > 0 ? confetto.color.front : confetto.color.back;

    // Draw confetti
    ctx.fillRect(-width / 2, -height / 2, width, height);

    // Reset transform matrix
    ctx.setTransform(1, 0, 0, 1, 0, 0);
  });

  // Fire off another round of confetti
  if (confetti.length <= 10) initConfetti();

  window.requestAnimationFrame(render);
};

//---------Execution--------
initConfetti();
render();

//----------Resize----------
window.addEventListener("resize", function () {
  resizeCanvas();
});

//------------Click------------
window.addEventListener("click", function () {
  initConfetti();
});
// End of Celebration Effect

// Footer Pull-up feature
document.querySelector(".pull").addEventListener("click", () => {
  const footerContainer = document.querySelector(".footer-container");
  footerContainer.classList.toggle("hidden");

  if (footerContainer.classList.contains("hidden")) {
    document.querySelector(".pull").innerHTML = "PULL UP ⬆";
    document.querySelector("footer").style = "margin-top: 0px";
  } else {
    document.querySelector(".pull").innerHTML = "PUSH DOWN ⬇";
    document.querySelector("footer").style = "margin-top: -88px";
  }
});

// LeaderBoard

function displayLeaderBoard() {
  const namesContainer = document.querySelector(".playerinfo");
  const scoresContainer = document.querySelector(".scoreinfo");

  // Retrieve the leaderBoard data from local storage
  const leaderBoardData =
    JSON.parse(localStorage.getItem("leaderBoardData")) || [];

  // check the new player score
  const newPlayerScore = localStorage.getItem("playerScore");
  if (newPlayerScore) {
    const playerName = localStorage.getItem("savedName") || "Anonymous";
    leaderBoardData.push({ name: playerName, score: parseInt(newPlayerScore) });
    localStorage.removeItem("playerScore");
  }

  // Sort the leaderBoard data by scores in descending order
  leaderBoardData.sort((a, b) => b.score - a.score);

  // Display the top 10 players
  for (let i = 0; i < Math.min(leaderBoardData.length); i++) {
    const player = leaderBoardData[i];
    const playerName = player.name;
    const playerScore = player.score;

    // Create elements to display player names and scores
    const nameElement = document.createElement("li");
    const scoreElement = document.createElement("li");

    nameElement.textContent = playerName;
    scoreElement.textContent = playerScore;

    // Append the elements to the containers
    namesContainer.appendChild(nameElement);
    scoresContainer.appendChild(scoreElement);
  }
  // Optionally, you can remove access elements if there are more than 10 players
  while (namesContainer.children.length > 10) {
    namesContainer.removeChild(namesContainer.lastChild);
    scoresContainer.removeChild(scoresContainer.lastChild);
  }

  // Update the leaderBoard data in the local storage
  localStorage.setItem("leaderBoardData", JSON.stringify(leaderBoardData));
}

// Call the displayLeaderBoard function to display the leaderBoard

displayLeaderBoard();

// Showing and hiding the leaderBoard when clicked on
const hideLeaderBoard = () => {
  leaderBoard.classList.add("hidden");
  overlay.classList.add("hidden");
};
const ShowLeaderBoard = () => {
  leaderBoard.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

// Taking a Screenshot functionality

document.addEventListener("DOMContentLoaded", function () {
  const captureElement = document.body;
  screenshotLayer.classList.add("hidden");
  screenshotButton.addEventListener("click", function () {
    html2canvas(captureElement, {
      useCORS: true,
      onclone: function () {},
    }).then(function (canvas) {
      const screenshotDataUrl = canvas.toDataURL("image/png");
      screenshotImage.src = screenshotDataUrl;
      function shareonfacebook() {
        const screenshotdataurl = screenshotImage;
        const shareusrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          screenshotdataurl
        )}`;
        window.open(shareusrl, "_blank");
      }
      link.href = screenshotDataUrl;
    });
    screenshotName.classList.add("effect");
    screenshotLayer.classList.remove("hidden");
  });
});
closingScreenshot.addEventListener("click", function () {
  screenshotLayer.classList.add("hidden");
  screenshotName.classList.remove("effect");
});

closeLeaderBoard.addEventListener("click", hideLeaderBoard);
leaderBoardButton.addEventListener("click", ShowLeaderBoard);

close.addEventListener("click", closeInstruction);
instructionButtons.addEventListener("click", instructionList);
play.addEventListener("click", closeInstruction);
document.addEventListener("keydown", closingEscape);
