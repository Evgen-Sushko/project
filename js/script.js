"use strict";

let num = 20;
function showFirstMesage(text) {
	console.log("text");
	let num = 10;
	console.log(num);
}

showFirstMesage("hello word");
console.log(num);

function calc(a, b) {
	return (a + b);
}

console.log(calc(4, 3));

function ret() {
	let num = 50;
	return num;
}
const anathe = ret();
console.log(anathe);

const logger = function () {
	console.log("hello");
};
logger();

const calk = (a, b) => {
	console.log("1");
	return (a + b);
}