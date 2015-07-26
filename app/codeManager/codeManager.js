'use strict';
angular.module('frpromo.codeManager', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/codeManager', {
            templateUrl: 'codeManager/index.html',
            controller: 'codeManagerCtrl'
        });
    }])

    .controller('codeManagerCtrl', ['$scope', 'Upload', 'settings', 'Code', 'Apte','$modal', function ($scope, Upload, settings, Code,Apte, $modal) {

        $scope.code = {
            startDate: "",
            endDate: ""
        };

        $scope.codeList = Code.query();

        $scope.aptList = Apte.query();

        $scope.createCode = function () {

            Code.save({startDate: $scope.code.startDate, endDate: $scope.code.endDate, aptId: $scope.apartmentInfo.id});
            $scope.codeList.push($scope.code);
            $scope.code = {
                startDate: "",
                endDate: ""
            };

        };

        $scope.deleteQuestion = function (codeItem) {

            if (confirm("确定删除此问题:" + codeItem.description)) {
                Apte.delete({questionId: codeItem.id});
                var index = $scope.codeList.indexOf(codeItem);
                $scope.codeList.splice(index, 1);
            }

        };

    }]);


