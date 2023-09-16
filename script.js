let btn = document.querySelectorAll('.btn');
let disp = document.querySelector('.final-calculation');


function calculate(numberOne, numberTwo, operand) {

}

function add(numOne, numTwo) { return numOne + numTwo; }
function sub(numOne, numTwo) { return numOne - numTwo; }
function mul(numOne, numTwo) { return numOne * numTwo; }
function div(numOne, numTwo) { return numOne / numTwo; }

let operations = {
    '+': add,
    '-': sub,
    'X': mul,
    '/': div
};

let first = "";
let second = "";
let operand = "";

for (let button of btn) {
    button.addEventListener("click", (event) => {
        console.log(event.target);
        if (typeof event.target.textContent === "string" && button.classList.contains("num")) {
            // console.log(typeof button.textContent);
            first += event.target.textContent;
            // console.log(first);
            disp.textContent += event.target.textContent;
            // console.log(first);
            // console.log(second);
        }

        else if (button.classList.contains("operation")) {
            operand = button.textContent;
            disp.textContent = "";
            second = first;
            first = "";

            // console.log(button.textContent);

        }

        else if (button.classList.contains("equals-button")) {
            let temp = "";
            temp = first;
            first = second;
            second = temp;

            // disp.textContent = "";
            // console.log(button.textContent);
            result = operations[operand](Number(first), Number(second));
            console.log(result);
            first = String(result);
            disp.textContent = String(result);
            console.log(first);
            console.log(second);
            console.log(operand);

        }

        else if (button.classList.contains("clear-button")) {
            let first = "";
            let second = "";
            let operand = "";
            disp.textContent = "0";
        }

        else if (button.classList.contains("back-button")) {

        }



    });
}
