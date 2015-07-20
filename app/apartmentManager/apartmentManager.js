'use strict';

angular.module('frpromo.apartmentManager', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/apartmentManager', {
            templateUrl: 'apartmentManager/index.html',
            controller: 'apteManagerCtrl'
        });
    }])

    .controller('apteManagerCtrl', ['$scope', 'Upload', 'settings', 'Apte', '$modal', function ($scope, Upload, settings, Apte, $modal) {

        $scope.select_status = ["not live", "available", "unavailable"];

        $scope.apartment = {
            clientName: "",
            tel: "",
            address: '',
            floor: "",
            door: "",
            enterCode: "",
            capacity: "",
            price: "",
            status: $scope.select_status[0],
            comment1: "",
            comment2: ""
        };

        $scope.apte_status=$scope.select_status[0];

        $scope.apartmentList = Apte.query();

        $scope.createApartment = function () {

            Apte.save($scope.apartment);
            $scope.apartmentList.push($scope.apartment);
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

        $scope.updateStatus = function (aptItem) {
            Apte.update ({aptId: aptItem.id, newStatus: aptItem.status});
        };

        $scope.deleteApartment = function (aptItem) {

            if (confirm("Are you sure to delete this apartment?")) {
                Apte.delete({aptId: aptItem.id});
                var index = $scope.apartmentList.indexOf(aptItem);
                $scope.apartmentList.splice(index, 1);
            }

        };

    }]);


