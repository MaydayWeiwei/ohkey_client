'use strict';

angular.module('frpromo.test', ['ngRoute', 'ngMessages', 'ui.bootstrap'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/test', {
            templateUrl: 'test/index.html',
            controller: 'TestCtrl'
        });
    }])
    .controller('TestCtrl', ['$scope', '$modal', function ($scope, $modal) {

        $scope.brand = {
            name_fr: 'test12'
        } //we can init the value like this

        $scope.testSubmit = function () {
            console.log("the form will be submitted");
        };

        $scope.test5Items = [
            "data1", "data2", "data3"
        ];

        $scope.testRepeat = function (index) {
            alert(index);
            console.log("index:" + index);
        }

        $scope.changeViewValue = function () {
            console.log("change view = is called");
            $scope.createTestForm.name_fr.$viewValue = 'test';

            //$scope.brand.name_fr='test21' //here we change only the ng-model value but not form value

            // $scope.createTestForm.name_fr = "test12";  It doesn't work
            $scope.createTestForm.name_fr.$render();
            // $scope.createTestForm.name_fr.$commitViewValue(); with commitViewValue the view value will be bouned to the modelvalue
            console.log("The view value of an input field is :" + $scope.createTestForm.name_fr.$viewValue);
            console.log("The model value of an input field is :" + $scope.createTestForm.name_fr.$modelValue);
            console.log("The ng-model value is:" + $scope.brand.name_fr);
            console.log("The ng-model view value" + $scope.brand.name_fr.$viewValue);
            console.log("The ng-model model value" + $scope.brand.name_fr.$modelValue);
        };

        $scope.changeViewValue2 = function () {
            console.log("change view by set view value is called");
            $scope.createTestForm.name_fr.$setViewValue('test321'); //if the viewValue condition is not satisfied the modelvalue won't be updated
            console.log("view value" + $scope.createTestForm.name_fr.$viewValue);
            console.log("model value" + $scope.createTestForm.name_fr.$modelValue);
        };

        $scope.modalAnimationsEnabled = true;
        $scope.showDialog = function () {
            var testModalInstance = $modal.open({
                animation: $scope.modalAnimationsEnabled,
                templateUrl: 'testModalContent.html',
                controller: 'testModalInstanceCtrl',
                resolve: {
                    transferItem: function () {
                        return $scope.testModelData;
                    }
                }
            });

            testModalInstance.result.then(function (data) {
                $scope.dataBacked = data;
            }, function () {
                $log.info('Modal dismissed at: ' + new Date());

            })
        };

        //for ng select
        $scope.values = [{
            id: 1,
            label: 'aLabel',
            subItem: {name: 'aSubItem'}
        }, {
            id: 2,
            label: 'bLabel',
            subItem: {name: 'bSubItem'}
        }];

        $scope.testDate = new Date();

        $scope.dateOptions = {
            startingDay: 1
        };

        $scope.open = function($event) {
            $event.preventDefault();
            $event.stopPropagation();
            $scope.opened = true;
        };

    }])
//end for modals
    .controller('testModalInstanceCtrl', ['$scope', '$modalInstance', 'transferItem', function ($scope, $modalInstance, transferItem) {

        $scope.info = transferItem;

        $scope.ok = function () {
            $modalInstance.close($scope.infoToPutback);
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };

    }]);