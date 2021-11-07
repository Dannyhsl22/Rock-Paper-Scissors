const userScore = 0;
const computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");
const lizard_div = document.getElementById("lizard");
const spock_div = document.getElementById("spock");

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    const randomNumber = (Math.floor(Math.random() * 5));
    return choices[randomNumber];
}


function game(userChoice) {
    const computerChoice = getComputerChoice();
switch (userChoice + computerChoice) {
    case "rockscissors":
    case "rocklizard":
    case "scissorspaper":
    case "scissorslizard":
    case "paperrock":
    case "paperspock":
    case "lizardspock":
    case "lizardpaper":
    case "spockscissors":
    case "spockrock":
    console.log("USER WINS!.");
    break;
    case "scissorsrock":
    case "lizardrock":
    case "paperscissors":
    case "lizardscissors":
    case "rockpaper":
    case "spockpaper":
    case "spocklizard":
    case "paperlizard":
    case "scissorsspock":
    case "rockspock":
    console.log("USER LOSES!.")
    break;
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
    case "lizardlizard":
    case "spockspock":
    console.log("IT IS A TIE!.")
    break;
}
}


function main(){
    rock_div.addEventListener('click', function() {
        console.log("YOU CLIKCED ON ROCK");
        game("rock");
    })

    paper_div.addEventListener('click', function() {
        console.log("YOU CLIKCED ON PAPER");
        game("paper");
    })
    scissors_div.addEventListener('click', function() {
        console.log("YOU CLIKCED ON SCISSORS");
        game("scissors");
    })

    lizard_div.addEventListener('click', function() {
        console.log("YOU CLIKCED ON LIZARD");
        game("lizard");
    })

    spock_div.addEventListener('click', function() {
        console.log("YOU CLIKCED ON SPOCK");
        game("spock");
    })
}

main();