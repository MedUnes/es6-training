"use strict"

// Classes and inheritance
class User{
	constructor(username,email,password){
		console.log("running: User class constructor()")
		this.username=username;
		this.email=email;
		this.password=password;
	}
	static countUsers(){
		console.log("running: countUsers()")
		console.log("There are 50 users");
	}
	register(){
		console.log("User:"+this.username+" is now registered!");
	}
}
class Member extends User{
	constructor(username,email,password,memberPackage){
		console.log("running: Member class constructor()")
		super(username,email,password);
		this.memberPackage=memberPackage;
	}
	getPackage(){
		console.log("running: getPackage()")
		console.log(this.username+" is subscribed to the "+this.memberPackage+" package.");
	}
}
