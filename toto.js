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

function getRandom() {
	for (i = 0; i <= 12; i++) {
		console.log(returnRandom());
	}
	return;
}
console.log(getRandom());
