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

        $scope.apartmentList = Bar.query();

        $scope.createBar = function () {

            Bar.save($scope.bar);
            $scope.apartmentList.push($scope.bar);
            $scope.bar = {
                barName: "",
                tel: "",
                address: '',
                status: "",
                comment: ""
            };

        };

        $scope.deleteQuestion = function (barItem) {

            if (confirm("确定删除此问题:" + aptetem.description)) {
                Apte.delete({questionId: aptetem.id});
                var index = $scope.apartmentList.indexOf(aptetem);
                $scope.apartmentList.splice(index, 1);
            }

        };

    }]);


