const display = document.querySelector("#result");
const calcBtns = document.querySelector(".keys");
const res = document.querySelector(".equal");
const clearBtn = document.getElementById("clear");

calcBtns.addEventListener("click", (b) =>{
    const btns = b.target;
    const op = btns.getAttribute("data-operation");
   if(op === "add" ||
     op === "subtract" ||
     op === "divide" ||
     op === "multiply"
    ){
        console.log("operator");
    }
    else if (op === "calculate"){
        console.log("equal");
    }
    else if (op === "decimal"){
        console.log("decimal");
    }
    else{
        console.log("number");
    }

})