let board = [["", "", ""], ["", "", ""], ["", "", ""]];
let player;
let computer;
let squaresLeft = 9;
let cpuRow;
let cpuColumn;
const xbuttonElement = document.getElementById("xbutton");
const obuttonElement = document.getElementById("obutton");
var result = document.querySelector('.result');

var chrt = document.getElementById('chart').getContext('2d');

var player_score = 0;
var computer_score = 0;

var player_score_span = document.getElementById('player1Score');
var computer_score_span = document.getElementById('computerScore');

// Assigns the player and computer as X or O based on the button pressed at the start of the game, if O is chosen the computer moves first
const chooseXorO = (symbol) => {
  if (symbol === "X") {
    player = "X";
    computer = "O";
    disableXO(symbol);
    enableBoard();
  } else {
    player = "O";
    computer = "X";
    disableXO(symbol);
    enableBoard();
    computerMove();
  }
}

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
}

// Enables clicking of buttons on the board 
const enableBoard = () => {
  var boxes = document.getElementsByClassName("box");
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].innerHTML = "";
    boxes[i].setAttribute("onclick", "userMove(id)");
  }
}

// When the user clicks a square, disables the square, and tests if the player has won, if it's a tie game, then generates a computer move and checks if the computer has won
const userMove = (id) => {
  document.getElementById(id).removeAttribute("onclick");
  document.getElementById(id).innerText = player;

  board[id[0]][id[1]] = player;
  squaresLeft--;
  if (testWin(player)) {
    player_score++
    check_number_of_wins(player_score);
    player_score_span.innerHTML = player_score;
    return;
  }
  if(!testTie()) {
    setTimeout(function() {
      computerMove();
  }, 250);
  }
}

// Generates a random computer move in an empty square and disables that square
const computerMove = () => {
  do {
    generateRandomMove();
  } while (
    board[cpuRow][cpuColumn] === player ||
    board[cpuRow][cpuColumn] === computer
  );
  board[cpuRow][cpuColumn] = computer;
  document.getElementById(cpuRow + "" + cpuColumn).innerHTML = computer;
  document.getElementById(cpuRow + "" + cpuColumn).removeAttribute("onclick");
  squaresLeft--;
  if (testWin(computer)) {
    computer_score++
    check_number_of_wins(computer_score)
    //console.log(player_score, computer_score)
    computer_score_span.innerHTML = computer_score;
    return;
  }
  testTie();
}

var my_input = document.getElementById('name').value;
var playerLabel = document.getElementById('p_name');
var btn = document.getElementById('btn')
  btn.addEventListener('click', ()=>{
    playerLabel.textContent = 'thomas';
    //alert(my_input);
    console.log(my_input)
  });

  // function player_name(){

  // }
  



// build chart after first player to win 6 times
function check_number_of_wins(score){
  var number_of_plays = 0;
  while (number_of_plays<=10){
    if(score == 6){
     create_chart(player_score, computer_score)
     computer_score = 0;
     player_score = 0;
    }
    number_of_plays++
    }
    
  }

// raw data for building chart
function create_chart(p_score, comp_score){
  var x = ['player', 'computer'];
  var y = [p_score, comp_score];
  var z = ['red', 'green']
  
  new Chart(chrt, {
    type: 'bar',
    data: {
      labels: x,
      datasets: [{
        label: 'Player and computer scores compared',
        data: y,
        backgroundColor: z
      }]
    },
    options: {
      responsive: true,
      scales: {
          yAxes: [{
              ticks: {
                  beginAtZero: true
              }
      }]
      }
  }
  })
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
      result.classList.add('win');
      result.textContent = symbol + " WINS!"
    disableBoard();
    setTimeout(function() {
    gameReset();
  }, 2000);
    return true;
  }
}

// Random number generation for use in computer square selection
const generateRandomMove = () => {
  cpuRow = Math.floor(Math.random() * 3);
  cpuColumn = Math.floor(Math.random() * 3);
}

// Disables clicking of buttons on the board
const disableBoard = () => {
  var boxes = document.getElementsByClassName("box");
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].removeAttribute("onclick");
  }
}

// Tests if all the squares are full, and if so ends the game in a tie
const testTie = () => {
  if (squaresLeft === 0) {
      result.classList.add('win');
      result.textContent = "It's a tie game! Try Again";
    disableBoard();
    setTimeout(function() {
      gameReset();
    }, 2000);
    return true;
  }
}

// Resets the Board
const gameReset = () => {
  board = [["", "", ""], ["", "", ""], ["", "", ""]];
  squaresLeft = 9;
  xbuttonElement.disabled = false;
  xbuttonElement.style.color = "white";
  xbuttonElement.style.border = "1px solid white";
  obuttonElement.disabled = false;
  obuttonElement.style.color = "white";
  obuttonElement.style.border = "1px solid white";
  result.classList.remove('win');
  result.textContent = '';
  var boxes = document.getElementsByClassName("box");
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].innerHTML = "";
    boxes[i].setAttribute("onclick", "userMove(id)");
    disableBoard();
  }
}