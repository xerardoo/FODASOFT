/**
 * Created by xer on 1/31/14.
 */
//Define an angular module for our app
var navApp = angular.module('navApp', []);

//Define Routing for app
//Uri /AddNewOrder -> template AddOrder.html and Controller AddOrderController
//Uri /ShowOrders -> template ShowOrders.html and Controller AddOrderController
navApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/INICIO', {
                templateUrl: 'views/inicio.html',
                controller: 'InicioController'
            }).
            when('/FODA', {
                templateUrl: 'views/FODA.html',
                controller: 'FODAController'
            }).
            when('/AYUDA', {
                templateUrl: 'views/ayuda.html',
                controller: 'AyudaController'
            }).
            otherwise({
                redirectTo: '/INICIO'
            });
    }]);


navApp.controller('FODAController', function($scope) {

    $scope.FODA='FODA';
    $scope.message='Analisis FODA';
});


navApp.controller('InicioController', function($scope) {

/*aqui mi controlador de inicio*/

});

navApp.controller('AyudaController',function($scope){
    $scope.mensaje='Esta es mi ayuda';
});



navApp.controller('authCtrl',['$scope',function authCtrl($scope) {
    $scope.auth ="<div>auth</div>";
}]);





