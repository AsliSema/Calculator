let buttons = document.querySelectorAll(".calc-button");
let deleteBtn = document.querySelector(".delete");
let clearAll = document.querySelector(".delete-all");
let operators = document.querySelectorAll(".calc-operators");
let equal = document.querySelector(".calc-equal");
let screen = document.querySelector(".screen");



for (let i = 0; i < buttons.length; i++) {
    let nums = buttons[i].innerText;
    buttons[i].addEventListener("click", function () {
        //const number = screen.innerHTML + nums;
        //screen.innerHTML = parseInt(number);
        if(screen.innerText == "0"){
            screen.innerText = " "
        }
        screen.textContent = screen.innerText + parseInt(nums);
    });
}

clearAll.addEventListener("click", function () {
    screen.innerText = 0;
})

deleteBtn.addEventListener("click", function () {
    if (screen.innerText.length === 1) {
        screen.innerText = 0;
    } else {
        screen.innerText = screen.innerText.substring(screen.innerText.length - 1, 0);
    }
})

for (let i = 0; i < operators.length; i++) {
    let operator = operators[i].innerText;
    operators[i].addEventListener("click", function () {
        screen.innerText = screen.innerText + operator
    });
}


equal.addEventListener("click", function () {
    let calculation = screen.innerText;
    //let numRegex = /(?<number1>\d+)(?<operator>[\÷|\-|\×|\+])(?<number2>\d+)/g
    let numRegex = /\÷|\-|\×|\+/g
    let newNumber = calculation.split(numRegex)
    //console.log(newNumber)
    if(screen.innerText.includes("+")){
        screen.innerText = parseInt(newNumber[0]) + parseInt(newNumber[1])
    }else if(screen.innerText.includes("-")){
        screen.innerText = parseInt(newNumber[0]) - parseInt(newNumber[1])
    }else if(screen.innerText.includes("×")){
        screen.innerText = parseInt(newNumber[0]) * parseInt(newNumber[1])
    }else if(screen.innerText.includes("÷")){
        screen.innerText = parseInt(newNumber[0]) / parseInt(newNumber[1])
    }
});
