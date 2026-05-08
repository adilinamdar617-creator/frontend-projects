let display = document.getElementById("display");
let buttons = document.querySelectorAll(".btn");

let input = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    let value = button.innerText;

    // CLEAR
    if (value === "C") {
      input = "";
      display.innerText = "0";
    }

    // DELETE
    else if (value === "Del") {
      input = input.slice(0, -1);
      display.innerText = input || "0";
    }

    // CALCULATE
    else if (value === "=") {

      let expression = input.replace(/x/g, "*");

      let result = calculateExpression(expression);

      if (result === null || isNaN(result)) {
        display.innerText = "Error";
        input = "";
      } else {
        input = result.toString();
        display.innerText = input;
      }
    }

    // NORMAL INPUT
    else {
      input += value;
      display.innerText = input;
    }
  });
});


// ---------- CALCULATION ENGINE (NO EVAL, NO TRY CATCH) ----------
function calculateExpression(exp) {

  // allow only valid characters
  if (!/^[0-9+\-*/%.]+$/.test(exp)) return null;

  let numbers = exp.split(/[\+\-\*\/%]/).map(Number);
  let operators = exp.match(/[\+\-\*\/%]/g);

  if (!operators) return numbers[0];

  // FIRST PASS (* / %)
  for (let i = 0; i < operators.length; i++) {
    if (operators[i] === "*" || operators[i] === "/" || operators[i] === "%") {

      let a = numbers[i];
      let b = numbers[i + 1];

      let res;

      if (operators[i] === "*") res = a * b;

      if (operators[i] === "/") {
        if (b === 0) return null;
        res = a / b;
      }

      if (operators[i] === "%") res = a % b;

      numbers.splice(i, 2, res);
      operators.splice(i, 1);
      i--;
    }
  }

  // SECOND PASS (+ -)
  let result = numbers[0];

  for (let i = 0; i < operators.length; i++) {
    if (operators[i] === "+") result += numbers[i + 1];
    if (operators[i] === "-") result -= numbers[i + 1];
  }

  return result;
}