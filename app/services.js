'use strict';

/* Services */

var frpromoServices = angular.module('frpromoServices', ['ngResource']);


frpromoServices.factory('Apte', ['$resource','settings',
    function($resource,settings){
        return $resource(settings.backendUrl+'admin/apartment/:aptId',{aptId:'@id'},{
            'update': {method:'PUT'}
        });
    }]);


frpromoServices.factory('Bar', ['$resource','settings',
    function($resource,settings){
        return $resource(settings.backendUrl+'admin/bar/:barId',{barId:'@id'},{
            'update':{method:'PUT'}
        });
    }]);

