//Defined Character Sets
let UpperSET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let LowerSET = "abcdefghijklmnopqrstuvwxyz"
let NumbersSET = "0123456789"
let SpecialSET =  " !" + '"#$%&' + "'()*+,-./:;<=>?@[\]^_`{|}~"

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  //Emptied Variables
  let PasswordSET = ""
  let password = ""

  // Confirm for 4 Password Criteria (yes/no)
  let UpperCase = confirm("Include Uppercase Letters?")
  let LowerCase = confirm("Include Lowercase Letters?")
  let Numbers = confirm("Include Numbers?")
  let Special = confirm("Include Special Characters?")
  // Check if at least one Criteria is selected
  if(!UpperCase && !LowerCase && !Numbers && !Special) {
    alert("Please try again and select at least one option")
    return
  }

  // Prompt for Password Length
  let PassLength = prompt("Please input the length of the password (Must be larger than 8 & less than 128)")
  // Checks if number entered is greater than 8 and less than 128
  if (PassLength < 8 || PassLength > 128) {
    alert("Please try again and input a length larger than 8 and less than 128.")
    return
  } else if (isNaN(PassLength)) {
    alert("Please try again and input a number.")
    return
  }

 //Build Character List
  if (UpperCase) {
    PasswordSET = UpperSET
  }
  if (LowerCase) {
    PasswordSET = PasswordSET + LowerSET
  }
  if (Numbers) {
    PasswordSET = PasswordSET + NumbersSET
  }
  if (Special) {
    PasswordSET = PasswordSET + SpecialSET
  }


  //Initialize Validation Variables
  let validation = false

  let validationUPPER = true
  let validationLOWER = true
  let validationNUMBER = true
  let validationSPEACIAL = true

  //Password Generator & Validator
  do {

    //Empty Password
    password = ""

    //Create Password from User Chosen List
    for (let i = 1; i <= PassLength; i++) {
      password = password + PasswordSET[Math.floor(Math.random() * PasswordSET.length)]
      }
    
    //Validate if Password Contains Uppercase Letter 
    if (UpperCase) {
      validationUPPER = false
      x = 0
      while (validationUPPER == false && x < UpperSET.length) {
        if (password.includes(UpperSET[x])) {
          validationUPPER = true
        }
        x++;
      }
    }

    //Validate if Password Contains Lowercase Letter  
    if (LowerCase) {
      validationLOWER = false
      x = 0
      while (validationLOWER == false && x < LowerSET.length) {
        if (password.includes(LowerSET[x])) {
          validationLOWER = true
        }
        x++;
      }
    }

    //Validate if Password Contains Number
    if (Numbers) {
      validationNUMBER = false
      x = 0
      while (validationNUMBER == false && x < NumbersSET.length) {
        if (password.includes(NumbersSET[x])) {
          validationNUMBER = true
        }
        x++;
      }
    }

    //Validate if Password Contains Special Character  
    if (Special) {
      validationSPEACIAL = false
      x = 0
      while (validationSPEACIAL == false && x < SpecialSET.length) {
        if (password.includes(SpecialSET[x])) {
          validationSPEACIAL = true
        }
        x++;
      }
    }

    //Check if all validations are true
    if (validationUPPER && validationLOWER && validationNUMBER && validationSPEACIAL) {
      validation = true
    }
    
  }
  while (validation == false)

  // Displays password on page
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
