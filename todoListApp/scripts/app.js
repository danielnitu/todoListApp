/*jshint esversion: 6 */

var app = angular.module('todoListApp', []);

// autofocus input when label is clicked
app.directive('focusInput', ($timeout) => {
    return function(scope, element, attr){

        // Add a watch on the `focus-input` attribute.
        // Whenever the `focus-input` statement changes this callback function will be executed.
        scope.$watch(attr.focusInput, function(value){
            // If the `focus-input` statement evaluates to `true`
            // then use jQuery to set focus on the element.
            if (value){
                $timeout(function(){
                    element.focus();
                });
            }
        });

    };
});