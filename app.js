const game = () => {
    let pScore = 0
    let cScore = 0

    // ======== Starting the game ======== //
    const startGame = () => {
        const startScreen = document.querySelector('.startScreen')
        const playBtn = document.querySelector('.startScreen button')
        const match = document.querySelector('.match')

        playBtn.addEventListener('click', () => {
            startScreen.classList.add('fadeOut')
            match.classList.remove('fadeOut')
            match.classList.remove('fadeIn')
        })
    }

    // ======== Playing the game ======== //
    const playMatch = () => {
        const options = document.querySelectorAll('.options button')
        const playerHand = document.querySelector('.player-hand')
        const computerHand = document.querySelector('.computer-hand')
        const computerOptions = ['rock','paper','scissors']

        options.forEach(option => {
            option.addEventListener("click",function(){
                const computerChoiceN = Math.floor (Math.random() * 3)
                const computerChoice = computerOptions[computerChoiceN]
                compareHands(this.textContent,computerChoice)
                playerHand.src = `./imgs/${this.textContent}.png`
                computerHand.src = `./imgs/${computerChoice}.png`

                
            })
        })
    }

    const compareHands = (playerChoice,computerChoice) => {
        const winner = document.querySelector('.winner')
        if(playerChoice === computerChoice){
            winner.textContent = "It's a tie"
            return
        }

        if(playerChoice === 'rock'){
            if (computerChoice === 'scissors'){
                winner.textContent = 'You Win!!'
                pScore++
                updateScore()
                return
            }
            else{
                winner.textContent = 'Computer Wins!!'
                cScore++
                updateScore()
                return
            }
        }

        if(playerChoice === 'scissors'){
            if (computerChoice === 'paper'){
                winner.textContent = 'You Win!!'
                pScore++
                updateScore()
                return
            }
            else{
                winner.textContent = 'Computer Wins!!'
                cScore++
                updateScore()
                return
            }
        }

        if(playerChoice === 'paper'){
            if (computerChoice === 'rock'){
                winner.textContent = 'You Win!!'
                pScore++
                updateScore()
                return
            }
            else{
                winner.textContent = 'Computer Wins!!'
                cScore++
                updateScore()
                return
            }
        }
    }

    const updateScore = () => {
        const playerScore = document.querySelector('.player p')
        const computerScore = document.querySelector('.computer p')
        playerScore.textContent = pScore
        computerScore.textContent = cScore
    }

    startGame()
    playMatch()
}

game()