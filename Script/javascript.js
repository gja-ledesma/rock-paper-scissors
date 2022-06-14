function playRound(playerSelection, computerSelection) {  
    if (playerSelection == 'rock') {
      if (computerSelection == 'scissors') {
        return 'wins';
      } else if (computerSelection == 'paper') {
        return 'loses';
      } else {
        return 'ties';
      } 
    }
    if (playerSelection == 'paper') {
      if (computerSelection == 'rock') {
        return 'wins';
      } else if (computerSelection == 'scissors') {
        return 'loses';
      } else {
        return 'ties';
      } 
    }
    if (playerSelection == 'scissors') {
      if (computerSelection == 'rock') {
        return 'loses';
      } else if (computerSelection == 'paper') {
        return 'wins';
      } else {
        return 'ties';
      } 
    }
  }