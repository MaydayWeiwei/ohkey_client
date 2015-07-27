angular.module('frpromo.loginManager', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/loginManager', {
            templateUrl: 'loginManager/index.html',
            controller: 'LoginCtrl'
        });
    }])
    .controller('LoginCtrl', ['$scope', 'Upload', 'settings', 'Login', function ($scope, Upload, settings, Login) {

        $scope.onLogin = function () {
            console.log('Attempting login with username ' + $scope.vm.username + ' and password ' + $scope.vm.password);

            $scope.result= Login.save({login: $scope.vm.username, password: $scope.vm.password});
            console.log($scope.result);
        };



    }]);