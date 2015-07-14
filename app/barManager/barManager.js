'use strict';

angular.module('frpromo.barManager', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/barManager', {
            templateUrl: 'barManager/index.html',
            controller: 'barManagerCtrl'
        });
    }])

    .controller('barManagerCtrl', ['$scope', 'Upload', 'settings', 'Bar', '$modal', function ($scope, Upload, settings, Bar, $modal) {

        $scope.bar = {
            clientName: "",
            tel: "",
            address: '',
            status: "",
            comment: ""
        };

        $scope.barList = Bar.query();

        $scope.createBar = function () {

            Bar.save($scope.bar);
            $scope.barList.push($scope.bar);
            $scope.bar = {
                barName: "",
                tel: "",
                address: '',
                status: "",
                comment: ""
            };

        };

        $scope.deleteQuestion = function (barItem) {

            if (confirm("确定删除此问题:" + barItem.description)) {
                Apte.delete({questionId: barItem.id});
                var index = $scope.barList.indexOf(barItem);
                $scope.barList.splice(index, 1);
            }

        };

    }]);


