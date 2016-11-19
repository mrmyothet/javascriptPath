var Task = require('./Task');
var Repo = require('./taskRepository');

var task1 = new Task(Repo.get(1));
task1.complete();

var task2 = new Task({name:'task 2'});
task2.save();
var task3 = new Task({name:'task 3'});
task3.save();
var task4 = new Task({name:'task 4'});
task4.save();

