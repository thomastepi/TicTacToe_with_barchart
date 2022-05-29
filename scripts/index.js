var player1ScoreSpan = document.getElementById('player1Score');
var player2ScoreSpan = document.getElementById('player2Score');
var totalDraws = document.getElementById('total-draws');
var totalPlays = document.getElementById('total-plays');
var player1name = document.getElementById('player1-label');
var player2Name = document.getElementById('player2-label');
var td = document.querySelectorAll('td');

var player_1_score = 0;
var player_2_score = 0;
var total_draws = 0;
var total_plays = 0;
var count = 0;
var body = document.getElementsByTagName('body');
var result = document.querySelector('.result');
var  btn = document.getElementsByTagName('button');

// record score for X symbol and reload page
function xwin() {
    player_1_score++;
    player1ScoreSpan.innerHTML = player_1_score;
    setTimeout(()=>{
        window.location.reload()
    }, 5000);
}

// record score for O symbol and reload page
function owin() {
    player_2_score++;
    player2ScoreSpan.innerHTML = player_2_score;
    setTimeout(()=>{
        window.location.reload()
    }, 5000);
}

// Alternate between symbols after each click
for(var i=0; i<td.length; i++){
    td[i].addEventListener('click',function(){
        count++;
        if(count%2 == 0){
            this.textContent = 'O';
        } else {
            this.textContent = 'X';
        }
    });
}

// Test to verify Win combination of symbols
for(var i=0; i<td.length; i++){
    td[i].addEventListener('click',function(){
        total_plays++;
        totalPlays.innerHTML = total_plays;
        if(td[0].textContent === td[1].textContent && td[0].textContent === td[2].textContent){
            if(td[0].textContent === 'X'){
                xwin();                
                result.classList.add('xwin')
                result.textContent = 'X Has Won The Game!';
            } else {
                owin();
                result.classList.add('owin')
                result.textContent = 'O Has Won The Game!';
            }

            for(var j=0; j<3; j++){
                if(td[0].textContent == 'X'){
                    td[j].classList.add('xbox');
                } else {
                    td[j].classList.add('obox');
                }
            }
        }

        if(td[6].textContent === td[7].textContent && td[6].textContent === td[8].textContent){
            if(td[6].textContent === 'X'){
                xwin();
                result.classList.add('xwin')
                result.textContent = 'X Has Won The Game!';
            } else {
                owin();
                result.classList.add('owin')
                result.textContent = 'O Has Won The Game!';
            }

            for(var j=6; j<9; j++){
                if(td[6].textContent == 'X'){
                    td[j].classList.add('xbox');
                } else {
                    td[j].classList.add('obox');
                }
            }
        }

        if(td[3].textContent === td[4].textContent && td[3].textContent === td[5].textContent){
            if(td[3].textContent === 'X'){
                xwin();
                result.classList.add('xwin')
                result.textContent = 'X Has Won The Game!';
            } else {
                owin();
                result.classList.add('owin')
                result.textContent = 'O Has Won The Game!';
            }

            for(var j=3; j<6; j++){
                if(td[3].textContent == 'X'){
                    td[j].classList.add('xbox');
                } else {
                    td[j].classList.add('obox');
                }
            }
        }

        if(td[0].textContent === td[4].textContent && td[0].textContent === td[8].textContent){
            if(td[4].textContent === 'X'){
                xwin();
                result.classList.add('xwin')
                result.textContent = 'X Has Won The Game!';
            } else {
                owin();
                result.classList.add('owin')
                result.textContent = 'O Has Won The Game!';
            }
            if(td[0].textContent == 'X'){
                td[0].classList.add('xbox');
                td[4].classList.add('xbox');
                td[8].classList.add('xbox');
            } else {
                td[0].classList.add('obox');
                td[4].classList.add('obox');
                td[8].classList.add('obox');
            }
            
        }

        if(td[2].textContent === td[4].textContent && td[2].textContent === td[6].textContent){
            if(td[2].textContent === 'X'){
                xwin();
                result.classList.add('xwin')
                result.textContent = 'X Has Won The Game!';
            } else {
                owin();
                result.classList.add('owin')
                result.textContent = 'O Has Won The Game!';
            }
            if(td[2].textContent == 'X'){
                td[2].classList.add('xbox');
                td[4].classList.add('xbox');
                td[6].classList.add('xbox');
            } else {
                td[2].classList.add('obox');
                td[4].classList.add('obox');
                td[6].classList.add('obox');
            }
            
        }

        if(td[0].textContent === td[3].textContent && td[0].textContent === td[6].textContent){
            if(td[0].textContent === 'X'){
                xwin();
                result.classList.add('xwin')
                result.textContent = 'X Has Won The Game!';
            } else {
                owin();
                result.classList.add('owin')
                result.textContent = 'O Has Won The Game!';
            }
            if(td[0].textContent == 'X'){
                td[0].classList.add('xbox');
                td[3].classList.add('xbox');
                td[6].classList.add('xbox');
            } else {
                td[0].classList.add('obox');
                td[3].classList.add('obox');
                td[6].classList.add('obox');
            }
            
        }

        if(td[1].textContent === td[4].textContent && td[1].textContent === td[7].textContent){
            if(td[1].textContent === 'X'){
                xwin();
                result.classList.add('xwin')
                result.textContent = 'X Has Won The Game!';
            } else {
                owin();
                result.classList.add('owin')
                result.textContent = 'O Has Won The Game!';
            }
            if(td[1].textContent == 'X'){
                td[1].classList.add('xbox');
                td[4].classList.add('xbox');
                td[7].classList.add('xbox');
            } else {
                td[1].classList.add('obox');
                td[4].classList.add('obox');
                td[7].classList.add('obox');
            }
            
        }

        if(td[2].textContent === td[5].textContent && td[2].textContent === td[8].textContent){
            if(td[2].textContent === 'X'){
                xwin();
                result.classList.add('xwin')
                result.textContent = 'X Has Won The Game!';
            } else {
                owin();
                result.classList.add('owin')
                result.textContent = 'O Has Won The Game!';
            }
            if(td[2].textContent == 'X'){
                td[2].classList.add('xbox');
                td[5].classList.add('xbox');
                td[8].classList.add('xbox');
            } else {
                td[2].classList.add('obox');
                td[5].classList.add('obox');
                td[8].classList.add('obox');
            }
            
        }

        // If game ends in a tie
        if(count == 9){
            result.classList.add('tie')
            result.textContent = "It's a tie game! Try again"
            total_draws++;
            totalDraws.innerHTML = total_draws;
            setTimeout(() => {
               window.location.reload() 
            }, 3000);
        }
    });
}

// Assign Unique Player Names
function newPlayerNames(){
    let player_1_name = prompt('Player1 Please Enter Your Name');
    let player_2_name = prompt('Player2 Please Enter Your Name');
    if(player_1_name && player_1_name.trim() != ''){
        player1name.innerHTML = player_1_name;
    } else {
        player1name.innerHTML = 'player1';
    }
    if(player_2_name && player_2_name.trim() != ''){
        player2Name.innerHTML = player_2_name;
    } else {
        player2Name.innerHTML = 'player2';
    }

}

// reload page with 'reset game' button
function reloadPage(){
    window.location.reload();
}