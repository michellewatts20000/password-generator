// Assignment Code
var generateBtn = document.querySelector("#generate");
var allCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
var sCharacters = '!@#$%^*()?><~';
var sNumbers = '1234567890';
var combo = allCharacters.concat(allCharacters, sCharacters, sNumbers);
console.log(combo);


function generatePassword() {
  var numberCharacters = window.prompt("How many characters do you want in your password?");
  var result = '';


  for (var i = 0; i < numberCharacters; i++) {
    result += combo(Math.floor(Math.random()))




  }
  return result;

}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// writePassword();

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




// // Assignment Code
// var uSpecial = true;
// var numbers = 12;
// var uNumbers = false;
// var uLowerCase = false;
// var uUppercase = false;

// var generateBtn = document.querySelector("#generate");

// var sCharacter = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

// var pNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// var pLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


// var pUppercase = pLetters.map(pLetters => pLetters.toUpperCase());

// var userSelect;




// // console.log(pUppercase);

// // console.log(pNumbers);

// // Write password to the #password input
// function writePassword() {


//   // var numberCharacters = window.prompt("How many characters do you want in your password?");

//   // if (numbers < 8) {
//   //   window.alert("You don't have enough characters");
//   // } else if (numbers > 128) {
//   //   window.alert("You have too many characters");
//   // } else if (numbers === "") {
//   //   window.alert("You must enter a number between 8 and 128");
//   // } else {
//   //   var uSpecial = window.confirm("Click OK if you want special characters in your password.");
//   //   var uNumbers = window.confirm("Click OK if you want numbers in your password.");
//   //   var uLowerCase = window.confirm("Click OK if you want lowercase letters in your password.");
//   //   var uUppercase = window.confirm("Click OK if you want uppercase letters in your password.");
//   // }





//   if (!uSpecial && !uNumbers && !uLowerCase && !uUppercase) {
//     window.alert("You must select at least one character type!");

//   } else if (uSpecial) {

//     var userSelect = sCharacter;
//     console.log(userSelect);
//   };




//   var numberCharacters = 10;
//   var passwordNew = [];

//   for (var i = 0; i < numberCharacters; i++) {
//     var magic = userSelect[Math.floor(Math.random() * userSelect.length)];
//     passwordNew.push(magic);
//   }



//   console.log(passwordNew);
//   console.log(magic);

//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;


// };

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);