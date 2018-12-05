var numbers = {
	num1: 0,
	num2: 0,
	total: 0
}

function getNumbers(nums) {
	numbers.num1 = parseInt(document.getElementById("n1").value);
	numbers.num2 = parseInt(document.getElementById("n2").value);
	return numbers;
}

function sumNumbers() {
	getNumbers();
	numbers.total = (numbers.num1 + numbers.num2);
	return numbers;
}

function setNumbers() {
	sumNumbers();
	if (isNaN(numbers.num1)||isNaN(numbers.num2)) {
		document.getElementById("result").innerHTML = "solo numeros";
	} else {
		document.getElementById("result").innerHTML = numbers.total;
	}	
}