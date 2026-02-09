let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");

let turnO = true; //playerX, playerY

let newgame = document.querySelector("#new");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let arr = ["apple", "banana", "litchi"];

//2d array
// let arr2 = [ ["apple","litchi"],["potato","mushroom"],["pants","shirts"] ];

const winpatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetgame = () => {
    turnO = true;
    enableboxes();
    msgcontainer.classList.add("hide");

}

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;

    checkwinner();
  });
});

const disableboxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
}
const enableboxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}
const showwinner = () => {
    msg.innerText = `congratulations, Winner is $(Winner)`;
    msgcontainer.classList.remove("hide");
    disableboxes();
}


const checkwinner = () => {
  for (let patterns of winpatterns) {
    let pos1Val = boxes[patterns[0]].innerText;
    let pos2Val = boxes[patterns[1]].innerText;
    let pos3Val = boxes[patterns[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
        if (pos1Val === pos2Val && pos2Val === pos3Val) {
            showwinner (pos1Val);
        }
    }
  }
};

newgame.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);