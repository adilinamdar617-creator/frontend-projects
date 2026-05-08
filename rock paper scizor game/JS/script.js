let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");

const gencompchoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * options.length);
  return options[randIdx];
};

const drawgame = () => {
  msg.innerText = "Game was Draw. Play again";
  msg.style.background = "linear-gradient(90deg, #334155, #0f172a)";
};

const showwinner = (userwin, userchoice, compchoice) => {
  if (userwin) {
    userScore++;
    userScorepara.innerText = userScore;
    msg.innerText = `You win! Your ${userchoice} beats ${compchoice}`;
    msg.style.background = "linear-gradient(90deg, #16a34a, #22c55e)";
  } else {
    compScore++;
    compScorepara.innerText = compScore;
    msg.innerText = `You lose! ${compchoice} beats your ${userchoice}`;
    msg.style.background = "linear-gradient(90deg, #dc2626, #ef4444)";
  }
};

const playgame = (userchoice) => {
  const compchoice = gencompchoice();

  if (userchoice === compchoice) {
    drawgame();
  } else {
    let userwin = true;

    if (userchoice === "rock") {
      userwin = compchoice === "paper" ? false : true;
    } else if (userchoice === "paper") {
      userwin = compchoice === "scissors" ? false : true;
    } else {
      userwin = compchoice === "rock" ? false : true;
    }

    showwinner(userwin, userchoice, compchoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");
    playgame(userchoice);
  });
});