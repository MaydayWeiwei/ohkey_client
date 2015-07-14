'use strict';

angular.module('frpromo.apartmentManager', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/apartmentManager', {
            templateUrl: 'apartmentManager/index.html',
            controller: 'apteManagerCtrl'
        });
    }])

    .controller('apteManagerCtrl', ['$scope', 'Upload', 'settings', 'Apte', '$modal', function ($scope, Upload, settings, Apte, $modal) {

        $scope.apartment = {
            clientName: "",
            tel: "",
            address: '',
            floor: "",
            door: "",
            enterCode: "",
            capacity: "",
            price: "",
            status: "",
            comment1: "",
            comment2: ""
        };

        $scope.barList = Apte.query();

        $scope.createApartment = function () {

            Apte.save($scope.apartment);
            $scope.barList.push($scope.apartment);
            $scope.apartment = {
                clientName: "",
                tel: "",
                address: '',
                floor: "",
                door: "",
                enterCode: "",
                capacity: "",
                price: "",
                status: "",
                comment1: "",
                comment2: ""
            };

        };

        $scope.deleteQuestion = function (apartmentItem) {

            if (confirm("确定删除此问题:" + barItem.description)) {
                Apte.delete({questionId: barItem.id});
                var index = $scope.barList.indexOf(barItem);
                $scope.barList.splice(index, 1);
            }

        };

    }]);


