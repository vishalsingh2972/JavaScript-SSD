//using .addEventListener() instead of onclick="..." attribute
let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

updateScoreElement();

let isAutoPlaying = false; 
let intervalId;

//const autoPlay = () => { //arrow function version of below function autoPlay() //this cannot enable hoisting

//}; 

function autoPlay(){ //in this case this regular function is more preferred than above arrow function because - easier to read and this regular function syntax can enable hoisting
  if(!isAutoPlaying){ //if(isAutoPlaying === false){ case
    intervalId = setInterval(() => { //arrow function
    const playerMove = pickComputerMove(); 
    playGame(playerMove);
    //playGame(pickComputerMove());
    }, 1000);
    console.log('Hogaya Khel Shuru');
    isAutoPlaying = true;
  }
  else{ //if(isAutoPlaying === true){ case
    clearInterval(intervalId); 
    console.log('Khel Khatam Dukaan Band');
    isAutoPlaying = false;
  }
}

// const rockButton = document.querySelector('.js-rock-button');
//   rockButton.addEventListener(..);
document.querySelector('.js-rock-button')
  .addEventListener('click', () => {
    playGame('rock');
  });

document.querySelector('.js-paper-button')
  .addEventListener('click', () => {
    playGame('paper');
  });

document.querySelector('.js-scissors-button')
  .addEventListener('click', () => {
    playGame('scissors');
  });

document.querySelector('.js-reset-score-button')
  .addEventListener('click', () => {
      score.wins = 0;
      score.losses = 0;
      score.ties = 0;
      console.log('Score was Reset');

      //remove the score from the localStorage also  
      localStorage.removeItem('score');
      updateScoreElement();
  });

document.querySelector('.js-autoplay-button')
  .addEventListener('click', () => {
    autoPlay();
  });

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