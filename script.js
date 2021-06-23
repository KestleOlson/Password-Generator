// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = "0123456789";
var special = "!$^&*-=+_?";
var Arraylength = plength
// var allChars = lowerCase + upperCase + numeric + special 


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var plength = prompt("How many characters do you want in your password");
    console.log(plength);
  if (confirm("Do you want to include lowercase?")) {
    //add lower case to password//
    var randomlc = Math.floor(Math.random()*lowerCase.length)
    var chosenlc = lowerCase[randomlc]
    console.log(chosenlc)
   } else {
    //do nothing//
  }

  if (confirm("Do you want to include uppercase?")) {
    //add lower case to password//
    var randomuc = Math.floor(Math.random()*upperCase.length)
    var chosenuc = upperCase[randomuc]
    console.log(chosenuc)
   } else {
    //do nothing//
  }

  if (confirm("Do you want to include a special character?")) {
    //add special character to password//
    var randomsc = Math.floor(Math.random()*special.length)
    var chosensc = special[randomsc]
    console.log(chosensc)
  } else {
    //do nothing//
  }

  if (confirm("Do you want to include a number?")) {
    //add number to password//
    var randomnum = Math.floor(Math.random()*numeric.length)
    console.log(randomnum)
  } else {
    // do nothing//
  }
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

  //TODO: create variables to store the information needed to generate the password as a string or array ==> global
// WHEN I click the button to generate a password
  //TODO: start a function ==> generatePassowrd()
// THEN I am presented with a series of prompts for password criteria
  //TODO: setup a series of prompts that has the specific password criteria presented to the user 
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
    //TODO: prompt the user for thier password length ==> check that this value is 1. a number, 2. eight or more characters, 3. 128 or less characters 
    //TODO: take confims and combine the true into a holder
    // WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
  //TODO: set up a series of confirms to see if they want to include lowercase, uppercase, numeric, and/or special characters
  //TODO: if the special characters is true take that array to add it to the next array
  //TODO: take confirms and combine the true into a holder
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
  //TODO: check that the user has selected at least one type 
      //make each confrim window its own variable 
  //TODO: randomize the combined types ==> Math.floor and Math.random    
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
  //TODO: return