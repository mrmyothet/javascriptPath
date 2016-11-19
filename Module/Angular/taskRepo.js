(function () {
    var app = angular.module('taskManager');

    var taskRepo = function ($http) {

        var get = function (id) {
            console.log('getting task: ' + id);
            return {
                name: 'new task queried from database'
            }
        }

        var save = function (task) {
            console.log('saving task: ' + task.name + ' to the db');
        }

        return {
            get: get,
            save: save
        }
    }

    app.service('TaskRepository', taskRepo);
}())