var td = document.querySelectorAll('td');
var count = 0;
var body = document.getElementsByTagName('body');
var result = document.querySelector('.result');


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

for(var i=0; i<td.length; i++){
    td[i].addEventListener('click',function(){
        if(td[0].textContent === td[1].textContent && td[0].textContent === td[2].textContent){
            if(td[0].textContent === 'X'){
                result.classList.add('xwin')
                result.textContent = 'Player 1 Has Won The Game!';
            } else {
                result.classList.add('owin')
                result.textContent = 'Player 2 Has Won The Game!';
            }

            for(var j=0; j<3; j++){
                if(td[0].textContent == 'X'){
                    td[j].classList.add('xboxred');
                } else {
                    td[j].classList.add('oboxred');
                }
            }
        }

        if(td[6].textContent === td[7].textContent && td[6].textContent === td[8].textContent){
            if(td[6].textContent === 'X'){
                result.classList.add('xwin')
                result.textContent = 'Player 1 Has Won The Game!';
            } else {
                result.classList.add('owin')
                result.textContent = 'Player 2 Has Won The Game!';
            }

            for(var j=6; j<9; j++){
                if(td[6].textContent == 'X'){
                    td[j].classList.add('xboxred');
                } else {
                    td[j].classList.add('oboxred');
                }
            }
        }

        if(td[3].textContent === td[4].textContent && td[3].textContent === td[5].textContent){
            if(td[3].textContent === 'X'){
                result.classList.add('xwin')
                result.textContent = 'Player 1 Has Won The Game!';
            } else {
                result.classList.add('owin')
                result.textContent = 'Player 2 Has Won The Game!';
            }

            for(var j=3; j<6; j++){
                if(td[3].textContent == 'X'){
                    td[j].classList.add('xboxred');
                } else {
                    td[j].classList.add('oboxred');
                }
            }
        }

        if(td[0].textContent === td[4].textContent && td[0].textContent === td[8].textContent){
            if(td[4].textContent === 'X'){
                result.classList.add('xwin')
                result.textContent = 'Player 1 Has Won The Game!';
            } else {
                result.classList.add('owin')
                result.textContent = 'Player 2 Has Won The Game!';
            }
            if(td[0].textContent == 'X'){
                td[0].classList.add('xboxred');
                td[4].classList.add('xboxred');
                td[8].classList.add('xboxred');
            } else {
                td[0].classList.add('oboxred');
                td[4].classList.add('oboxred');
                td[8].classList.add('oboxred');
            }
            
        }

        if(td[2].textContent === td[4].textContent && td[2].textContent === td[6].textContent){
            if(td[2].textContent === 'X'){
                result.classList.add('xwin')
                result.textContent = 'Player 1 Has Won The Game!';
            } else {
                result.classList.add('owin')
                result.textContent = 'Player 2 Has Won The Game!';
            }
            if(td[2].textContent == 'X'){
                td[2].classList.add('xboxred');
                td[4].classList.add('xboxred');
                td[6].classList.add('xboxred');
            } else {
                td[2].classList.add('oboxred');
                td[4].classList.add('oboxred');
                td[6].classList.add('oboxred');
            }
            
        }

        if(td[0].textContent === td[3].textContent && td[0].textContent === td[6].textContent){
            if(td[0].textContent === 'X'){
                result.classList.add('xwin')
                result.textContent = 'Player 1 Has Won The Game!';
            } else {
                result.classList.add('owin')
                result.textContent = 'Player 2 Has Won The Game!';
            }
            if(td[0].textContent == 'X'){
                td[0].classList.add('xboxred');
                td[3].classList.add('xboxred');
                td[6].classList.add('xboxred');
            } else {
                td[0].classList.add('oboxred');
                td[3].classList.add('oboxred');
                td[6].classList.add('oboxred');
            }
            
        }

        if(td[1].textContent === td[4].textContent && td[1].textContent === td[7].textContent){
            if(td[1].textContent === 'X'){
                result.classList.add('xwin')
                result.textContent = 'Player 1 Has Won The Game!';
            } else {
                result.classList.add('owin')
                result.textContent = 'Player 2 Has Won The Game!';
            }
            if(td[1].textContent == 'X'){
                td[1].classList.add('xboxred');
                td[4].classList.add('xboxred');
                td[7].classList.add('xboxred');
            } else {
                td[1].classList.add('oboxred');
                td[4].classList.add('oboxred');
                td[7].classList.add('oboxred');
            }
            
        }

        if(td[2].textContent === td[5].textContent && td[2].textContent === td[8].textContent){
            if(td[2].textContent === 'X'){
                result.classList.add('xwin')
                result.textContent = 'Player 1 Has Won The Game!';
            } else {
                result.classList.add('owin')
                result.textContent = 'Player 2 Has Won The Game!';
            }
            if(td[2].textContent == 'X'){
                td[2].classList.add('xboxred');
                td[5].classList.add('xboxred');
                td[8].classList.add('xboxred');
            } else {
                td[2].classList.add('oboxred');
                td[5].classList.add('oboxred');
                td[8].classList.add('oboxred');
            }
            
        }
    });
}