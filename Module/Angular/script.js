(function () {
    var app = angular.module('taskManager', []);

    var taskController = function (Task, TaskRepository) {
        var ctrl = this;

        ctrl.tasks = [
            new Task(TaskRepository.get(1)),
            new Task({
                name: 'Task 2',
                completed: false
            })
        ];
    };

    app.controller('taskCtrl', taskController)

}())