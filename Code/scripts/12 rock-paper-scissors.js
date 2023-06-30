let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

updateScoreElement() ;

let isAutoPlaying = false; //initially when js is loaded isAutoPlaying is false
let intervalId; //everytime we run the autoPlay() function we are gonna get a different intervalId value and we don't want that so in order to save the intervalId value from last time we have put this variable intervalId outside of the function autoPlay()

function autoPlay(){
  if(!isAutoPlaying){ //if we are not playing i.e isAutoPlaying = false so !isAutoPlaying = true, so if we are not playing it will enter this loop //if(isAutoPlaying === false){ case
    intervalId = setInterval(function(){ //setInterval() returns a number and this number is like an Id and we can use this Id to stop the interval, so here we created a variable intervalId to save this Id
    const playerMove = pickComputerMove(); //select random move by using pickComputerMove() function and set that value as playerMove
    playGame(playerMove);
    //playGame(pickComputerMove()); //or can directly put like this also
    }, 1000);
    console.log('Hogaya Khel Shuru');
    isAutoPlaying = true;
  }
  else{ //if(isAutoPlaying === true){ case
    //to stop an interval by using intervalId we use a function known as clearInterval()
    clearInterval(intervalId); //between brackets we give the id that you want to stop
    console.log('Khel Khatam Dukaan Band');
    isAutoPlaying = false;
  }
}

function playGame(playerMove){ 

  //pickComputerMove();
  const computerMove = pickComputerMove();

  console.log(computerMove);
  console.log(`computer's move is ${computerMove}`);

  let result = '';

  if(playerMove === 'scissors'){
    if (computerMove === 'rock'){
      result = 'You Lose.';
    }
    else if(computerMove === 'paper'){
      result = 'You Win.';
    }
    else if(computerMove === 'scissors'){
      result = 'Tie.';
    }
  }

  else if(playerMove === 'paper'){
    if (computerMove === 'rock'){
      result = 'You Win.';
    }
    else if(computerMove === 'paper'){
      result = 'Tie.';
    }
    else if(computerMove === 'scissors'){
      result = 'You Lose.';
    }
  }  

  else if(playerMove === 'rock'){
    if (computerMove === 'rock'){
    result = 'Tie.';
    }
    else if(computerMove === 'paper'){
      result = 'You Lose.';
    }
    else if(computerMove === 'scissors'){ 
      result = 'You Win.';
    }
  }

  if(result === 'You Win.'){
    //score.wins = score.wins + 1;
    score.wins += 1;
    //score.wins++;
  }
  else if(result === 'You Lose.'){
    score.losses += 1;
  }
  else if(result === 'Tie.'){
    score.ties += 1;
  }

localStorage.setItem('score', JSON.stringify(score));
//console.log(typeof score);
//console.log(typeof JSON.stringify(score));

updateScoreElement();   

document.querySelector('.js-result')
  .innerHTML = result;

document.querySelector('.js-moves')
  .innerHTML = `You
<img src="images/${playerMove}-emoji.png" class="move-icon">
<img src="images/${computerMove}-emoji.png" class="move-icon">
Computer`;
}

function updateScoreElement(){
  document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickComputerMove(){ 

//var variable123;
const randomNumber = Math.random();

let computerMove = ''; 

if(randomNumber >= 0 && randomNumber < 1/3){
  computerMove = 'rock';
}
else if(randomNumber >= 1/3 && randomNumber < 2/3){
  computerMove = 'paper';
}
else if(randomNumber >= 2/3 && randomNumber < 1){ 
  computerMove = 'scissors';
}

return computerMove;

}