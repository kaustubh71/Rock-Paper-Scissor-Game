const gameElement = ["rock", "paper", "scissor"]

const computerPlay = () => {return gameElement[Math.floor(Math.random()*gameElement.length)]}

let output = ""
let result = document.getElementById('result')
let winCount = document.getElementById('winCount')
let finalWinner = document.getElementById('finalWinner')

let playerWinCount = 0
let computerWinCount = 0
let tie = 0

const singleRound = () => {
    
    let playerSelection = []
    const getBtn = document.querySelectorAll('button')
        getBtn.forEach((item) => {item.addEventListener('click', function(e) {
                                    playerSelection.push(e.target.textContent)})
                                })
    
    const computerSelection = computerPlay()

    if (document.getElementsByTagName("button")[0].id === "rock") {
        
        output = computerSelection === "rock" ? output = "It's a tie" : 
        computerSelection === "paper" ? output = "You lose, Computer won!" :
        output = "You win!, Computer lose"

    } else if (document.getElementsByTagName("button")[0].id === "paper") {
        
        output = computerSelection === "paper" ? output = "It's a tie" : 
        computerSelection === "scissor" ? output = "You lose, Computer won!" :
        output = "You win!, Computer lose"

    } else if(document.getElementsByTagName("button")[0].id === "scissor") {
        
        output = computerSelection === "scissor" ? output = "It's a tie" : 
        computerSelection === "rock" ? output = "You lose, Computer won!" :
        output = "You win!, Computer lose"
    
    }

    if (output === "You win!, Computer lose") {playerWinCount += 1} 
    else if (output === "It's a tie") {tie += 1}
    else {computerWinCount += 1}
    
    if (playerWinCount < 5 && computerWinCount < 5) {
        result.textContent = output
        winCount.textContent = `Win: ${playerWinCount} Lose: ${computerWinCount} Tie: ${tie}`
    
    } else if (playerWinCount === 5) {
        winCount.textContent = "You Win!!"
    
    } else if (computerWinCount === 5) {
        winCount.textContent = "Computer Win!!"
        
    }
}

window.addEventListener('click', singleRound)
