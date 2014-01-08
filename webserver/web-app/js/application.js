var configParamsApp = angular.module('configParamsApp', ['ngRoute']);

configParamsApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/showConfigs', {templateUrl: 'templates/list.html',   controller: 'ConfigParamsController'}).
        when('/newConfig', {templateUrl: 'templates/new.html', controller: 'ConfigParamsController'}).
        when('/showConfig/:configId', {templateUrl: 'templates/show.html', controller: 'ConfigParamsController'}).
        otherwise({redirectTo: '/showConfigs'});
}]);

configParamsApp.controller('ConfigParamsController', ['$scope', '$http', '$log',
    function ($scope, $http, $log) {
    // bindable list of configs
    $scope.configs = []

    // load all configs, copying to the "configs" list on success
    $scope.loadConfigs = function() {
        $http.get({method: 'GET', url: 'http://localhost:8080/webserver/configParams/list'})
            .success( function( data ) {
                $scope.configs = data
            })
            .error(function(data, status, headers, config) {
                $log.log(data)
                $log.log(status)
                $log.log(headers)
                $log.log(config)
            });
        // $scope.configs = [{"class":"com.meli.configuration.ConfigParams","id":1,"active":true,"instanceAvailables":"e19","mainScopeFunctionality":"FACTORY","quantity":1001,"selectionId":0,"selectionType":"MOD"},{"class":"com.meli.configuration.ConfigParams","id":2,"active":true,"instanceAvailables":"e1","mainScopeFunctionality":"CLOSER","quantity":1000,"selectionId":0,"selectionType":"MOD"},{"class":"com.meli.configuration.ConfigParams","id":3,"active":true,"instanceAvailables":"e1","mainScopeFunctionality":"CLOSER","quantity":1000,"selectionId":1,"selectionType":"MOD"}]
    }

    $scope.loadConfigs()
    }]);
