/*eslint-env browser*/

//GLOBAL VARIABLES
var userChoice = window.prompt('Rock, Paper, Scissors').toLowerCase();
var getGameChoice = Math.floor(Math.random() * 3);
var gameChoice;

//window.console.log(userChoice);
//window.console.log(getGameChoice);

//Determines AI's choice
if (getGameChoice === 0) {
    gameChoice = 'rock';
} else if (getGameChoice === 1) {
    gameChoice = 'paper';
} else {
    gameChoice = 'scissors';
}
//window.console.log(gameChoice);

//Determine game winner
if(userChoice == 'rock' && gameChoice == 'scissors'){
    window.alert('Player Wins');
}else if(userChoice == 'rock' && gameChoice == 'paper'){
    window.alert('Game Wins');
}else if(userChoice == 'paper' && gameChoice == 'rock'){
    window.alert('Player Wins');
}else if(userChoice == 'paper' && gameChoice == 'scissors'){
    window.alert('Game Win');
}else if(userChoice == 'scissors' && gameChoice == 'paper'){
    window.alert('Player Win');
}else if(userChoice == 'scissors' && gameChoice == 'rock'){
    window.alert('Game Win');
}else {
    window.alert('The game is a tie');
}






