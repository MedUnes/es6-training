"use strict"

// let & const

// let..
function testVar(){
	console.log("running: testVar()")
	var a=30;
	console.log("a="+a)
	if(true){
		var a=50;
		console.log("inside the condition a="+a)
	}
	console.log("outside the condition a="+a)
}

function testLet(){
	console.log("running: testLet()")
	let a=30;
	console.log("a="+a)
	if(true){
		let a=50;
		console.log("inside the condition a="+a)
	}
	console.log("outside the condition a="+a)
}

// const..
 

function pushColor(color){
	console.log("running: pushColor("+color+")")
	const colors=[];
	colors.push(color);
	console.log(colors);
}
function assignColor(color){
	console.log("running: assignColor("+color+")")
	const colors=[];
	colors=color;
	console.log(colors);
}