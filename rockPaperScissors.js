const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
      return userInput;
    }
    else {
      console.log('Error!');
    }
  };
  console.log(getUserChoice('bomb'));
  console.log(getUserChoice('hello'));
  function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() *3);
    if(randomNumber === 0) {
      return 'rock';
    }
    else if(randomNumber === 1) {
      return 'paper';
    }
    else {
      return 'scissors';
    }
  }
  console.log(getComputerChoice());
  
  function determineWinner (userChoice, computerChoice) {
    if(userChoice === computerChoice) {
      return 'game was a tie';
    }
    if(userChoice === 'rock') {
      if(computerChoice === 'paper') {
        return 'the computer won';
      }
        else if(userChoice === 'bomb') {
        return 'user wins';
      }
      else {
        return 'the user won';
      }
    }
    if(userChoice === 'paper') {
      if(computerChoice === 'scissors'||computerChoice === 'rock') {
        return 'a winner';
      }
    }
    if(userChoice === 'scissors') {
      if(computerChoice === 'rock' || computerChoice === 'paper') {
        return 'a winner';
      }
    }
  }
  console.log(determineWinner( 'scissors', 'paper'));
  
  const playGame = () => {
    const userChoice = getUserChoice('scissors');
    const computerChoice = getComputerChoice();
    console.log('Hello you threw ' + userChoice);
    console.log('computer threw '+ computerChoice);
    console.log(determineWinner(userChoice,computerChoice))
  }
  playGame();
  
  
  