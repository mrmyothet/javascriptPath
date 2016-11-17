// regular structure for angular 
// getting objects from other apis 
/*
(function(){
	var app = angular.module('taskManager', []);
	
	var taskController = function(){
		
		var ctrl = this;
		ctrl.tasks = [
			{name:'task 1'},
			{name:'task 2', completed:true}
		];
		
		this.complete = function(item){
			console.log('completing task: ' + ctrl.tasks[item].name);
			ctrl.tasks[item].completed=true;
		}
	};
	
	app.controller('taskCtrl', taskController)
}());
*/

// gettting objects from task.js
(function(){
	var app = angular.module('taskManager', []);
	
	var taskController = function(Task){
		
		var ctrl = this;
		ctrl.tasks = [
			new Task({name:'task 1'}),
			new Task({name:'task 2', completed:false})
		];
		
		/*
		this.complete = function(item){
			console.log('completing task: ' + ctrl.tasks[item].name);
			ctrl.tasks[item].completed=true;
		}
		*/
	};
	
	app.controller('taskCtrl', taskController)
}());
