function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}

function returnRandom() {
	if (getRandomInt(100) <= 50) {
		return 1;
	} else if (getRandomInt(100) > 50 && getRandomInt(3) <= 80) {
		return 2;
	} else {
		return 0;
	}
}

var result = [];
function getRandom2() {
	for (i = 0; i <= 4; i++) {
		result.push(returnRandom());
	}
	document.getElementById("result2").innerHTML = result;
	result = [];
}

function removeAll2() {
	document.getElementById("result2").innerHTML = [];
}
