myApp.controller('ExperimentsCtrl', function ($scope, StateService, ExperimentsService) {
        $scope.title = 'Experiments Page';
        $scope.body = 'This is the about experiments body';

        $scope.message = StateService.getMessage();
        $scope.experiments = ExperimentsService.getExperiments();

        $scope.updateMessage = function (m) {
            StateService.setMessage(m);
        };
    });