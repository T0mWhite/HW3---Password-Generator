// Password generator with length and character type options

// Hooks variable to html button with generate id
let generateBtn = document.querySelector("#generate");

// Adds event listener to call the writePassword function on click
generateBtn.addEventListener("click", writePassword);

// Calls the writePassword function which:
// declares password variable as the return of generatePassword function
// declares passwordText variable as the textarea html object
// sets the value of the passwordText object = password variable (return of generatePassword function).
function writePassword() {
    let password = generatePassword();
    let passwordText = document.querySelector("#password");
    passwordText.value = password;
}

// Lowercase alphabet array
const lowerAlpha = "abcdefghijklmnopqrstuvwxyz".split("");
// Capital alphabet array
const upperAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
// Special array
const specialChars = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~".split("");
// Number array
const numbers = "1234567890".split("");

// Setting up variables to represent the boolean value of checkboxes
let lowerCheck = document.getElementById("lower");
let upperCheck = document.getElementById("upper");
let numberCheck = document.getElementById("number");
let specialCheck = document.getElementById("special");
let pwLength = document.getElementById("pwLength");

//  If no boxes are checked, prompts the user to check a box and returns out of the function.If one or more boxes are checked, concatenates the checked array(s) to the selectedParameters array.
// Then uses the .length of selectedParameters from concatArrays() to generate a random number, adds this to an index of the new variable randomArray, and repeats until the user selected character limit has been reached.
// Function return is a string made from joining the indexes of randomArray, creating a randomly generated string of characters.

function generatePassword() {
    let selectedParameters = [];
    let randomArray = [];
    if (pwLength.valueAsNumber < 8) {
        console.log("Please choose 8 or more characters.");
        alert("Password length must be at least 8 characters.");
        return "Password length must be at least 8 characters.";
    } if (pwLength.valueAsNumber > 128) {
        console.log("Please choose 128 or less characters.");
        alert("Password length must be less than 129 characters.");
        return "Password length must be less than 129 characters.";
    } if (!lowerCheck.checked && !upperCheck.checked && !specialCheck.checked && !numberCheck.checked) {
        console.log("Inside the statement");
        alert("Please choose the character types to be included in your password.");
        return "Please choose the character types to be included in your password.";
    } if (lowerCheck.checked === true) {
        console.log("Lowercase checked: " + lowerCheck.checked);
        selectedParameters = selectedParameters.concat(lowerAlpha);
    } if (upperCheck.checked === true) {
        console.log("Uppercase checked: " + upperCheck.checked);
        selectedParameters = selectedParameters.concat(upperAlpha);
    } if (specialCheck.checked === true) {
        console.log("Special characters checked: " + specialCheck.checked);
        selectedParameters = selectedParameters.concat(specialChars);
    } if (numberCheck.checked === true) {
        console.log("Numbers checked: " + numberCheck.checked);
        selectedParameters = selectedParameters.concat(numbers);
    }

    for (let i = 0; i < pwLength.valueAsNumber; i++) {
        let randomNumber = Math.floor(Math.random()*selectedParameters.length);
        randomArray = randomArray.concat(selectedParameters[randomNumber]);
    }
    return randomArray.join('');
}