var testString = "";
function reversal() {
	testString= document.getElementById("one").value;
	var y = [];
	for (var i =0;i<testString.length; i++) {
		y.push(testString[i]);
	}
	y.reverse();
	var z = y.join("");
	document.getElementById("two").innerHTML = z;
	return z;
}

function alphabits() {
	testString= document.getElementById("one").value;
	var y = [];
	for (var i =0;i<testString.length; i++) {
		y.push(testString[i]);
	}
	y.sort();
	var z = y.join("");
	document.getElementById("three").innerHTML = z;
	return z;
}

function palindrome() {
	testString= document.getElementById("one").value;
	if (document.getElementById("one").value==="") {
		
		return false;	
	}
	else if (testString === reversal()) {
		document.getElementById("four").innerHTML = "It's a palindrome!";
	}
	else {
		document.getElementById("four").innerHTML = "";
	}
	
}

function check() {

		if (document.getElementById("one").value==="") {
			alert("Enter a value first!");
			document.getElementById("two").innerHTML="";
			document.getElementById("three").innerHTML=""
			document.getElementById("four").innerHTML=""
			document.getElementById("one").focus();
			return false;
		}
		else if (document.getElementById("one").value.match(/[^a-z]+/g)!==null) {
			document.getElementById("one").value=
				document.getElementById("one").value.slice(0,(document.getElementById("one").value.length-1));	
			alert("ONLY USE TEXT!");
			document.getElementById("one").focus();
		}
		
	
}
document.getElementById("one").onkeydown = enter;
	

function enter(e){
//var code = (e.keyCode ? e.keyCode : e.which);
//e.preventDefault();
if(e.keyCode == 13) { //Enter keycode
 
 reversal();
 alphabits();
 palindrome();
 check();
}
}