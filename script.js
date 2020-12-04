const key = ["c", "c#", "d", "d#", "e", "f", "f#", "g", "g#", "a", "a#", "b"];
const scale = ["ionian", "aeolian", "dorian", "phrygian", "lydian", "mixolydian", "locrian"];
const timeSig = ["2", "4", "6", "8", "16"];
const timeSig2 = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16"];

async function getRndStrategy() {
	const data = await fetch('http://localhost:8080/strategies.json')
	const json = await data.json()

	return json[getRndInteger(0, json.length)];
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomKey(){
	const rndKey = key[getRndInteger(0, 11)];
	return rndKey;
	console.log(teoria.note(`${rndKey}`).scale('ionian').simple());
}

function randomScale(){
	console.log(scale[getRndInteger(0, 6)]);
	return scale[getRndInteger(0, 6)];
}

function randomTimeSig(){
	var sig1 = timeSig[getRndInteger(0, 4)];
	var sig2 = timeSig2[getRndInteger(0, 15)];
	return (`${sig2}/${sig1}`);
}

function randomTempo(){
	console.log(getRndInteger(50, 150));
	return getRndInteger(50, 150);
}

document.addEventListener("DOMContentLoaded", function(){
	document.getElementById('strategy-button').onclick = async function () {
		document.getElementById('strategy-text').innerHTML = await getRndStrategy();
}
})

document.addEventListener("DOMContentLoaded", function(){
	document.getElementById('key-button').onclick = function () {
		document.getElementById('key-text').innerHTML = randomKey();
}
})

document.addEventListener("DOMContentLoaded", function(){
	document.getElementById('scale-button').onclick = function () {
		document.getElementById('scale-text').innerHTML = randomScale();
}
})

document.addEventListener("DOMContentLoaded", function(){
	document.getElementById('timesig-button').onclick = function () {
		document.getElementById('timesig-text').innerHTML = randomTimeSig();
}
})

document.addEventListener("DOMContentLoaded", function(){
	document.getElementById('tempo-button').onclick = function () {
		document.getElementById('tempo-text').innerHTML = randomTempo();
}
})

document.addEventListener("DOMContentLoaded", function(){
	document.getElementById('random-button').onclick = function () {
		document.getElementById('key-text').innerHTML = randomKey();
		document.getElementById('scale-text').innerHTML = randomScale();
		document.getElementById('timesig-text').innerHTML = randomTimeSig();
		document.getElementById('tempo-text').innerHTML = randomTempo();
}
})
