var gameOver = false;
var totalMove = 0;
var currentPlayer = "X";
var isPlaying = false;

//start of the game funciton
function startGame(){

    //checks to see if startBtn has Replay
    if(document.getElementById('startBtn').innerText === "Replay"){
        location.reload();
    }
    
    isPlaying = true;
    var gameDisplay = document.getElementById("display");
    gameDisplay.innerHTML = "X turn to move.";
    document.getElementById('startBtn').style.visibility = 'hidden';
}

function placeMarker(spotClass){
    
    var spot = document.getElementsByClassName(spotClass); 
    var gameDisplay = document.getElementById("display");

    //start button is pused
    if(isPlaying === true){

        //checks to see if spot is open
        if(spot[0].innerHTML === ""){

            if(!gameOver){
    
                //update inside of cells
                if(spot[0].innerHTML == ""){
                    spot[0].innerHTML = currentPlayer;
                }
                
                //case winner of the game
                if(currentPlayerWon() === true){
                    gameDisplay.innerHTML = currentPlayer + " won, game ended." ;
                    document.getElementById('startBtn').style.visibility = 'visible';
                    document.querySelector('#startBtn').innerText = 'Replay';
                    firstbtn.parentNode.replaceChild(document.getElementById("replayBtn"), document.getElementById("startBtn"));
                }
    
                else{
                    //tie condition
                    if(totalMove === 8){
                        gameOver = true;
                        gameDisplay.innerHTML = "Game ends in a tie.";
                        document.getElementById("startBtn").style.visibility = 'visible';
                        document.querySelector('#startBtn').innerText = 'Replay';
                    }
                    //switch players
                    else if( currentPlayer === "O"){
                        totalMove++;
                        currentPlayer = "X";
                        gameDisplay.innerHTML = currentPlayer + " turn to move.";
                    }
                    else{
                        totalMove++;
                        currentPlayer = "O";
                        gameDisplay.innerHTML = currentPlayer + " turn to move.";
                    }
                }
            }
        }
    }
    else{
        //disables click to cells if start button not pressed
        document.getElementsByClassName('spot-1').style.pointerEvents = 'none';
        document.getElementsByClassName('spot-2').style.pointerEvents = 'none';
        document.getElementsByClassName('spot-3').style.pointerEvents = 'none';
        document.getElementsByClassName('spot-4').style.pointerEvents = 'none';
        document.getElementsByClassName('spot-5').style.pointerEvents = 'none';
        document.getElementsByClassName('spot-6').style.pointerEvents = 'none';
        document.getElementsByClassName('spot-7').style.pointerEvents = 'none';
        document.getElementsByClassName('spot-8').style.pointerEvents = 'none';
        document.getElementsByClassName('spot-9').style.pointerEvents = 'none';
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