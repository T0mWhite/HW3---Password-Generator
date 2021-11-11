// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Lowercase alphabet array
let lowerAlpha = "abcdefghijklmnopqrstuvwxyz".split("");
// Capital alphabet array
let upperAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
let specialChars = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~".split("");
let numbers = "1234567890".split("");

let lowerCheck = document.getElementById("lower");
let upperCheck = document.getElementById("upper");
let numberCheck = document.getElementById("number");
let specialCheck = document.getElementById("special");
let pwLength = document.getElementById("pwLength");

let selectedParameters = [];
concatArrays();

function concatArrays() {
    if (lowerCheck && upperCheck && specialCheck && numberCheck === false) {
        alert("Please choose at least 1 parameter.");
        return;    
    } if (lowerCheck.checked === true) {
        console.log(lowerCheck.checked);
        selectedParameters = selectedParameters.concat(lowerAlpha);
    } if (upperCheck.checked === true) {
        console.log(upperCheck.checked);
        selectedParameters = selectedParameters.concat(upperAlpha);
    } if (specialCheck.checked === true) {
        console.log(specialCheck.checked);
        selectedParameters = selectedParameters.concat(specialChars);
    } if (numberCheck.checked === true) {
        console.log(numberCheck.checked);
        selectedParameters = selectedParameters.concat(numbers);
    }
    return selectedParameters;
}


function generatePassword() {
    randomArray = [];
    for (let i = 0; i < pwLength.valueAsNumber; i++) {
        let randomNumber = Math.floor(Math.random()*selectedParameters.length);
        randomArray = randomArray.concat(selectedParameters[randomNumber]);
    }
    return randomArray.join('');
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


