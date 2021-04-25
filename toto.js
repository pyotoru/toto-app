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

var array = [];
function getRandom() {
	for (i = 0; i <= 12; i++) {
		array.push(returnRandom());
	}
	var result = array;
	document.getElementById("result").innerHTML = result;
}
