// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var numbers = window.prompt("How many characters do you want in your password?");

  if (numbers < 8) {
    window.alert("You don't have enough characters");
  } else if (numbers > 128) {
    window.alert("You have too many characters");
  } else {
    var uSpecial = window.confirm("Click OK if you want special characters in your password.");
    var uNumbers = window.confirm("Click OK if you want numbers in your password.");
    var uLowercase = window.confirm("Click OK if you want lowercase letters in your password.");
    var uUppercase = window.confirm("Click OK if you want uppercase letters in your password.");
  }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);