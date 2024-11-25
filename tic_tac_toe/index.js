let board = ["", "", "", "", "", "", "", "", ""]; // Game state
let currentPlayer = "X"; // Start with X
let gameActive = true; // Control game flow

// Winning combinations
const winningCombinations = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
  [0, 4, 8], [2, 4, 6]             // Diagonals
];

const cells = document.querySelectorAll(".cell");
const statusDisplay = document.querySelector(".status");
const resetButton = document.querySelector(".resetBtn");

// Add click event listeners to all cells
cells.forEach((cell, index) => {
  cell.addEventListener("click", () => handleCellClick(index));
});

// Handle cell click
function handleCellClick(index) {
  if (board[index] !== "" || !gameActive) return; // Prevent overwriting or moves after game ends

  // Update game state and UI
  board[index] = currentPlayer;
  cells[index].textContent = currentPlayer;

  checkResult(); // Check if game is won or tied
  if (gameActive) switchPlayer(); // Switch turn
}

// Switch player
function switchPlayer() {
  currentPlayer = currentPlayer === "X" ? "O" : "X"; // Toggle between X and O
  statusDisplay.textContent = `It's ${currentPlayer}'s turn`; // Update UI
}

const popupOverlay = document.querySelector(".popup-overlay");
const popupMessage = document.querySelector(".popup-message");
const closePopupButton = document.querySelector(".close-popup");

// Check game result
function checkResult() {
  let roundWon = false;

  // Check if the current player has a winning combination
  for (let combination of winningCombinations) {
    const [a, b, c] = combination; // Get the 3 positions to check
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      roundWon = true;
      break;
    }
  }

  if (roundWon) {
   showPopup(`${currentPlayer} wins! 🎉`); // Show winner
    gameActive = false; // Stop further moves
    return;
  }

  // Check for a tie
  if (!board.includes("")) {
    showPopup("It's a tie! 🎉");
    gameActive = false; // Stop further moves
    return;
  }
}

function showPopup(message) {
    popupMessage.textContent = message; // Set the message
    popupOverlay.style.display = "flex"; // Show the popup
}

closePopupButton.addEventListener("click", () => {
    popupOverlay.style.display = "none"; // Hide the popup
    resetGame(); // Reset the game
});

// Reset the game
resetButton.addEventListener("click", resetGame);

function resetGame() {
  board = ["", "", "", "", "", "", "", "", ""]; // Clear game state
  currentPlayer = "X"; // Reset to X
  gameActive = true; // Allow moves
  cells.forEach(cell => (cell.textContent = "")); // Clear UI
  statusDisplay.textContent = `It's ${currentPlayer}'s turn`; // Reset status
}
