"use strict"

// Default parameters & Spread Operators

// Default parameters

function greet($greeting='Hello World'){
	console.log("Called: greeting($greeting='Hello World')")
	console.log($greeting)
}

// Spread Operators
let args1=[1,2,3];
let args2=[4,5,6];
function test(){
	console.log("Called test()");
	console.log(args1);
	console.log(args2);
}