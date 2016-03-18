//UNDERSTANDING THE LOGIC : http://stackoverflow.com/questions/13709651/find-the-gcd-of-two-numbers-without-using-divison-or-mod-operator

//calculate integer: http://stackoverflow.com/questions/14636536/how-to-check-if-a-variable-is-an-integer-in-javascript

function calculate(){
    var inputA = document.getElementById("inputA").value;
	var inputB = document.getElementById("inputB").value;
	var answer;
    
    var a = Math.abs(inputA);
    var b = Math.abs(inputB);
    
    if(a === parseInt(a,10) && b == parseInt(b, 10)){
        answer = calcGCD(a,b).toString(10);
    } else {
        answer = "number is not an integer!";
    }
    console.log("a :" + a + "b :" + b);
	
	document.getElementById("inputAnswer").value = answer;
}

function calcGCD(x,y){       
    while (y != 0) {
        //console.log("WHILE: " + "x: " + x + "y: " +y);
		var r = x % y;
        console.log("r : " + r);
		x = y;
        console.log("x : " + x);
		y = r;
        console.log("y : " + y);
	}
   
	return x;

}