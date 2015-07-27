'use strict';

// Declare app level module which depends on views, and components
var frpromoApp = angular.module('frpromo', [
    'ngRoute',
    'frpromo.apartmentManager',
    'frpromo.barManager',
    'frpromo.codeManager',
    'frpromo.barGestion',
    'frpromo.loginManager',
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

/*frpromoApp.config(function ($stateProvider) {

    $stateProvider
        .state('welcome', {
            url: '/welcome',
            data: {
                requireLogin: false
            }
        })
        .state('app', {
            abstract: true,
            data: {
                requireLogin: true // this property will apply to all children of 'app'
            }
        })
        .state('app.dashboard', {
            // child state of `app`
            // requireLogin === true
        })

});*/


frpromoApp.constant('settings',{
    backendUrl:"http://localhost:8080/app/"
});
