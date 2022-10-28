

// let pass1El= document.getElementById('pass1-el')
// let pass2El =document.getElementById('pass2-el')
let pass3El = document.getElementById('my-input-1')
let pass4El = document.getElementById('my-input-2')
let alphaNum = document.getElementById('alpha-num')
let lenBtn = document.getElementById('len-btn')
const characters = ["A","B","C","D","E","F","G","H","I","J","K",
"L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b",
"c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s",
"t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7",
 "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-",
 "+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const alpha = ["A","B","C","D","E","F","G","H","I","J","K",
"L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b",
"c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s",
"t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7",
"8", "9"]

function generatePAss(){
  let passLength = document.getElementById('pass-length').value
    let password='';
    if(alphaNum.checked){
      for(let i=0; i <passLength;i++){
        let randNum = Math.floor(Math.random()* alpha.length)
        password = password + alpha[randNum]
    
    }
    }else{
      for(let i=0; i <passLength;i++){
        let randNum = Math.floor(Math.random()* characters.length)
        password = password + characters[randNum]
    
    }
    }


  return password
}

function generate(){
    // pass1El.textContent= generatePAss();
    // pass2El.textContent = generatePAss();
    pass3El.value = generatePAss();
    pass4El.value = generatePAss();
}



//copy the first password
function myFunction1() {
    // Get the text field
    var copyText = document.getElementById("my-input-1");
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
    
    
  }

  //copy the second password
  function myFunction2() {
    // Get the text field
    var copyText = document.getElementById("my-input-2");
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
    
 
  }