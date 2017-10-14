"use strict"

// New String & Number Methods

// String functions
function testSatrtsWith(main,start,output){
	let result =`<kbd>startsWith()</kbd> ${main.startsWith(start)?"TRUE":"FALSE"}`;
	document.getElementById(output).innerHTML=result;
}

function testEndsWith(main,start,output){
	let result =`<kbd>endsWith()</kbd> ${main.endsWith(start)?"TRUE":"FALSE"}`;
	document.getElementById(output).innerHTML=result;
}

function testIncludes(main,start,output){
	let result =`<kbd>includes()</kbd> ${main.includes(start)?"TRUE":"FALSE"}`;
	document.getElementById(output).innerHTML=result;
}

// Number Function

function hexNotation(number){
	console.log(`Hex Notation: ${number}`);
}

function binaryNotation(number){
	console.log(`Binary Notation 0b${number}`);
}

function octalNotation(number){
	console.log(`Octal Notation: 0o${number}`);
}
