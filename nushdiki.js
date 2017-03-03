// Fit ha!

var fit = ["Фьить-", "Жили у бабуси два весёлых гуся. Один серый, другой белый, ", "Не бывает некрасивых надувных женщин, ", "Ещё не вечер, ", "Что вы хотите от нашей эстрады, "];
var ha = ["ХА!", "оба голубые!", "бывают слабые легкие.", "а уже как утром.", "если настоящие мужчины играют в хоккей."];

function getRandomInt(max) {
  	return Math.floor(Math.random() * (max + 1));
}

function random_nushdik() {
	return fit[getRandomInt(fit.length - 1)] + ha[getRandomInt(ha.length - 1)];
}
