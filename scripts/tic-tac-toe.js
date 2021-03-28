var gameOver = false;
var totalMove = 0;
var currentPlayer = "X";

function placeMarker(spotClass){
    
    var spot = document.getElementsByClassName(spotClass); //"key" + " " + 
    var gameDisplay = document.getElementById("display");

    if(spot[0].innerHTML === ""){

        if(!gameOver){

            //update inside of cells
            if(spot[0].innerHTML == ""){
                spot[0].innerHTML = currentPlayer;
            }
            
            //case winner of the game
            if(currentPlayerWon() === true){
                gameDisplay.innerHTML = currentPlayer + " won, game ended." 
            }

            else{
                //tie condition
                if(totalMove === 8){
                    gameOver = true;
                    gameDisplay.innerHTML = "Game ends in a tie."
                }
                //switch players
                else if( currentPlayer === "O"){
                    totalMove++;
                    currentPlayer = "X";
                    gameDisplay.innerHTML = currentPlayer + " turn to move."
                }
                else{
                    totalMove++;
                    currentPlayer = "O";
                    gameDisplay.innerHTML = currentPlayer + " turn to move."
                }
            }
        }
    }
}

function currentPlayerWon(){

    var s1 = document.getElementsByClassName("spot-1");
    var s2 = document.getElementsByClassName("spot-2");
    var s3 = document.getElementsByClassName("spot-3");
    var s4 = document.getElementsByClassName("spot-4");
    var s5 = document.getElementsByClassName("spot-5");
    var s6 = document.getElementsByClassName("spot-6");
    var s7 = document.getElementsByClassName("spot-7");
    var s8 = document.getElementsByClassName("spot-8");
    var s9 = document.getElementsByClassName("spot-9");

    //check first row
    if(s1[0].innerHTML !== ""){
        if(s1[0].innerHTML === s2[0].innerHTML && s2[0].innerHTML === s3[0].innerHTML){
            gameOver = true;
        }
    }

    //check second row
    if(s4[0].innerHTML !== ""){
        if(s4[0].innerHTML === s5[0].innerHTML && s5[0].innerHTML === s6[0].innerHTML){
            gameOver = true;
        }
    }

    //check third row
    if(s7[0].innerHTML !== ""){
        if(s7[0].innerHTML === s8[0].innerHTML && s8[0].innerHTML === s9[0].innerHTML){
            gameOver = true;
        }
    }

    //check first column
    if(s1[0].innerHTML !== ""){
        if(s1[0].innerHTML === s4[0].innerHTML && s4[0].innerHTML === s7[0].innerHTML){
            gameOver = true;
        }
    }

    //check second column
    if(s2[0].innerHTML !== ""){
        if(s2[0].innerHTML === s5[0].innerHTML && s5[0].innerHTML === s8[0].innerHTML){
            gameOver = true;
        }
    }

    //check third column
    if(s3[0].innerHTML !== ""){
        if(s3[0].innerHTML === s6[0].innerHTML && s6[0].innerHTML === s9[0].innerHTML){
            gameOver = true;
        }
    }

    //check diagonal L-R
    if(s1[0].innerHTML !== ""){
        if(s1[0].innerHTML === s5[0].innerHTML && s5[0].innerHTML === s9[0].innerHTML){
            gameOver = true;
        }
    }

    //check diagonal R-L
    if(s3[0].innerHTML !== ""){
        if(s3[0].innerHTML === s5[0].innerHTML && s5[0].innerHTML === s7[0].innerHTML){
            gameOver = true;
        }
    }
    return gameOver;
}