function calculate(num1, num2, operation) {
    'use strict';
    switch (operation) {
        case 'add':
            window.alert(num1 + num2);
            break;

        case 'subtract':
            window.alert(num1 - num2);
            break;

        case 'divide':
            window.alert(num1 / num2);
            break;

        case 'multiply':
            window.alert(num1 * num2);
            break;

        default:
            window.alert('Invalid entry, try again');
            var num1 = +window.prompt('Enter a number');
            var num2 = +window.prompt('Enter another number');
            var operation = window.prompt("What operation would you like to perform (add, subtract, divide, multiply)");
            calculate(num1, num2, operation);
    }
}

var num1 = +window.prompt('Enter a number');
var num2 = +window.prompt('Enter another number');
var operation = window.prompt("What operation would you like to perform (add, subtract, divide, multiply)");

calculate(num1, num2, operation);
