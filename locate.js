const calculator = document.getElementById("calculator-page");
const step_1 = document.getElementById("step-1");

var step = 0;

function Bid() {
    calculator.style.display = 'none'
    step = 1;
}

function NextPage() {
    if (step == 1) {
        step_1.style.display = 'none'
    }
}