// original code in ECMAScript2015 
/*
'use strict';
class Task {
	constructor(name){
		this.name = name;
		this.completed = false;
	}
	
	complete(){
		console.log('completing task: ' + this.name);
		this.completed = true;
	}
	
	save(){
		console.log('saving task: ' + this.name);
	}
}

var task1 = new Task('create a demo for constructors');
var task2 = new Task('create a demo for modules');
var task3 = new Task('create a demo for singletons');
var task4 = new Task('create a demo for prototypes');

task1.complete();
task2.save();
task3.save();
task4.save();
*/ 

// compiled code using Babel javascript compiler
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Task = exports.Task = function () {
	function Task(name) {
		_classCallCheck(this, Task);

		this.name = name;
		this.completed = false;
	}

	_createClass(Task, [{
		key: 'complete',
		value: function complete() {
			console.log('completing task: ' + this.name);
			this.completed = true;
		}
	}, {
		key: 'save',
		value: function save() {
			console.log('saving task: ' + this.name);
		}
	}]);

	return Task;
}();