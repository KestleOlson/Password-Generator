// Assignment Code
var generateBtn = document.querySelector("#generate");

// Functions to create variables 

function Randomlower() {
  return String.fromCharCode(Math.floor(Math.random()*26)+97);
}

function Randomupper () {
  return String.fromCharCode(Math.floor(Math.random()*26)+65);
}

function Randomnumber () {
  return String.fromCharCode(Math.floor(Math.random()*10)+48);
}

function Randomspecial () {
  var special = "!$^&*-=+_?"
  return special[Math.floor(Math.random() * special.length)];
}

const Randomgen = {
    lower: Randomlower, 
    upper: Randomupper, 
    number: Randomnumber, 
    speical: Randomspecial}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//generate password 

function generatePassword() {
  var plength = prompt("How many characters do you want in your password");
  var length = parseInt(plength);
    
    console.log(plength)
    console.log(length)
    console.log(typeof length)
    console.log(typeof plength)
  
  const checklower = confirm("Do you want to include lowercase?");
    // const includelower = checklower.true;
    console.log(checklower);
    
  const checkupper = confirm("Do you want to include uppercase?");  
    //  const includeupper = checkupper.true;
    console.log(checkupper);
  
  const checkspecial = confirm("Do you want to include a special character?");
    // const includespecial = checkspecial.true;
    console.log(checkspecial);
  
  const checknumber = confirm("Do you want to include a number?");
    // const includenumber = checknumber.true;
    console.log(checknumber);
  
  // function organizePassword(length,checklower,checkupper,checkspecial,checknumber){
    var generatedPassword = "";
    
    const typesCount = checklower + checkupper + checknumber + checkspecial;
    console.log('typesCount:', typesCount);

    const typesArr = [{checklower}, {checkupper}, {checknumber}, {checkspecial}].filter(item => Object.values(item)[0]);
      console.log('typesArr:', typesArr)

    if(typesCount === 0) {
      return alert('please select one');
    }

    if(length<7 || length>128) {
      return alert('length must be between 0 and 128')
    }

    for(let i=0; i<length; i+=typesCount) {
      typesArr.forEach(type => {
        const funcName = Object.keys(type)[0];
          console.log('funcName', funcName);

        generatedPassword += Randomgen[funcName]();
        console.log(generatedPassword)
      });
    }
  // }
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