const btns = document.querySelectorAll("button");
const display = document.querySelector(".display__display");
let calValue = "";

function backspace() {
    calValue = calValue.slice(0, -1);
    updateDisplay(calValue);
}
function cleanDisplay() {
    calValue = "";
    updateDisplay(calValue);
}
function updateDisplay(value) {
    display.innerText = value;
}
function getValue(target){
    if (target.value === "clear"){
        cleanDisplay();
    } else if (target.value === "negative") {
        if (calValue.slice(0, 1) === "-") {
            calValue = calValue.slice(1);
            updateDisplay(calValue);
        } else {
            calValue = "-" + calValue;
            updateDisplay(calValue);
        }       
    } else if (target.value === "backspace") {
        backspace();
    } else if (target.value !== "" && target.value !=="="){
        if (isNaN(parseInt(calValue.slice(-1)))){
            calValue = calValue.slice(0, -1) + target.value;
            updateDisplay(calValue);
        } else {
            calValue += target.value;
            updateDisplay(calValue);
        }
    } else if (target.value === "=") {
        if (isNaN(parseInt(calValue.slice(-1)))){
        } else {
            calValue = String(eval(calValue));
            updateDisplay(calValue);
        }
    } else {
        calValue += target.innerText;
        updateDisplay(calValue);
    }
}
function handleClick(event) {
    let target = event.target;
    if (target.tagName === "I") {
        target = target.parentNode;
        getValue(target);
    } else {
        getValue(target);
    }
}

function btnActive() {
    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", handleClick);
    }
}
function init() {
    btnActive();
}

init();