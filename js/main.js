(function () {

    var app = angular.module('trac', ['ngAnimate']);

    app.controller('ButtonController', function ($scope) {
        $scope.showNewProject = true;
        $scope.showNewTask = true;
        
        $scope.newProject = function () {
            $scope.showNewTask = false;
        };

        $scope.newTask = function () {
            $scope.showNewProject = false;
        };

    });


})();