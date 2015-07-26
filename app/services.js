'use strict';

/* Services */

var frpromoServices = angular.module('frpromoServices', ['ngResource']);


frpromoServices.factory('Apte', ['$resource','settings',
    function($resource,settings){
        return $resource(settings.backendUrl+'admin/apartment/:aptId',{aptId:'@aptId'}, {
            'update': {method:'PUT', params: {newStatus: '@newStatus'}},
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
            'save': {method: 'POST', params: {startDate: '@startDate', endDate: '@endDate', aptId: '@aptId'}}
        });
    }]);
