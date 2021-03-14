// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);


function generatePassword() {
  // Store the length the user wants the password to be
  var numberCharacters = document.querySelector(".numberCharacters").value;

  // alert user that they haven't specified enough characters and return them out of the function so they have to start again
  if (numberCharacters < 8 || numberCharacters > 128) {
    alert("Please choose a number between 8 and 128.")
    return;
  }

  // Store the values from the checkboxes, if checked
  var yesSpecialChars = document.querySelector(".user_special").checked;
  var yesNumbers = document.querySelector(".user_numeric").checked;
  var yesLowercase = document.querySelector(".user_lowercase").checked;
  var yesUppercase = document.querySelector(".user_uppercase").checked;

  // if no checkboxes checked by user show alert
  if (!yesSpecialChars && !yesNumbers && !yesLowercase && !yesUppercase) {

    alert("Please make at least one character type selection.")
    return;
  }

 // library of all the options
  var specialChars = '!@#$%^&*()<>={}[],.?~`/;:"-_+';
  var numberChars = '0123456789';
  var lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
  var upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  // create unique values string based on what checkboxes were checked, found this solution here: https://github.com/zsadov1/Password-Generator-3/blob/master/JS/script.js
  let userChoice = `${yesUppercase ? upperCaseChars : ''}${yesLowercase ? lowerCaseChars : ''}${yesSpecialChars ? specialChars: ''}${yesNumbers ? numberChars : ''}`;

  // an empty string to store the new password
  var password = '';

  // Create for loop to choose password characters
  for (var i = 0; i < numberCharacters; i++) {
    password = password + userChoice.charAt(Math.floor(Math.random() * Math.floor(userChoice.length - 1)));
  }

  // displays the password in the textfield looks for the class "showit" in the html
  document.querySelector(".showit").value = password;
}


// function triggered by button click - to copy password
function copyPassword() {
  var password = document.querySelector(".showit");
  password.select();
  document.execCommand("copy");
  alert('password copied!')
}


