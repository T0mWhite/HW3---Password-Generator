// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input textarea element
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    
    passwordText.value = password;
    // concatArrays();
}

// Lowercase alphabet array
let lowerAlpha = "abcdefghijklmnopqrstuvwxyz".split("");
// Capital alphabet array
let upperAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
// Special array
let specialChars = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~".split("");
// Number array
let numbers = "1234567890".split("");

// Setting up variables to represent the boolean value of checkboxes
let lowerCheck = document.getElementById("lower");
let upperCheck = document.getElementById("upper");
let numberCheck = document.getElementById("number");
let specialCheck = document.getElementById("special");
let pwLength = document.getElementById("pwLength");

// Creates and empty array to concatenate the checkbox arrays into.

// Function that concatenates an array to the selectedParameters array matching the checkbox parameters if the checkbox is selected. Returns selectedParameters after all possible concatenations are run.
function generatePassword() {
    let selectedParameters = [];
    randomArray = [];
    if (lowerCheck.checked && upperCheck.checked && specialCheck.checked && numberCheck.checked === false) {
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
    
    for (let i = 0; i < pwLength.valueAsNumber; i++) {
        let randomNumber = Math.floor(Math.random()*selectedParameters.length);
        randomArray = randomArray.concat(selectedParameters[randomNumber]);
    }
    return randomArray.join('');
}

// Function that establishes a random array. Uses the length of the returned selectedParameters from concatArrays() to generate a random number based on the number of indexes in selectedParameters. Generates the *.length* amount of indexes with random numbers in them.

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


