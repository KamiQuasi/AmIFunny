(function () {
    'use strict';
    
    angular.module('login', [])
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider
                .when('/login', {
                    templateUrl: 'components/login/login.html',
                    controller: 'LoginCtrl'
                });
        }])
    
        .controller('LoginCtrl', [function () {}]);
}());