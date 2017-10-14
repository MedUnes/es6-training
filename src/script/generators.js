"use strict"

// Generators

function *g1(){
	console.log("Hello");
	yield "Yield 1 ran..";

	console.log("World!");
	yield "Yield2 ran .."

	return "Returned";
}

var g=g1();