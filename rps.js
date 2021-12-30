let playerScore = document.getElementById("playerScore");
let computerScore = document.getElementById("computerScore");
let playerChoice = document.getElementById("playerChoice");
let computerChoice = document.getElementById("computerChoice");
let turn = document.getElementsByClassName("turn");
let wonInfo = document.getElementById("wonInfo");

var x = document.createElement("IMG");
x.setAttribute("src", "rock_left_hand.jpg");
x.setAttribute("width", "184");
x.setAttribute("height", "123");
x.setAttribute("alt", "The Pulpit Rock");
playerChoice.appendChild(x);

var y = document.createElement("IMG");
y.setAttribute("src", "rock_right_hand.jpg");
y.setAttribute("width", "184");
y.setAttribute("height", "123");
y.setAttribute("alt", "The Pulpit Rock");
computerChoice.appendChild(y);

//* game logic 
let plScore = 0;
let coScore = 0;

let plChoose;
let coChoose;

playerScore.textContent = 0;
computerScore.textContent = 0;


Array.from(turn).forEach((element) => {
    element.addEventListener("click", () => {
        playerChoice.firstElementChild.setAttribute("src", element.firstElementChild.getAttribute("src"));
        plChoose = element.id;
        let randomNumber = Math.random() * 10;
        console.log(randomNumber);
        if (randomNumber >= 0 && randomNumber < 3.3) {
            coChoose = "rock";
            computerChoice.firstElementChild.setAttribute("src", "rock_right_hand.jpg");
        }
        else if (randomNumber >= 3 && randomNumber < 6.6) {
            coChoose = "paper";
            computerChoice.firstElementChild.setAttribute("src", "paper_right_hand.jpg");
        }
        else {
            coChoose = "scissor";
            computerChoice.firstElementChild.setAttribute("src", "scissor_right_hand.jpg");
        }
        if (plChoose == "rock" && coChoose == "rock") {
            wonInfo.textContent = "Draw";
        }
        else if (plChoose == "rock" && coChoose == "paper") {
            wonInfo.textContent = "Computer Won";
            coScore++;
            computerScore.textContent = coScore;
        }
        else if (plChoose == "rock" && coChoose == "scissor") {
            wonInfo.textContent = "Player Won";
            plScore++;
            playerScore.textContent = plScore;
        }
        else if (plChoose == "paper" && coChoose == "paper") {
            wonInfo.textContent = "Draw";
        }
        else if (plChoose == "paper" && coChoose == "rock") {
            wonInfo.textContent = "Player Won";
            plScore++;
            playerScore.textContent = plScore;
        }
        else if (plChoose == "paper" && coChoose == "scissor") {
            wonInfo.textContent = "Computer Won";
            coScore++;
            computerScore.textContent = coScore;
        }
        else if (plChoose == "scissor" && coChoose == "scissor") {
            wonInfo.textContent = "Draw";
        }
        else if (plChoose == "scissor" && coChoose == "rock") {
            wonInfo.textContent = "Computer Won";
            coScore++;
            computerScore.textContent = coScore;
        }
        else if (plChoose == "scissor" && coChoose == "paper") {
            wonInfo.textContent = "Player Won";
            plScore++;
            playerScore.textContent = plScore;
        }
        if (plScore > 5) {
            wonInfo.textContent = "Player Won the Game";
            plScore = 0;
            coScore = 0;
            playerScore.textContent = 0;
            computerScore.textContent = 0;
        }
        if (coScore > 5) {
            wonInfo.textContent = "Computer Won the Game";
            plScore = 0;
            coScore = 0;
            playerScore.textContent = 0;
            computerScore.textContent = 0;
        }
    })
}); 
