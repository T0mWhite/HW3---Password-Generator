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
console.log(lowerAlpha);
let upperAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
console.log(upperAlpha);
let specialChars = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~".split("");
console.log(specialChars);
let numbers = "1234567890".split("");
console.log(numbers);

let lowerCheck = document.getElementById("lower");
let upperCheck = document.getElementById("upper");
let numberCheck = document.getElementById("number");
let specialCheck = document.getElementById("special");

function generatePassword() {
  return password;
}


// if (upBox.checked === true) {
//     upperAlpha = true;
//     if (lwBox.checked === true)
//     lowerAlpha = true;
//     if (nmBox.checked === true)
//     numBer = true;
//     if (spBox.checked === true)
//     SpecChar = true; 
//   }


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


