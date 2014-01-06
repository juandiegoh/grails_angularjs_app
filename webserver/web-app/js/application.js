var configParamsApp = angular.module('configParamsApp', []);

configParamsApp.controller('ConfigParamsController', ['$scope', '$http',
    function ($scope, $http) {
    // bindable list of configs
    $scope.configs = []

    // load all configs, copying to the "configs" list on success
    $scope.loadConfigs = function() {
        $http.get("configParams/list").success( function( data ) {
            $scope.configs = data
        })
    }

    $scope.loadConfigs()
    }]);
//var configParamsApp = angular.module('configParamsApp', []);
//
////Define Routing for app
////Uri /AddNewOrder -> template add_order.html and Controller AddOrderController
////Uri /ShowOrders -> template show_orders.html and Controller AddOrderController
//configParamsApp.config(['$routeProvider',
//    function($routeProvider) {
//        $routeProvider.
//            when('/showConfigs', {
//                templateUrl: 'templates/show_configs.html',
//                controller: 'ShowConfigController'
//            }).
//            otherwise({
//                redirectTo: '/showConfigs'
//            });
//    }]);
//
//
//configParamsApp.controller('ShowConfigController', function($scope) {
//
//    $scope.message = 'This is Add new order screen';
//
//});
//
//
//var configParamsApp = angular.module('configParamsApp', []);
//
//configParamsApp.controller('ConfigParamsController', ['$scope', '$http', function ($scope, $http) {
//
//    // bindable list of configs
//    $scope.configs = []
////        {active:true, instanceAvailables:'e1', mainScopeFunctionality:'FACTORY', quantity:1000, selectionId:0, selectionType:'MOD'},
////        {active:true, instanceAvailables:'e1', mainScopeFunctionality:'CLOSER', quantity:1000, selectionId:0, selectionType:'MOD'},
////        {active:true, instanceAvailables:'e1', mainScopeFunctionality:'CLOSER', quantity:1000, selectionId:1, selectionType:'MOD'}
////    ]
//
//    // load all configs, copying to the "configs" list on success
//    $scope.loadConfigs = function() {
//        $http.get("configParams/list").success( function( data ) {
//            $scope.configs = data
//        })
//    }
//
//    $scope.loadConfigs()
//}]);
