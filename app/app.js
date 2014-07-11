(function () {
    'use strict';
    
    angular.module('AmIFunny', ['ngRoute'])
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider
                .when('/login', {
                    templateUrl: 'components/login/login.html'
                });
        }]);
}());