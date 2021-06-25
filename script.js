// Assignment Code
var generateBtn = document.querySelector("#generate");

// Functions to create variables 

// function Randomlower() {
  const lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  const upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
  const number = ["0","1","2","3","4","5","6","7","8","9"]
  const special = [",","!","#","$","%","&","(",")","*","+","-","/",":",";","<","=",">","?","@","[","^","_","`","{","|","~"]

  // let Randomgen = {
  //   checklower: checklower, 
  //   checkupper: checkupper, 
  //   checknumber: checknumber, 
  //   checkspeical: checkspecial,
  //   nlength: nlength,
  //  }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//generate password 

function generatePassword() {
 
 var plength = prompt("How many characters do you want in your password");
  const nlength = parseInt(plength)
    
    console.log(plength)
    console.log(nlength)
    console.log(typeof nlength)
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

    const Randomgen = {
      checklower: checklower, 
      checkupper: checkupper, 
      checknumber: checknumber, 
      checkspeical: checkspecial,
      nlength: nlength,
     }

    if(nlength<7 || nlength>128) {
      return alert('length must be between 0 and 128')
    }

    if(checklower === 0 && checkupper === 0 && checkspecial === 0 && checknumber ===0) {
      return alert('please select one');
    } 

    var output = "";

    for( var i=0; output <= nlength; i++){
     
      if(checklower){
      var lowervalue = lower[Math.floor(Math.random()*lower.length)]
      output += lowervalue     
      };

      if(checkupper){
      var uppervalue = upper[Math.floor(Math.random()*upper.length)]
      output += uppervalue
      };

      if(checkspecial){
      var specialvalue = special[Math.floor(Math.random()*special.length)]
      output += specialvalue
      };

      if(checknumber){
      var numbervalue = special[Math.floor(Math.random()*number.length)]
      output += numbervalue
      };

    console.log(lowervalue)
    console.log(uppervalue)
    console.log(specialvalue)
    console.log(numbervalue)
    
}
return output
  
}


  


//   // const typesCount = checklower + checkupper + checknumber + checkspecial;
//   //   console.log('typesCount:', typesCount);

//   // const typesArr = [{checklower}, {checkupper}, {checknumber}, {checkspecial}].filter(item => Object.values(item)[0]);
//   //     console.log('typesArr:', typesArr)

//   //   for(i=0; i<length; i+=typesCount) {
//   //     typesArr.forEach(type => {
//   //       const funcName = Object.keys(type)[0];
//   //         console.log('funcName', funcName);

//   //     })
//   //   };
// }  
            
    //       createdPassword += Randomgen(funcName);
    //       console.log(createdPassword)
    //   });
  //   }
  // }       

   


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