// variables
let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

//function
function checkGuest() {
  const userGuest = Number(document.getElementById("guessInput").value);
  const userFeedback = document.getElementById("feedback");
  attempts++;

  if (userGuest < secretNumber) {
    userFeedback.textContent = "terlalu kecil";
  } else if (userGuest > secretNumber) {
    userFeedback.textContent = "terlalu besar";
  } else {
    userFeedback.textContent = `Selamat anda benar! Angkanya adalah ${secretNumber}`;
  }

  document.getElementById("attempts").textContent = `Attempts = ${attempts}`;
}

function restartGame() {
  let secretNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  document.getElementById("guessInput").value = "";
  document.getElementById("feedback").textContent = "";
  document.getElementById("attempts").textContent = "Attempts = 0";
}

document.getElementById("guessBtn").addEventListener("click", checkGuest);
document.getElementById("restartBtn").addEventListener("click", restartGame);
