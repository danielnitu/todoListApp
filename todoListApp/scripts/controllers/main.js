var app = angular.module('todoListApp');

app.controller('mainCtrl', function($scope, $timeout, dataService) {

    $scope.helloDog = dataService.helloDog;

    $scope.detectChange = function() {
        console.log('Input changed!');
    };

    dataService.getTodos(function(res) {
        $scope.todos = res.data;
    });

    $scope.addTodo = function() {
        var todo = {name: ''};
        $scope.todos.unshift(todo);
    };

    $scope.saveTodo = function(todo) {
        dataService.saveTodo(todo);
    };

    $scope.deleteTodo = function(todo, index) {
        dataService.deleteTodo(todo);
        $scope.todos.splice(index, 1);
    };

    $scope.deleteIfEmpty = function(todo, index) {
        if (todo.name === '') {
            $scope.deleteTodo(todo, index);
        }
    };

});