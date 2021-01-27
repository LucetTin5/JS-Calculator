const calData = document.querySelector(".calData");
const form = document.querySelector("form");
const btns = document.querySelectorAll(".calBtn-btn");
const display = document.querySelector(".calData");

let a = "";
let b = "";
let ops = "";
const doMath = {
    plus: function(x, y) {return parseInt(x, 10) + parseInt(y, 10)},
    subs: function(x, y) {return parseInt(x, 10) - parseInt(y, 10)},
    multi: function(x, y) {return parseInt(x, 10) * parseInt(y, 10)},
    div: function(x, y) {return parseInt(x, 10) / parseInt(y, 10)}
}
function updateDisplay() {
    calData.innerText = a;
    if (a === "") {
        calData.innerText = 0;
    }
}
function sameOps() {
    calData.innerText = b;
}
function doClear() {
    a = "";
    b = "";
    ops = "";
    updateDisplay();
}
function handleClick(event) {
    event.preventDefault();
    const input = event.target.value;
    if (ops === "" && input.length === 1) {
        // 계산의 시작, 연산자 설정되어 있지 않고, 수가 입력될 때
        a += input;
        updateDisplay();
    }else if (ops !== "" && input.length === 1){
        a += input;
        // ops가 이미 정해져 있고, input된 것이 숫자일 때
        updateDisplay();
    }else if (ops !== "" && input === "equal"){
        console.log("a", a, "b", b, "ops", ops);
        // ops가 정해져 있고, equal이 선택될 때
        // 이 때는 a, b, ops가 모두 정해져 있다.
        switch(ops) {
            case "plus":
                a = doMath.plus(b, a);
                updateDisplay();
                break;
            case "subs":
                a = doMath.subs(b, a);
                updateDisplay();
                break;
            case "multi":
                a = doMath.multi(b, a);
                updateDisplay();
                break;
            case "div":
                a = doMath.div(b, a);
                updateDisplay();
                break;
        }
        ops = "";
        updateDisplay();
    }else if (input === "clear"){
        // clear
        doClear();
    }else if (input === ops){
        // 기존의 ops와 동일한 ops가 다시 입력될 때
        switch(ops) {
            case "plus":
                b = doMath.plus(b, a);
                sameOps();
                a = "";
                break;
            case "subs":
                b = doMath.subs(b, a);
                sameOps();
                a = "";
                break;
            case "multi":
                b = doMath.multi(b, a);
                sameOps();
                a = "";
                break;
            case "div":
                b = doMath.div(b, a);
                sameOps();
                a = "";
                break;
        }
    }else{
        // 처음 ops가 입력될 때, b로 a를 넘기고, a를 비우고 ops를 설정
        b = a;
        ops = input;
        a = "";
    }
    // console.log("line76", "a:", a, "b:", b, "ops", ops);
}
function btnActive() {
    let i;
    for (i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", handleClick);
    }
}
function init() {
    btnActive();
    calData.innerText = "0";
}

init();