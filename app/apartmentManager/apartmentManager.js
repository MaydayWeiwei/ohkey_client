'use strict';

angular.module('frpromo.apartmentManager', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/apartmentManager', {
            templateUrl: 'apartmentManager/index.html',
            controller: 'apteManagerCtrl'
        });
    }])
    .controller('apteManagerCtrl', ['$scope', 'Upload', 'settings', 'Apte', '$modal', function ($scope, Upload, settings, Apte, $modal) {

        $scope.question = {description: "", optionList: []};
        $scope.addOption = function () {
            $scope.question.optionList.push({description: $scope.question_option_temp});
            $scope.question_option_temp = "";

        };

        $scope.questionList = Apte.query();

        $scope.createQuestion = function () {

            Apte.save($scope.question);
            $scope.questionList.push($scope.question);
            $scope.question = {description: "", optionList: []};
            $scope.question_option_temp = "";
        };

        $scope.deleteQuestion = function (questionItem) {

            if (confirm("确定删除此问题:" + questionItem.description)) {
                Apte.delete({questionId: questionItem.id});
                var index = $scope.questionList.indexOf(questionItem);
                $scope.questionList.splice(index, 1);
            }

        };

    }]);


