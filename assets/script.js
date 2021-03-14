// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // Store the length the user wants the password to be
  var complexity = document.querySelector(".complexity").value;

  if (complexity < 8 || complexity > 128) {
    alert("Please choose a number between 8 and 128.")
    return;
  }

  // Store the values from the checkboxes
  var useSpecialChars = document.querySelector(".cb_special").checked;
  var useNumeric = document.querySelector(".cb_numeric").checked;
  var useLowercase = document.querySelector(".cb_lowercase").checked;
  var useUppercase = document.querySelector(".cb_uppercase").checked;

  // if no checkboxes checked show alert
  if (!useSpecialChars && !useNumeric && !useLowercase && !useUppercase) {

    alert("Please make at least one selection.")
    return;
  }

  // Requirement values
  var specialChars = '!@#$%^&*()_+';
  var numericChars = '1234567890';
  var lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
  var upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  // Build out the final value string in which to build the password from.
  let values = `${useUppercase ? upperCaseChars : ''}${useLowercase ? lowerCaseChars : ''}${useSpecialChars ? specialChars: ''}${useNumeric ? numericChars : ''}`;

  var password = '';

  // Create for loop to choose password characters
  for (var i = 0; i < complexity; i++) {
    password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
  }

  document.querySelector(".showit").value = password;

}


function copyPassword() {
  var password = document.querySelector(".showit");
  password.select();
  document.execCommand("copy");
  alert('password copied!')
}


// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);