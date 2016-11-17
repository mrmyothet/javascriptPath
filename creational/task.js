// Constructor 

function Task(name){
	this.name = name;
	this.completed = false;
	
	this.complete = function(){
		console.log('completing task: ' + this.name);
		this.completed = true;
	}
	
	this.save = function(){
		console.log('saving task: ' + this.name);
	}
}


// Prototypes 
/*
function Task(name){
	this.name = name;
	this.completed = false;
}

// ClassName.prototype.methodName = function(arguments){};
Task.prototype.complete = function(){
	console.log('completing task: ' + this.name);
	this.completed = true;
};

Task.prototype.save = function(){
	console.log('saving task: ' + this.name);
};
*/

/*
var task1 = new Task('create a demo for constructors');
var task2 = new Task('create a demo for modules');
var task3 = new Task('create a demo for singletons');
var task4 = new Task('create a demo for prototypes');
var task5 = new Task('create a demo for modules');
var task6 = new Task('create a demo for singletons');
var task7 = new Task('create a demo for prototypes');
var task8 = new Task('create a demo for modules');
var task9 = new Task('create a demo for singletons');
var task10 = new Task('create a demo for prototypes');

task1.complete();
task2.save();
task3.save();
task4.save();
task5.save();
task6.save();
task7.save();
task8.save();
task9.save();
task10.save();
*/

module.exports = Task;