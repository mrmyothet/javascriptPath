// var task={};
/*
var task = Object.create(Object.prototype);
task.title = "Task Title";
task.description = "Task Description";
console.log(task.title);
*/

/*
var task = {
	title : 'My Title', 
	description : 'My Description'
};
task.toString = function(){
		return this.title + ' ' + this.description;
}

console.log(task.toString());
*/

////////// Define Property Demo //////////

var task = {
	title : 'My Title', 
	description: 'My Description'
};
Object.defineProperty(task, 'toString', {
	value: function(){
		return this.title + ' ' + this.description;
	}, 
	writable:false,
	enumerable:false,
	configurable:false
});

// everything is assignable in javascript
task.toString = 'Hi';
// now our toString function breaks, it's not a function now. it is a string.
// we got an error when running 'node task.js' command
// so we need to set writable attribute to false

// writable:false;

// After changing writable to false, assigning task.toString='Hi' does not work and we got no error

// console.log(task.toString()); // My Title My Description
//console.log(task);
/*
{title: 'My Title', 
 description: 'My Description',
 toString: [Function: value]}
*/

//console.log(Object.keys(task));
// ['title', 'description', 'toString']

// now we don't want to show toString to others
// so we have to set enumerable to false;
// after setting enumerable attribute of toString property to false
// we got ['title', 'description']

// now someone can redefine 'enumerable' to true like this 
/*
Object.defineProperty(task, 'toString', {
	enumerable:true
})
*/

//console.log(Object.keys(task));
// ['title', 'description', 'toString']

// to prevent this, we have to set configurable attribute to false
// after setting to false
// it will show the error : Cannot redefine property : toString

////////// Inheritance Demo //////////

var urgentTask = Object.create(task);
Object.defineProperty(urgentTask, 'toString', {
	value:function(){
		return this.title + ' is urgent now';
	},
	writable: true,
	enumerable: true,
	configurable: true
});

console.log(urgentTask.toString());
