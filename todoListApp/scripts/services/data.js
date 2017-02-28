var app = angular.module('todoListApp');

app.service('dataService', function($http) {

    this.helloDog = function() {
        console.log('Yes, this is dog!');
    };

    this.getTodos = function(cb) {
        $http.get('https://api.myjson.com/bins/d6j71')
        .then(cb);
    };

    this.saveTodo = function(todo) {
        console.log('The "' + todo.name + '" todo has been saved!');
    };

    this.deleteTodo = function(todo) {
        console.log('The "' + todo.name + '" todo has been deleted!');
    };

});