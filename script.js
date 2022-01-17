// Assignment code here
const responseArray = {
  uppercase: "QWERTYUIOPASDFGHJKLZXCVBNM",
  lowercase: "qwertyuiopasdfghjklzxcvbnm",
  numbers: "1234567890",
  symbols: "!@#$%^&*"
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
var possiblecharacters = ""

  var passwordLength = parseInt(window.prompt("Choose a password number between 8 and 128 to generate password"));
  console.log(passwordLength);

  //if true
  if (passwordLength < 128 && passwordLength > 8);
  //confirm lower case 
  var lowercasePrompt = window.confirm("Would you like to include lower case characters?");
  console.log(lowercasePrompt);

  //if true
  if (lowercasePrompt === true) {
    // push lower case into responseArray
    possiblecharacters=possiblecharacters+responseArray.lowercase
    console.log(possiblecharacters);
  }

  //confirm upper case 
  var uppercasePrompt = window.confirm("Would you like to include upper case characters?");
  console.log(uppercasePrompt);

  //if true
  if (uppercasePrompt === true) {
    possiblecharacters=possiblecharacters+responseArray.uppercase
    console.log(possiblecharacters);
  }

  //confirm numbers
  var numbersPrompt = window.confirm("Would you like to include numbers?");
  console.log(numbersPrompt);

  //if true
  if (numbersPrompt === true) {
    possiblecharacters=possiblecharacters+responseArray.numbers
    console.log(possiblecharacters);
  }

  //confirm symbols 
  var symbolsPrompt = window.confirm("Would you like to include special characters");
  console.log(symbolsPrompt);

  //if true
  if (symbolsPrompt === true) {
    possiblecharacters=possiblecharacters+responseArray.symbols;
    console.log(possiblecharacters);
  }
var realpassword= ""

for (let i = 0; i < passwordLength; i++){
  realpassword=realpassword+possiblecharacters.charAt(Math.floor(Math.random() * possiblecharacters.length));
}
return realpassword

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// passwordLength = window.prompt("Choose a password number between 8 and 128 to generate password");
// console.log(passwordLength);

// //if true
// if (passwordLength < 128 && passwordLength > 8);
// //confirm lower case 
// var lowercasePrompt = window.confirm("Would you like to include lower case characters?");
// console.log(lowercasePrompt);

// //if true
// if (lowercasePrompt === true) {
//   // push lower case into responseArray
//   responseArray(lowercase);
//   console.log(responseArray);
// }

// //confirm upper case 
// var uppercasePrompt = window.confirm("Would you like to include upper case characters?");
// console.log(uppercasePrompt);

// //if true
// if (uppercasePrompt === true) {
//   responseArray(uppercase);
//   console.log(responseArray);
// }

// //confirm numbers
// var numbersPrompt = window.confirm("Would you like to include numbers?");
// console.log(numbersPrompt);

// //if true
// if (numbersPrompt === true) {
//   responseArray(numbers);
//   console.log(responseArray);
// }

// //confirm symbols 
// var symbolsPrompt = window.confirm("Would you like to include special characters");
// console.log(symbolsPrompt);

// //if true
// if (symbolsPrompt === true) {
//   responseArray(symbols);
//   console.log(responseArray);
// }

// //Generate Password
