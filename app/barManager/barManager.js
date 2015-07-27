'use strict';
angular.module('frpromo.barManager', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/barManager', {
            templateUrl: 'barManager/index.html',
            controller: 'barManagerCtrl'
        });
    }])

    .controller('barManagerCtrl', ['$scope', 'Upload', 'settings', 'Bar', 'Apte', '$modal', function ($scope, Upload, settings, Bar, Apte, $modal) {

        $scope.bar = {
            barName: "",
            tel: "",
            address: '',
            status: "",
            comment: ""
        };

        $scope.aptList = Apte.query();

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

        $scope.addApartment = function (aa, barItem) {
            Bar.update({barId: barItem.id, aptId: aa.clientName.id});

        };

        $scope.deleteQuestion = function (barItem) {

            if (confirm("确定删除此问题:" + barItem.description)) {
                Apte.delete({barId: barItem.id});
                var index = $scope.barList.indexOf(barItem);
                $scope.barList.splice(index, 1);
            }

        };

    }]);


