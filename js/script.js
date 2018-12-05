function getNumbers() {
	var numbers = {};
	numbers.num1 = parseInt(document.getElementById("n1").value);
	numbers.num2 = parseInt(document.getElementById("n2").value);
	return numbers;
}

function sumNumbers() {
	var numbers = getNumbers();
	var total = (numbers.num1 + numbers.num2);
	return total;
}

function setNumbers() {
	var total = sumNumbers();
	if (isNaN(total)) {
		document.getElementById("result").innerHTML = "solo numeros";
	} else {
		document.getElementById("result").innerHTML = total;
	}	
}