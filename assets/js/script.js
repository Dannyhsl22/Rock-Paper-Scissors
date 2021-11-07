let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");
const lizard_div = document.getElementById("lizard");
const spock_div = document.getElementById("spock");

var modal = document.getElementById("myModal");
var btn = document.getElementById("open");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
};

span.onclick = function() {
  modal.style.display = "none";
};

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

const timer = document.getElementById('timer');
let timerInterval;

function startTimer() {
   resetScores();
   clearInterval(timerInterval);
   let second = 0;
   let minute = 0;
   let hour = 0;

   timerInterval = setInterval(function() {
      timer.innerHTML = 
        (hour ? hour + ':' : '') +
        (minute < 10 ? '0' + minute : minute) +
        ':' +
        (second < 10 ? '0' + second : second);
        second++;
        if (second == 60) {
           minute++;
           second = 0;
        }
        if (minute == 60) {
           hour++;
           minute = 0;
        }
   }, 1000);
}

function stopTimer() {
   clearInterval(timerInterval);
}

function resetScores() {
   document.getElementById('user-score').innerText = 0;  
   document.getElementById('computer-score').innerText = 0;
}

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    const randomNumber = (Math.floor(Math.random() * 5));
    return choices[randomNumber];
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = userChoice + " beats " + computerChoice + '<br/>' + "You Win !🔥"
    document.getElementById(userChoice).classList.add('blue-glow');
    setTimeout(function() { document.getElementById(userChoice).classList.remove('blue-glow') }, 500);
}
function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = userChoice + " loses " + computerChoice + '<br/>'+ "You Lost !😒"
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(function() { document.getElementById(userChoice).classList.remove('red-glow') }, 500);
}
function tie(userChoice, computerChoice) {  
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = userChoice + " equals " + computerChoice + '<br/>'+ "It's a Tie !😐"
    document.getElementById(userChoice).classList.add('grey-glow');
    setTimeout(function() { document.getElementById(userChoice).classList.remove('grey-glow') }, 500);
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
    win(userChoice, computerChoice);
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
    lose(userChoice, computerChoice);
    break;

    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
    case "lizardlizard":
    case "spockspock":
    tie(userChoice, computerChoice);
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