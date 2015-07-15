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

        $scope.deleteApartment = function (aptItem) {

            if (confirm("Are you sure to delete this apartment?")) {
                Apte.delete({aptId: aptItem.id});
                var index = $scope.apartmentList.indexOf(aptItem);
                $scope.apartmentList.splice(index, 1);
            }

        };

    }]);


