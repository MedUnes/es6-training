"use strict"

// Immediately resolved promise

// API AJAX Fetching 

function getData(method,url){
	return new Promise((resolve,reject)=>{
		var xhr = new XMLHttpRequest();
		xhr.open(method,url);
		xhr.onload=function(){
			// on Success
			if (this.status>=200 && this.status<300) {
				resolve(xhr.response);
			} else {
				reject({
					status:this.status,
					statusText:xhr.statusText
				});
			}
		};
		xhr.onerror=function(){
			reject({
				status:this.status,
				statusText:xhr.statusText
			});
		};
		xhr.send();
	});
}

function fetch() {
	getData("GET","http://jsonplaceholder.typicode.com/todos").then(function(data){
	let todos=JSON.parse(data);
	let output='';
	for(let todo of todos) {
		output+=`
			<li>
				<span class="label label-primary">Title: ${todo.title}</span>
				${todo.completed?'<span class="label label-success">complete</span>':'<span class="label label-danger">not complete</span>'}
			</li>
		`;
	}
	document.getElementById("todoList").innerHTML=output;
	}).catch(function(err){
	console.log(err);
	});
}