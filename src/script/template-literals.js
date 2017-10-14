"use strict"

// Template literals

let name="John";
function makeUpperCase(word){
	return word.toUpperCase();
}
let template = 
`<h3>${makeUpperCase("hello")}, ${name}! </h3>
<p>This is a simple template in JavaScript</p>`;
function showTemplate(){
	document.getElementById("template").innerHTML=template;
}
