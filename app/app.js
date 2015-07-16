'use strict';

// Declare app level module which depends on views, and components
var frpromoApp = angular.module('frpromo', [
    'ngRoute',
    'frpromo.apartmentManager',
    'frpromo.barManager',
    'frpromo.codeManager',
    'frpromo.test',
    'frpromoServices',
    'myApp.version',
    'ui.bootstrap',
    'ngFileUpload',
    'ui.date'
]);

frpromoApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/apartmentManager'});
}]);


frpromoApp.constant('settings',{
    backendUrl:"http://localhost:8080/app/"
});
