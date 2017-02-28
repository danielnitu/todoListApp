
/*

*** Normally, when you have a server, you'd use this code to inject the template via a directive.
*** This said, Chrome doesn't let you load internal files like this due to safety reasons.
*** So my todos.html is included in index.html
*/
var app = angular.module('todoListApp');

app.directive('todos', function() {
    return {
        templateUrl: 'templates/todos.html',
        controller: 'mainCtrl',
        replace: true
    };
});
