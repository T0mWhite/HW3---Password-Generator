// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  return password;
}

// Lowercase alphabet array

let lowerAlpha = "abcdefghijklmnopqrstuvwxyz".split("");
console.log(lowerAlpha);
let upperAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
console.log(upperAlpha);
let specialChars = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~".split("");
console.log(specialChars);
let numbers = "1234567890".split("");
console.log(numbers);




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


