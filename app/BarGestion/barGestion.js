'use strict';
angular.module('frpromo.barGestion', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/barGestion', {
            templateUrl: 'barGestion/index.html',
            controller: 'barGestionCtrl'
        });
    }])

    .controller('barGestionCtrl', ['$scope', 'Upload', 'settings', 'Code', '$modal', function ($scope, Upload, settings, Code, $modal) {

        $scope.bargestion = {
            generatedCode: ""
        };

        $scope.bargestionList = Code.query();

        $scope.createBargestion = function () {

            Code.save($scope.bargestion);
            $scope.bargestionList.push($scope.bargestion);
            $scope.bargestion = {
                generatedCode: ""
            };

        };

        $scope.deleteQuestion = function (bargestionItem) {

            if (confirm("确定删除此问题:" + bargestionItem.description)) {
                Bargestion.delete({questionId: bargestionItem.id});
                var index = $scope.bargestionList.indexOf(bargestionItem);
                $scope.bargestionList.splice(index, 1);
            }

        };

    }]);


