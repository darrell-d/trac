(function () {

    var app = angular.module('trac', []);

    app.controller('ButtonController', function ($scope) {
        $scope.showNewProject = true;
        $scope.showNewTask = true;
        
        $scope.newProject = function () {
            console.log('New Project');
            $scope.showNewTask = false;
        };

        $scope.newTask = function () {
            console.log('New Task');
            $scope.showNewProject = false;
        };

    });


})();