let randomNumber = getRandom();
let score = 10;
let highscore = 0;
let imagePaths = [
  "images/0030.png",
  "images/0031.png",
  "images/0032.png",
  "images/0033.png",
  "images/0034.png",
  "images/0035.png",
  "images/0036.png",
  "images/0037.png",
  "images/0038.png",
  "images/0039.png"
]

function getRandom() {
    return Math.trunc(Math.random() * 101);
}

function getNum() {
    let guessedNumber = document.getElementById('guessField').value;
    return guessedNumber;
}

function clearTextFiled() {
    let guessedNumber = document.getElementById('guessField').value = "";
}

function updateTryHistory(guessedNumber) {
    const paragraph = document.createElement("p");
    paragraph.className = "p";
    const text = document.createTextNode(guessedNumber);
    let parentDiv = document.getElementById("testDiv");
    paragraph.appendChild(text);
    parentDiv.appendChild(paragraph);
}

function updateScore() {
    score -= 1;
    const scoreLabel = document.getElementById(score);
    scoreLabel.src = "images/1f6ab.png";
}

function resetAllLives() {
  let index = 0

  while (index < 10) {
    let scoreLabel = document.getElementById(String(index));
    scoreLabel.src = imagePaths[index];
    index++;
  }
  }

function updateGuessButtonWinnerStyle() {
  const guessButton = document.getElementById('guessButton');
  guessButton.style.color = "white";
  guessButton.disabled = true;
  guessButton.style.backgroundColor = "red";
}

function updateGuessButtonResetStyle() {
  const guessButton = document.getElementById('guessButton');
  guessButton.style.color = "white";
  guessButton.disabled = false;
  guessButton.style.backgroundColor = "#D6B7A2";
}

function disableTextField() {
  let guessedNumber = document.getElementById('guessField').disabled = true;
}

function enableTextField() {
  let guessedNumber = document.getElementById('guessField').disabled = false;
}

function updateHighScoreIfNeeded() {
  const trophyImage = document.getElementById('trophyImage');
  trophyImage.style.opacity = 1;

  const highscoreLabel = document.getElementById('highScoreLabel');
  highscoreLabel.textContent = score;
}


const submitButton = document.getElementById('guessButton');
submitButton.addEventListener('click', function () {
       let guessedNumber = getNum();
      const resetButton = document.getElementById('resetButton');
const promptLabel = document.getElementById("promptLabel");

        if (isNaN(guessedNumber)) {
            const image = document.getElementById("image");
            image.src = "images/eyeroll.gif";
            promptLabel.textContent = "NO! Enter a number between 1 and 100!";
        } else {
            guessedNumber = Number(guessedNumber)

            if (guessedNumber === 0) {
                const image = document.getElementById("image");
                image.src = "images/eyeroll.gif";
                promptLabel.textContent = "WRONG! Number must be between 1 and 100!";
                updateScore();
                updateTryHistory(guessedNumber);
            } else {
              if (guessedNumber > 100) {
                  const image = document.getElementById("image");
                  image.src = "images/eyeroll.gif";
                  promptLabel.textContent = "Guess again!";
                  updateScore();
                  updateTryHistory(guessedNumber);
              }

              if (randomNumber < guessedNumber) {
                  const image = document.getElementById("image");
                  image.src = "images/walkaway.gif";
                  promptLabel.textContent = "Lower!";
                  updateScore();
                  updateTryHistory(guessedNumber);
              }

              if (randomNumber > guessedNumber) {
                  const image = document.getElementById("image");
                  image.src = "images/dontknow.gif";
                  promptLabel.textContent = "Higher!";
                  updateScore();
                  updateTryHistory(guessedNumber);
              }

              if (guessedNumber === randomNumber) {
                  const image = document.getElementById("image");
                  image.src = "images/winner.gif";
                  promptLabel.textContent = "WINNER!";
                  initConfetti();
                  const canvas = document.getElementById("canvas");
                  canvas.style.opacity = 1;
                  render();
                  updateGuessButtonWinnerStyle();
                  resetButton.style.backgroundColor = "green";
                  disableTextField();
                  updateTryHistory(guessedNumber);

                  if (score > highscore) {
                    highscore = score;
                    updateHighScoreIfNeeded();
                  }
              }
            }

            if (0 === score) {
              const image = document.getElementById("image");
                image.src = "images/crying.gif";
                const promptLabel = document.getElementById("promptLabel")
                promptLabel.textContent = `Game Over! The number was ${randomNumber}`;
                updateGuessButtonWinnerStyle();
                disableTextField();
                resetButton.style.backgroundColor = "green";
            }
    }
    clearTextFiled()
});

const resetButton = document.getElementById('resetButton');
resetButton.addEventListener("click", function() {
const canvas = document.getElementById("canvas");
canvas.style.opacity = 0;
resetButton.style.backgroundColor = "#D6B7A2";
const image = document.getElementById("image");
image.src = "images/letsparty.gif";
const promptLabel = document.getElementById("promptLabel");
promptLabel.textContent = "";
updateGuessButtonResetStyle();
score = 10;
resetAllLives();
enableTextField();
let parentDiv = document.getElementById("testDiv");
const paragraph = document.getElementsByTagName("p");
let i = 0;
while ( paragraph.length != 0) {
  parentDiv.removeChild(paragraph[i]);
}
})

























//-----------Var Inits--------------
canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
cx = ctx.canvas.width / 2;
cy = ctx.canvas.height / 2;

let confetti = [];
const confettiCount = 600;
const gravity = 0.5;
const terminalVelocity = 5;
const drag = 0.075;
const colors = [{ front: 'green', back: 'darkgreen' }];

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
        y: randomRange(10, 30) },

      position: {
        x: randomRange(0, canvas.width),
        y: canvas.height - 1 },

      rotation: randomRange(0, 2 * Math.PI),
      scale: {
        x: 1,
        y: 1 },

      velocity: {
        x: randomRange(-25, 25),
        y: randomRange(0, -50) } });
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
    confetto.velocity.y = Math.min(confetto.velocity.y + gravity, terminalVelocity);
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
    ctx.fillStyle = confetto.scale.y > 0 ? confetto.color.front : confetto.color.back;

    // Draw confetto
    ctx.fillRect(-width / 2, -height / 2, width, height);

    // Reset transform matrix
    ctx.setTransform(1, 0, 0, 1, 0, 0);
  });

  // Fire off another round of confetti
  if (confetti.length <= 10) initConfetti();
  window.requestAnimationFrame(render);
};

//----------Resize----------
window.addEventListener('resize', function () {
  resizeCanvas();
});
