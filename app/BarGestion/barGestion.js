'use strict';
angular.module('frpromo.barGestion', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/barGestion', {
            templateUrl: 'barGestion/index.html',
            controller: 'barGestionCtrl'
        });
    }])

    .controller('barGestionCtrl', ['$scope', 'Upload', 'settings', 'Code', '$modal', function ($scope, Upload, settings, Code, $modal) {

        $scope.keyInformation = {
            id: "",
            externalKey: ""
        };

        $scope.bargestionList = Code.query();

        $scope.validateCode = function (codeEntered) {

            $scope.keyInformation = Code.update ({generateCode: codeEntered});

        };

        $scope.deleteQuestion = function (bargestionItem) {

            if (confirm("确定删除此问题:" + bargestionItem.description)) {
                Bargestion.delete({questionId: bargestionItem.id});
                var index = $scope.bargestionList.indexOf(bargestionItem);
                $scope.bargestionList.splice(index, 1);
            }

        };

    }]);


