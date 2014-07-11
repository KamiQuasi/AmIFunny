(function () {
    'use strict';
    
    angular.module('AmIFunny', [
        'ngRoute',
        'login'
    ])
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider
                .otherwise('/', {
                    redirectTo: '/'
                });
        }]);
}());