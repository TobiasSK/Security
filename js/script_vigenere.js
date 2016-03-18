var alphabet = new Array("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");

var encryptedArray = new Array();

var fullText = "";

function vig_Encrypt(){
    var textLength = document.getElementById("vigenereText").value.length;
    var textArray = document.getElementById("vigenereText").value;
    var singleKey = document.getElementById("vig_shift").value.split("");
    var keyLength = document.getElementById("vig_shift").value.length;

    if (keyLength <= textLength) {

    for (var k = 0; k < textLength - 1; k++) {
        singleKey[singleKey.length] = singleKey[k];
    }
    

        for (var i = 0; i < textLength; i++) {
            encryptedArray[i] = ((find(alphabet, textArray[i]) + find(alphabet, singleKey[i])) % 26);
        }

        for (var s = 0; s < encryptedArray.length; s++) {
            encryptedArray[s] = alphabet[encryptedArray[s]];
        }


        encryptedArray = encryptedArray.join("");

    }else{
        console.log("The key length is longer than the message!");
    }

    fullText = fullText + encryptedArray.toString();
    document.getElementById("vigenereText").value = fullText;
}


//function decrypt

function vig_Decrypt(){
    var textLength = document.getElementById("vigenereText").value.length;
    var textArray = document.getElementById("vigenereText").value;
    var singleKey = document.getElementById("vig_shift").value.split("");
    var keyLength = document.getElementById("vig_shift").value.length;
    
    if (keyLength <= textLength) {
    
      for (var k = 0; k < textLength - 1; k++) {
        singleKey[singleKey.length] = singleKey[k];
      }
        
        
        for (var i = 0; i < textLength; i++) {
            encryptedArray[i] = ((find(alphabet, textArray[i]) - find(alphabet, singleKey[i]) + 26) % 26);
        }

        for (var s = 0; s < encryptedArray.length; s++) {
            encryptedArray[s] = alphabet[encryptedArray[s]];
        }

        encryptedArray = encryptedArray.join(" ");
    
    } else {
        console.log("The key length is longer than the message!");
    }

     fullText = fullText + encryptedArray.toString();
     document.getElementById("vigenereText").value = fullText;
}

function find(array, value) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] == value) { return i; }
    }

    return -1;
}
