/*eslint-env browser*/

function tellFortune(numOfChildren, partnersName, location, jobTitle) {
    "use strict";
    return ('You will be a ' + jobTitle + ' in ' + location + ', and married to ' + partnersName + ' with ' + numOfChildren + ' kids.');
}

window.console.log(tellFortune(5, 'Jenny', 'San Diego', 'web developer'));
window.console.log(tellFortune(1, 'Cat', 'Washington DC', 'software developer'));
window.console.log(tellFortune(2, 'Casandra', 'Miami', 'frontend engineer'));
