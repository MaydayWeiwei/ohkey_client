'use strict';

// Declare app level module which depends on views, and components
var frpromoApp = angular.module('frpromo', [
    'ngRoute',
    'frpromo.apartmentManager',
    'frpromo.test',
    'frpromoServices',
    'myApp.version',
    'ui.bootstrap',
    'ngFileUpload'
]);

frpromoApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/apartmentManager'});
}]);


frpromoApp.constant('settings',{
    backendUrl:"http://localhost:8080/app/"
});
