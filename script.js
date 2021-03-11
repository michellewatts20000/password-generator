// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var numbers = window.prompt("How many characters do you want in your password?");

if (numbers < 8) {
  window.alert("You don't have enough characters");
} else if 
  (numbers > 256) {
    window.alert("You have too many characters");
  }
else {
  var specialCharacters = window.prompt("Do you want any special characters in your password?");
}

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
