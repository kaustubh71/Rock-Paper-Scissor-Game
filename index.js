const gameElement = 
["rock", "paper", "scissor"]

const computerPlay = () => {
    return gameElement
    [Math.floor(
        Math.random()*
        gameElement.length)]
}

let output = ""

const singleRound = () => {
    const playerSelection = 
    prompt("What's your input?")
    const computerSelection = computerPlay()

if (playerSelection.toLowerCase() === "rock") 
    {
    output = computerSelection === "rock" ? 
    output = "It's a tie" : 
    computerSelection === "paper" ? 
    output = "You lose, Computer won!" :
    output = "You win!, Computer lose"
    } else if 
    (playerSelection.toLowerCase() === "paper") 
    {
    output = computerSelection === "paper" ? 
    output = "It's a tie" : 
    computerSelection === "scissor" ? 
    output = "You lose, Computer won!" :
    output = "You win!, Computer lose"
    } else if
    (playerSelection.toLowerCase() === "scissor") 
    {
    output = computerSelection === "scissor" ? 
    output = "It's a tie" : 
    computerSelection === "rock" ? 
    output = "You lose, Computer won!" :
    output = "You win!, Computer lose"
    }
    alert (output)
}

const game = () => {
    let playerWinCount = 0
    let computerWinCount = 0
    let tie = 0

    for (let i=0; i<5; i++) {
        singleRound ()
        
        if (output === "You win!, Computer lose") {
            playerWinCount += 1
        } else if (output === "It's a tie") {
            tie += 1
        }
        else (computerWinCount += 1)
        
        alert (`Win: ${playerWinCount} Lose: ${computerWinCount} Tie: ${tie}`)
    }  
}

game ()


