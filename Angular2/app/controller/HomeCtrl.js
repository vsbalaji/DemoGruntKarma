angular.module('website', ['ngRoute']).controller('HomeCtrl', function ($scope, StateService) {
        $scope.title = 'Home Page';
        $scope.body = 'This is the about home body';

        $scope.message = StateService.getMessage();

        $scope.updateMessage = function (m) {
            StateService.setMessage(m);
        };
    });