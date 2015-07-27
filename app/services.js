'use strict';

/* Services */

var frpromoServices = angular.module('frpromoServices', ['ngResource']);


frpromoServices.factory('Apte', ['$resource','settings',
    function($resource,settings){
        return $resource(settings.backendUrl+'admin/apartment/:aptId',{aptId:'@aptId'}, {
            'update': {method:'PUT', params: {newStatus: '@newStatus'}}
        });
    }]);


frpromoServices.factory('Bar', ['$resource','settings',
    function($resource,settings){
        return $resource(settings.backendUrl+'admin/bar/:barId',{barId:'@barId'},{
            'update':{method:'PUT', params: {aptId:'@aptId'}}
        });
    }]);

frpromoServices.factory('Code', ['$resource','settings',
    function($resource,settings){
        return $resource(settings.backendUrl+'admin/code/:codeId',{codeId:'@id'},{
            'save': {method: 'POST', params: {startDate: '@startDate', endDate: '@endDate', aptId: '@aptId'}},
            'update': {method: 'PUT', params: {generateCode: '@generateCode'}}
        });
    }]);


frpromoServices.factory('Login', ['$resource','settings','routeProvider', function($resource,settings, $routeProvider){
    return $resource(settings.backendUrl+'admin/user/:userId', { userId:'@id' }, {
        'save': {
            method: 'POST',
            isArray: false,
            params: {login: '@login', password: '@password'},
            transformResponse: function (data, header) {
                var wrapped = angular.fromJson(data);
                angular.forEach(wrapped.items, function (item, idx) {
                    wrapped.items[idx] = new Job(item);
                });

                if (wrapped === "success"){
                    $routeProvider.redirectTo('/apartmentManager');
                }
                return wrapped;
            }
        }
    });
    }]);
