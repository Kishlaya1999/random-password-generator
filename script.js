//declaring all the types of characters that passwords have
let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercase = "abcdefghijklmnopqrstuvwxyz";
let symbols = "!@#$%^&*)_+=-./";
let numbers = "0123456789";

//Selecting all the elements from HTML that are required 
const password = document.getElementById("password");
const passwordLength = document.getElementById("passwordLength");
const clipBoardBtn = document.getElementById("clipBoard");
const uppercaseLetters = document.getElementById("uppercaseLetters");
const lowercaseLetters = document.getElementById("lowercaseLetters");
const numbersElement = document.getElementById("numbers");
const specialSymbols = document.getElementById("specialSymbols");
const generatePasswordBtn = document.getElementById("generatePasswordBtn");

//Generates a random uppercase letter
function uppercaseGenerator() {
     return uppercase[Math.floor(Math.random() * uppercase.length)];
}
//Generates a random lowercase letter
function lowercaseGenerator() {
     return lowercase[Math.floor(Math.random() * lowercase.length)];
}
//Generates a random symbol
function symbolsGenerator() {
     return symbols[Math.floor(Math.random() * symbols.length)];
}
//Generates a random number
function numbersGenerator() {
     return numbers[Math.floor(Math.random() * numbers.length)];
}

//Executes when genetate password button is clicked 
generatePasswordBtn.addEventListener("click", function () {
     var passwordLength = document.getElementById("passwordLength");  //selecting the element

     //executes when the password length text box is empty  
     if(passwordLength.value==0){
          alert("Enter the length of password")
     }
     //executes when the password length text box is out of range 
     if(passwordLength.value>20 || passwordLength.value<7){
          alert("Enter the password length between 7 to 20")
     }

     var generatedPassword = "";  //a empty string 
     for (var i = 0; i < passwordLength.value; i++) {
          generatedPassword += passwordGenerator();    //password generator function is called and it returns a character which is added in generated password string 
     }
     // Now we have got a password 
     password.innerHTML = generatedPassword; //genetated password in inserted in the password box 
})

//TODO: in the above code we have two declate the password length inside the function and not outside like every element (find why this is happening)
//problem of scope is there
/*
// generatePasswordBtn.addEventListener("click", generatePassword)
// function generatedPassword(passwordLength) {
//      var generatedPassword = "";
//      // console.log(passwordLength);
//      // console.log(passwordLength.value);
//      for (var i = 0; i < passwordLength.value; i++) {
//           generatedPassword += passwordGenerator();
//           // console.log("Inside for");
//      }
//      console.log(generatedPassword);
//      password.innerHTML = generatedPassword;
// }
*/

//this function generates a random uppercase or lowercase or special symbol or number 
function passwordGenerator() {  //this function executes passwordLength number of times 

     let randomPassword = "";   //a string where all the characters (i.e uppercase,lowercase,special symbol, number) are collected

     if (uppercaseLetters.checked) {       //if uppercase checkbox is checked then it returns true and if block runs
          randomPassword += uppercaseGenerator();
          // console.log("should contain uppercase");
     }
     if (lowercaseLetters.checked) {
          randomPassword += lowercaseGenerator();
          // console.log("should contain lowercase");
     }
     if (specialSymbols.checked) {
          randomPassword += symbolsGenerator();
          // console.log("should contain symbols");
     }
     if (numbersElement.checked) {
          randomPassword += numbersGenerator();
          // console.log("should contain numbers");
     }

     return randomPassword[Math.floor(Math.random() * randomPassword.length)];  // among all the characters one of the character is randomly selected and gets added in the generated password variable
}

clipBoardBtn.addEventListener("click",copyPassword)  //adding event listner to copyclipboard icon


function copyPassword(){
     var input = document.createElement('input');      //we create a input tag   i.e <input> 
     input.setAttribute("type","text");                //we add type attribute and give it value text i.e <input type="text">
     input.setAttribute("id","temporaryInputField");   //we add id attribute and give it temporaryInputField text i.e <input type="text" id="temporaryInputField">
     input.value=password.innerHTML;                   //we take the value from password box and insert in the text input box  
     //now a input box is created which contains generated password
     var passwordContainer = document.getElementById("passwordInput");     
     passwordContainer.appendChild(input);             
     //we insert the input tag into the tag containing id as passwordContainer i.e
     //<div class="inner-container" id="passwordInput">
     //        <input type="text" id="temporaryInputField">
     //</div>
     var temporaryInputField=document.getElementById("temporaryInputField"); //selecting the tag having temporaryInputField as id
     temporaryInputField.select();           //selecting the text inside the created input tag
     document.execCommand("copy");           //copying the selected text i.e genetated password
     alert("Password Copied:" + password.innerHTML); //popping a alert that pasword copied : (genetated text)
     temporaryInputField.remove();           //Deleting the created input tag

     //IN this whole process a input box is created and appropriate actions are performed and the input box is deleted 
     //User doesn't know about the created input box
}