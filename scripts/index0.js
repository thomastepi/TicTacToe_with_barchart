let board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];
let player1;
let player2;
let squaresLeft = 9;
let cpuRow;
let cpuColumn;
const xbuttonElement = document.getElementById("xbutton");
const obuttonElement = document.getElementById("obutton");
var result = document.querySelector(".result");

// Assigns the player and computer as X or O based on the button pressed at the start of the game, if O is chosen the computer moves first
const chooseXorO = (symbol) => {
  if (symbol === "X") {
    player1 = "X";
    player2 = "O";
    disableXO(symbol);
    enableBoard();
  } else {
    player1 = "O";
    player2 = "X";
    disableXO(symbol);
    enableBoard();
    // computerMove();
  }
};

// Disables the X and O buttons after they are clicked to start the game
const disableXO = (symbol) => {
  if (symbol === "X") {
    xbuttonElement.disabled = true;
    xbuttonElement.style.color = "orange";
    obuttonElement.disabled = true;
    obuttonElement.style.color = "black";
    obuttonElement.style.border = "none";
  } else {
    xbuttonElement.disabled = true;
    xbuttonElement.style.color = "black";
    xbuttonElement.style.border = "none";
    obuttonElement.disabled = true;
    obuttonElement.style.color = "orange";
  }
};

// Enables clicking of buttons on the board
const enableBoard = () => {
  var boxes = document.getElementsByClassName("box");
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].innerHTML = "";
    boxes[i].setAttribute("onclick", "userMove(id)");
  }
};

// When the user clicks a square, disables the square, and tests if the player has won, if it's a tie game, then generates a computer move and checks if the computer has won
const userMove = (id) => {
  document.getElementById(id).removeAttribute("onclick");
  document.getElementById(id).innerText = player1;

  board[id[0]][id[1]] = player1;
  squaresLeft--;
  if (testWin(player1)) {
    return;
  }
  if (!testTie()) {
    setTimeout(function () {
      computerMove();
    }, 250);
  }
};

// Generates a random computer move in an empty square and disables that square
const computerMove = () => {
  while (
    board[cpuRow][cpuColumn] === player1 ||
    board[cpuRow][cpuColumn] === player2
  );
  board[cpuRow][cpuColumn] = player2;
  document.getElementById(cpuRow + "" + cpuColumn).innerHTML = player2;
  document.getElementById(cpuRow + "" + cpuColumn).removeAttribute("onclick");
  squaresLeft--;
  if (testWin(player2)) {
    return;
  }
  testTie();
}

// Tests if 3 symbols in a row are the same and ends the game if true
const testWin = (symbol) => {
  if (
    (board[0][0] === symbol &&
      board[0][1] === symbol &&
      board[0][2] === symbol) ||
    (board[1][0] === symbol &&
      board[1][1] === symbol &&
      board[1][2] === symbol) ||
    (board[2][0] === symbol &&
      board[2][1] === symbol &&
      board[2][2] === symbol) ||
    (board[0][0] === symbol &&
      board[1][0] === symbol &&
      board[2][0] === symbol) ||
    (board[0][1] === symbol &&
      board[1][1] === symbol &&
      board[2][1] === symbol) ||
    (board[0][2] === symbol &&
      board[1][2] === symbol &&
      board[2][2] === symbol) ||
    (board[0][0] === symbol &&
      board[1][1] === symbol &&
      board[2][2] === symbol) ||
    (board[0][2] === symbol && board[1][1] === symbol && board[2][0] === symbol)
  ) {
    result.classList.add("win");
    result.textContent = symbol + " WINS!";
    disableBoard();
    setTimeout(function () {
      gameReset();
    }, 4000);
    return true;
  }
};

// // Random number generation for use in computer square selection
// const generateRandomMove = () => {
//   cpuRow = Math.floor(Math.random() * 3);
//   cpuColumn = Math.floor(Math.random() * 3);
// }

// Disables clicking of buttons on the board
const disableBoard = () => {
  var boxes = document.getElementsByClassName("box");
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].removeAttribute("onclick");
  }
};

// Tests if all the squares are full, and if so ends the game in a tie
const testTie = () => {
  if (squaresLeft === 0) {
    result.classList.add("win");
    result.textContent = "It's a tie game! Try Again";
    disableBoard();
    setTimeout(function () {
      gameReset();
    }, 4000);
    return true;
  }
};

// Resets the Board
const gameReset = () => {
  board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  squaresLeft = 9;
  xbuttonElement.disabled = false;
  xbuttonElement.style.color = "white";
  xbuttonElement.style.border = "1px solid white";
  obuttonElement.disabled = false;
  obuttonElement.style.color = "white";
  obuttonElement.style.border = "1px solid white";
  result.classList.remove("win");
  result.textContent = "";
  var boxes = document.getElementsByClassName("box");
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].innerHTML = "";
    boxes[i].setAttribute("onclick", "userMove(id)");
    disableBoard();
  }
};
