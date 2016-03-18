
var alphabet = new Array(" ", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
var letterIndex = null;
var letter = null;

var fullText = "";
finalLetterIndex = null;
finalLetter = null;
var shift = parseInt(document.getElementById("shift").value);

function encrypt(){
  var plaintext = document.getElementById("encryptText").value;

    var shiftNumber = parseInt(shift, 10);

    if(plaintext.match(/^[a-z\s]+$/)){ 
    
     for(var i=0; i < plaintext.length; i++){ 
  
         letter = plaintext.charAt(i);
         console.log("letter:" + letter);
         
         letterIndex = alphabet.indexOf(letter);
         console.log("letterIndex : " + letterIndex);
        
         
         finalLetterIndex = letterIndex + shiftNumber;
         
         if(finalLetterIndex > 25){
             finalLetterIndex = finalLetterIndex - 26;
         }
         
         //check for spaces!
         if(letter == " "){
             finalLetter = " ";
         } else {
             finalLetter = alphabet[finalLetterIndex];
         }
         
         fullText = fullText + finalLetter;
     }
    
        
    } else {
        console.log("UPPERCASE!!");
        //set text to lowercase????
    }
    
    document.getElementById("encryptText").value = fullText;
}


function decrypt(){
    var plaintext = document.getElementById("decryptText").value;
    var shiftNumber = parseInt(shift, 10);
    
     if(plaintext.match(/^[a-z\s]+$/)){ 
        for(var i=0; i < plaintext.length; i++){ 
            letter = plaintext.charAt(i);
            console.log("letter:" + letter);
            letterIndex = alphabet.indexOf(letter);
            
            finalLetterIndex = letterIndex - shiftNumber;
            
            //REVERSING THE PROCESS
            if(finalLetterIndex > 25){
                finalLetterIndex = finalLetterIndex - 26;
            } else{
                finalLetter = alphabet[finalLetterIndex];
            }
            
            //check for spaces!
            if(letter == " "){
                finalLetter = " ";
            } else {
                finalLetter = alphabet[finalLetterIndex];
            }
            
            fullText = fullText + finalLetter;
        }
         
         
     } else {
        console.log("UPPERCASE!!");
        //set text to lowercase????
     }
    
    document.getElementById("decryptText").value = fullText;
     
}