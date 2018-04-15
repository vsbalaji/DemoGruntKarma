myApp.controller('AboutCtrl', function ($scope, StateService) {
        $scope.title = 'About Page';
        $scope.body = 'This is the about page body';

        $scope.message = StateService.getMessage();

        $scope.updateMessage = function (m) {
            StateService.setMessage(m);
        };
    });

myApp.controller('ExperimentsCtrl', function ($scope, StateService, ExperimentsService) {
        $scope.title = 'Experiments Page';
        $scope.body = 'This is the about experiments body';

        $scope.message = StateService.getMessage();
        $scope.experiments = ExperimentsService.getExperiments();

        $scope.updateMessage = function (m) {
            StateService.setMessage(m);
        };
    });

angular.module('website', ['ngRoute']).controller('HomeCtrl', function ($scope, StateService) {
        $scope.title = 'Home Page';
        $scope.body = 'This is the about home body';

        $scope.message = StateService.getMessage();

        $scope.updateMessage = function (m) {
            StateService.setMessage(m);
        };
    });