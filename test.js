const game = () => {
    let output = "You win!, Computer lose"
    
        let playerWinCount = 0
        let computerWinCount = 0
        let tie = 0
        for (let i=0; i<5; i++) { 
        if (output === "You win!, Computer lose") {
            playerWinCount += 1
        } else if (output === "It's a tie") {
            tie += 1
        }
        else (computerWinCount += 1)
    }
    alert (output)    
    alert (`Win: ${playerWinCount} Lose: ${computerWinCount} Tie: ${tie}`)
    }
    
game ()
