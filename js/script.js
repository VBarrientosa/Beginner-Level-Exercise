var num1 = 0, num2 = 0, total = 0;

function getNumbers() {
	num1 = parseInt(document.getElementById("n1").value);
	num2 = parseInt(document.getElementById("n2").value);
}

function sumNumbers() {
	getNumbers();
	total = (num1 + num2);
}

function setNumbers() {
	sumNumbers();
	if (isNaN(num1) === true || isNaN(num2) == true) {
		document.getElementById("result").innerHTML = "solo numeros";
	} else {
		document.getElementById("result").innerHTML = total;
	}	
}