let userScore=0; 
let compScore=0;

const choices= document.querySelectorAll(".choice");
const msg = document.querySelector("#msg"); 

const userScoreCount = document.querySelector("#userScore"); 
const compScoreCount = document.querySelector("#compScore"); 

const genCompChoice = () => {
    const options= ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx]; 
}

const drawGame = () => {
    console.log("Game was Draw"); 
    msg.innerText = " Game was draw. Play again.";
    msg.style.backgroundColor = "grey"; 

}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++; 
        userScoreCount.innerText = userScore; 
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}.`;
        msg.style.backgroundColor = "green"; 

    } else {
        compScore++; 
        compScoreCount.innerText = compScore; 
        console.log("You Lose"); 
        msg.innerText = `You Lose!" ${compChoice} beats your ${userChoice}.`; 
        msg.style.backgroundColor = "red"; 

    }
}; 

const playGame = (userChoice) => {
    console.log("User Choice =",userChoice);
    // generate computer choice
    const compChoice = genCompChoice(); 
    console.log("Comp Choice =",compChoice);

    if(userChoice === compChoice) {
        // Draw Game
        drawGame(); 
    } else {
        let userWin = true; 
        if(userChoice === "rock") {
                // paper, scissors
            userWin = compChoice === "paper" ? false: true; 
        } else if (userChoice === "paper") {
            //scissors, rock
            userWin = compChoice === "scissors" ? false: true; 
        } else {
            // rock, paper
            userWin = compChoice === "rock" ? false: true; 
        }
        showWinner(userWin, userChoice, compChoice); 
    
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        
        const userChoice= choice.getAttribute("id");
        playGame(userChoice);
        
    });
});