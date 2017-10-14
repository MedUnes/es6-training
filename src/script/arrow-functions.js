"use strict"

function Prefixer(prefix){
	this.prefix=prefix;
}

// Faulty function
Prefixer.prototype.prefixArrayFaulty=function(arr){
	//let that=this; // workaround
	return arr.map(function(x){
		console.log(that.prefix+x);
	});
}

// Workaround function
Prefixer.prototype.prefixArrayWorkaround=function(arr){
	let that=this; // workaround
	return arr.map(function(x){
		console.log(that.prefix+x);
	});
}

// Arrow Functions

Prefixer.prototype.prefixArrayArrow=function(arr){
	return arr.map((x)=>{
		console.log(this.prefix+x);
	});
}

// Simple arrow function (addition)
let add = (a,b)=>{
	let sum=a+b;
	console.log(`a=${a},b=${b},sum=${sum}`);
}

