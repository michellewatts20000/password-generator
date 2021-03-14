// library of all the options
var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
var sCharacters = '!@#$%^*()?><.,~|+-/;:{}][=~`';
var allNumbers = '0123456789';

// makes a string of uppercase from the lowercase string
var upperCase = lowerCase.toUpperCase();

// concat the strings together to make variations of all the password options
var allCharacters = lowerCase.concat(upperCase);
var numbersAllCharacters = allCharacters.concat(allNumbers);
var numbersLowerCase = lowerCase.concat(allNumbers);
var numbersUpperCase = upperCase.concat(allNumbers);
var sCharactersNumbers = sCharacters.concat(allNumbers);
var sCharactersAllCharacters = sCharacters.concat(allCharacters);
var sCharactersLowerCase = sCharacters.concat(lowerCase);
var sCharactersUpperCase = sCharacters.concat(upperCase);
var numspecupper = sCharactersNumbers.concat(upperCase);
var numspeclower = sCharactersNumbers.concat(lowerCase);
var everything = allCharacters.concat(allCharacters, sCharacters, allNumbers);

// an empty string to store the new password
var newPassword = '';

// generate password function, when "generate passward" button is clicked this function runs
function generatePassword() {


// store the # of characters the user wants in their password as a variable
  var numberCharacters = window.prompt("How many characters do you want in your password? Please choose between 8 and 128.");


  // alert user that they haven't specified enough characters and return them out of the function so they have to start again
  if (numberCharacters < 8) {
    window.alert("You haven't specified enough characters, please choose a number between 8 and 128");
    return;


  } 
  // alert user that they have asked for too many characters and return them out of the function so they have to start again
  else if (numberCharacters > 128) {
    window.alert("You have too many characters, please choose a number between 8 and 128.");
    return;

  } 
   // alert user that they cannot leave the field blank and return them out of the function so they have to start again
  else if (numberCharacters === "") {
    window.alert("You have left the field blank you need to enter a number between 8 and 128");
    return;

  } 
   // ask the user what types of characters they want their password to contain
  else {
    var uLowerCase = window.confirm("Click OK if you want lowercase letters in your password.");
    var uUpperCase = window.confirm("Click OK if you want uppercase letters in your password.");
    var uNumbers = window.confirm("Click OK if you want numbers in your password.");
    var uSpecial = window.confirm("Click OK if you want special characters in your password.");
      
  }

// alert user that they need to select at least one character type and return them out of the function so they have to start again
  if (!uSpecial && !uNumbers && !uLowerCase && !uUpperCase) {
    window.alert("You must select at least one character type!");
    return;

  } 
  // use logical comparison operators and conditional statements to run the right loop for the user
  else if (!uSpecial && !uNumbers && uLowerCase && uUpperCase) {

    // run loop for length of numberCharacters
    for (i = 0; i < numberCharacters; i++) {

      // randomly select characters from the string (in this case it is the string of all uppercase and lowercase characters "allCharacters")
      let character = Math.floor(Math.random() * allCharacters.length);

      // store the output in a variable called newPassword which will then be used to show up in the html element #password
      newPassword += allCharacters.charAt(character, character + 1);
    }


  } else if (uSpecial && uNumbers && uLowerCase && uUpperCase) {

    for (i = 0; i < numberCharacters; i++) {
      let character = Math.floor(Math.random() * everything.length);
      newPassword += everything.charAt(character, character + 1);


    }


  } else if (!uSpecial && !uNumbers && !uLowerCase && uUpperCase) {

    for (i = 0; i < numberCharacters; i++) {
      let character = Math.floor(Math.random() * upperCase.length);
      newPassword += upperCase.charAt(character, character + 1);


    }


  } else if (!uSpecial && !uNumbers && uLowerCase && !uUpperCase) {

    for (i = 0; i < numberCharacters; i++) {
      let character = Math.floor(Math.random() * lowerCase.length);
      newPassword += lowerCase.charAt(character, character + 1);
      

    }


  } else if (!uSpecial && uNumbers && !uLowerCase && !uUpperCase) {

    for (i = 0; i < numberCharacters; i++) {
      let character = Math.floor(Math.random() * allNumbers.length);
      newPassword += allNumbers.charAt(character, character + 1);


    }


  } else if (uSpecial && !uNumbers && !uLowerCase && !uUpperCase) {

    for (i = 0; i < numberCharacters; i++) {
      let character = Math.floor(Math.random() * sCharacters.length);
      newPassword += sCharacters.charAt(character, character + 1);


    }


  } else if (!uSpecial && uNumbers && !uLowerCase && uUpperCase) {

    for (i = 0; i < numberCharacters; i++) {
      let character = Math.floor(Math.random() * numbersUpperCase.length);
      newPassword += numbersUpperCase.charAt(character, character + 1);


    }


  } else if (uSpecial && !uNumbers && !uLowerCase && uUpperCase) {

    for (i = 0; i < numberCharacters; i++) {
      let character = Math.floor(Math.random() * sCharactersUpperCase.length);
      newPassword += sCharactersUpperCase.charAt(character, character + 1);


    }


  } else if (uSpecial && uNumbers && !uLowerCase && !uUpperCase) {

    for (i = 0; i < numberCharacters; i++) {
      let character = Math.floor(Math.random() * sCharactersNumbers.length);
      newPassword += sCharactersNumbers.charAt(character, character + 1);


    }


  } else if (uSpecial && !uNumbers && uLowerCase && !uUpperCase) {

    for (i = 0; i < numberCharacters; i++) {
      let character = Math.floor(Math.random() * sCharactersLowerCase.length);
      newPassword += sCharactersLowerCase.charAt(character, character + 1);


    }


  } else if (!uSpecial && uNumbers && uLowerCase && !uUpperCase) {

    for (i = 0; i < numberCharacters; i++) {
      let character = Math.floor(Math.random() * numbersLowerCase.length);
      newPassword += numbersLowerCase.charAt(character, character + 1);


    }


  } else if (!uSpecial && uNumbers && uLowerCase && uUpperCase) {

    for (i = 0; i < numberCharacters; i++) {
      let character = Math.floor(Math.random() * numbersAllCharacters.length);
      newPassword += numbersAllCharacters.charAt(character, character + 1);


    }


  } else if (uSpecial && !uNumbers && uLowerCase && uUpperCase) {

    for (i = 0; i < numberCharacters; i++) {
      let character = Math.floor(Math.random() * sCharactersAllCharacters.length);
      newPassword += sCharactersAllCharacters.charAt(character, character + 1);


    }


  } else if (uSpecial && uNumbers && !uLowerCase && uUpperCase) {

    for (i = 0; i < numberCharacters; i++) {
      let character = Math.floor(Math.random() * numspecupper.length);
      newPassword += numspecupper.charAt(character, character + 1);


    }


  } else if (uSpecial && uNumbers && uLowerCase && !uUpperCase) {

    for (i = 0; i < numberCharacters; i++) {
      let character = Math.floor(Math.random() * numspeclower.length);
      newPassword += numspeclower.charAt(character, character + 1);


    }


  }


}




// Write password to the #password input
function writePassword() {

  // run the generatePassword function
  generatePassword();
  var passwordText = document.querySelector("#password");

  // put the generated password in the #password element in the html
  passwordText.value = newPassword;
}


// Make a variable out of the html #generate to use in the next step
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);