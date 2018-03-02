/*eslint-env browser*/

//STEP 1

function halfNumber(num) {
    "use strict"
    return ("Half of " + num + " is " + num / 2);
} //End of halfNumber

console.log(halfNumber(10));


//STEP 2

function squareNumber(num){
    "use strict";
    return ('The result of squaring the number ' + num + " is " + num*num);
}//end of squareNumber

console.log(squareNumber(5)); 


//STEP 3

function percentOf(num1, num2) {
    "use strict";
    var percentage = (num1 / num2) * 100;

    return (num1 + ' is ' + percentage.toFixed(0) + '% of ' + num2);
} //end of percentOf

console.log(percentOf(20, 23));


//STEP 4

function findModulus(num1, num2) {
    "use strict";
    var modulusOf = num1%num2;
    return ( modulusOf + ' is the modulus of ' + num1 + ' and ' + num2);

} //end of findModulus

console.log(findModulus( 10, 3));

//STEP 5
function sumOf(numbers) {
    'use strict';
    numbers = numbers.split(',');
    //window.console.log(numbers);

    var sum = 0;
    //Loop though numbers array and adds value to sum
    for (var i = 0; i < numbers.length; i++) {
        sum += (+numbers[i]);
    }
    //console.log(sum);
    return 'The total sum of ' + numbers + ' is ' + sum;
}

var input = window.prompt('Enter numbers to be sumed delimited by a comma: ');
window.console.log(sumOf(input));



