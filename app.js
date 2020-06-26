let userScore = 0;
let computerScore = 0;
let numMatch = 0

const userScore_span = document.getElementById("user-score"); //get element by its id
const computerScore_span = document.getElementById("computer-score"); //get element by its id
//dom variable _span: style to write _div, etc
const scoreBoard_div = document.querySelector(".score-board"); //get element by its class or id
const result_p = document.querySelector(".result > p"); ////get element by its class or id
//getElementsByClassName get elements by class
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

//we have catched the DOM - store for future usage

function getComputerChoice(){
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}

function convertToWord(letter){
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}
function win(user, computer){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWorld = "user".fontsize(3).sub();
    const smallCompWorld = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(user)}${smallUserWorld} beats ${convertToWord(computer)}${smallCompWorld}. You win! 🔥🔥🔥🔥`;

}
function lose(user, computer){
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    const smallUserWorld = "user".fontsize(3).sub();
    const smallCompWorld = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(computer)}${smallUserWorld} beats ${convertToWord(user)}${smallCompWorld}. You lose! 🌧️🌧️🌧️🌧️`;
}
function draw(user, computer){
    result_p.innerHTML = "It is a draw 😀😀😀😀";
}

function game(userChoice){
    const computerChoice = getComputerChoice();

    switch(userChoice + computerChoice){
        case "pr":
        case "rs":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "sr":
        case "ps":
            lose(userChoice, computerChoice);
            break;
        case "pp":
        case "rr":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }

}
function main(){
    rock_div.addEventListener('click', function(){
        game("r");
    });
    paper_div.addEventListener('click', function(){
        game("p")
    })
    scissors_div.addEventListener('click', function(){
        game("s");
    })
}
main();   


//1:12





