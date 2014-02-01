/**
 * Created by xer on 1/31/14.
 */

/*modulo para controlar dinamicamente la navbar*/
var moduleNav= angular.module('FODASOFT',[])
    .config(function($routerProvider){

    $routeProvider.
        when('/Index',{
            template:'../views/Index.html',
            controller:'IndexController'
        }).
        when('/Analisis_FODA',{
            template:'../views/Analisis_FODA.html',
            controller:'FODAController'
        })
});

/*controlador de la pagina de Index*/
moduleNav.controller('IndexController', function($scope,$location){

    }
)
