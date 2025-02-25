let num1="", num2="", operator="", opArr = ["+", "-", "*", "/"];

document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", (event) => {
        let ev=event.target.textContent;
        if(opArr.includes(ev) && operator != "" && !isNaN(parseFloat(num1)) && !isNaN(parseFloat(num2))){
            num1 = compute(num1,operator,num2);
            operator=ev;
            num2="";
        }
        else if(ev=="=" && num1 != "" && operator != "" && num2 != ""){
            num1 = compute(num1,operator,num2);
            operator="";
            num2="";
        }
        else if((!isNaN(parseFloat(ev)) && (operator == "")) || (ev=="." && (operator == "" && !num1.includes(".")))){
            num1+=ev;
        }
        else if(opArr.includes(ev)){
            operator=ev;
        }
        else if((!isNaN(parseFloat(ev)) && !(operator == "")) || (ev=="." && !(operator == "" && !num2.includes(".")))){
            num2+=ev;
        }
        else if(ev.includes("Reset")){
            document.querySelector("#screen").textContent="";
            num1="";
            operator="";
            num2="";
        }
        else if(ev=="="){
            if(num1 != "" && operator != "" && num2 != ""){
                num1 = compute(num1,operator,ev);
                operator="";
                num2="";
            }
        }
        else if(opArr.includes(ev) && num1 != "" && operator != "" && num2 == ""){
            ev="";
        }
        document.querySelector("#screen").textContent=num1+operator+num2;
    });
});

function compute(a,op,b){
    a=parseFloat(a);
    b=parseFloat(b);
    switch (op) {
        case "+":
            return (a + b) % 1 == 0 ? (a + b) : parseFloat((a + b).toFixed(2));
            break;
        case "-":
            return (a - b) % 1 == 0 ? (a - b) : parseFloat((a - b).toFixed(2));
            break;
        case "*":
            return (a * b) % 1 == 0 ? (a * b) : parseFloat((a * b).toFixed(2));
            break;
        case "/":
            if (b == 0) {
                document.querySelector("#screen").textContent = `INVALID, ALL VALUES RESET`;
                num1="", num2="", operator="";
                return "";
            }
            return (a / b) % 1 == 0 ? (a / b) : parseFloat((a / b).toFixed(2));
            break;
    }
}