// Fit ha!

var fit = ["Fit ", "Жили у бабуси два весёлых гуся. Один серый, другой белый, "];
var ha = ["HA!", "оба голубые!"];

function getRandomInt(max) {
  	return Math.floor(Math.random() * (max + 1));
}

function random_nushdik(playSound) {
	playSound();
	return fit[getRandomInt(fit.length - 1)] + ha[getRandomInt(ha.length - 1)];
}
