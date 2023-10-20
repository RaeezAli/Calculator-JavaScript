
function calculator(num1, num2, ope) {

    do {

        if (isNaN(num1)) {

            alert("Wrong Input! Please Input a Number for the first value.");
            num1 = +prompt("Enter First Number.");

        } 
        
        else if (isNaN(num2)) {

            alert("Wrong Input! Please Input a Number for the second value.");
            num2 = +prompt("Enter Second Number.");

        } 
        
        else if (!(ope === "+" || ope === "/" || ope === "*" || ope === "-" || ope === "%")) {

            alert("Wrong Input! Please Input a Correct Operator (+, -, *, /, %).");
            ope = prompt("Enter What Operator Do You Want (+, -, *, /, %).");

        }

    } while (isNaN(num1) || isNaN(num2) || !(ope === "+" || ope === "/" || ope === "*" || ope === "-" || ope === "%"));

    let result;

    switch (ope) {

        case "+":
            result = num1 + num2;
            document.write("The Sum of " + num1 + " and " + num2 + " is " + result + ".");
            break;

        case "-":
            result = num1 - num2;
            document.write("The Subtraction of " + num1 + " and " + num2 + " is " + result + ".");
            break;

        case "*":
            result = num1 * num2;
            document.write("The Multiplication of " + num1 + " and " + num2 + " is " + result + ".");
            break;

        case "/":
            result = num1 / num2;
            document.write("The Division of " + num1 + " and " + num2 + " is " + result + ".");
            break;

        case "%":
            result = num1 % num2;
            document.write("The Mod of " + num1 + " and " + num2 + " is " + result + ".");
            break;

    }

}

let firstNumber = +prompt("Enter First Number.");
let secondNumber = +prompt("Enter Second Number.");
let operator = prompt("Enter What Operator Do You Want (+, -, *, /, %).");

calculator(firstNumber, secondNumber, operator);
