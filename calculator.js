const display = document.querySelector("#result");
const calcBtns = document.querySelector(".keys");
const res = document.querySelector(".equal");
const clearBtn = document.getElementById("clear");

let num1 = "";
let num2 = "";
let currentOp = "";
let isNum2 = false;

const opSymbols = {
    add: "+",
    subtract: "-",
    multiply: "×",
    divide: "÷"
}

calcBtns.addEventListener("click", (b) =>{
    const btns = b.target;
    if (btns.tagName !== "BUTTON") return; 

    const op = btns.getAttribute("data-operation");
    const val = btns.textContent;

    if (btns.id === "clear"){
        num1 = "";
        num2 = "";
        currentOp = "";
        isNum2 = false;
        display.textContent = "0";
        return;
    }
    
    if (!op){
        if(!isNum2){
            num1 += val;
            display.textContent = num1;
        }else{
            num2 += val;
            display.textContent = num2;
        }
        return;
    }
    if (op === "decimal"){
        if (!isNum2 && !num1.includes(".")){
            num1 += ".";
            display.textContent = num1;
        }else if (isNum2 && !num2.includes(".")){
            num2 += ".";
            display.textContent = num2;
        }
        return;
    }
   if(op === "add" ||
     op === "subtract" ||
     op === "multiply" ||
     op === "divide"
    ){
       if (num1 === "") return;
       currentOp = op;
       isNum2 = true;
       display.textContent = `${num1} ${opSymbols[op]}`;
       return;
    }

    if (op === "calculate"){
        if (num1 === "" || currentOp === "") return;
        if (num2 === "") num2 = "0";

        const n1 = parseFloat(num1);
        const n2 = parseFloat(num2);
        let result;

        switch (currentOp) {
            case "add" :
                result = n1 + n2;
                break;
            case "subtract" :
                result = n1 - n2;
                break;
            case "multiply" : 
                result = n1 * n2;
                break;
            case "divide" :
                result = n2 ===0 ? "Error": n1 / n2;
                break;
              default:
                result = "Invalid operation";  
        }
        display.textContent = result;
        num1 = result.toString();
        num2 = "";
        isNum2 = false;
        currentOp = "";
    }

});