/**
 * Created by xer on 2/6/14.
 */




function  RegBtnCtrl($scope){
        var show = false;
        $scope.on = function(){
            show = true;

        }

        $scope.off = function(){
            show = false;

        }

        $scope.showButton = function(){
            return show;
        }

    };



function FortalezasCtrl($scope){
$scope.fortalezas = [{id: 1}, {id: 2}, {id: 3}];

$scope.addNewFortaleza = function() { /*agrega otra fortaleza al arreglo*/
    var newItemNo = $scope.fortalezas.length+1;
    $scope.fortalezas.push({'id':newItemNo});
};

$scope.showAddFortaleza = function(fortaleza) {
    return fortaleza.id === $scope.fortalezas[$scope.fortalezas.length-1].id;
};

}

function OportunidadesCtrl($scope){
    $scope.oportunidades = [{id:1}, {id:2}, {id:3}];

    $scope.addNewOportunidad = function() {
        var newItemNo = $scope.oportunidades.length+1;
        $scope.oportunidades.push({'id':newItemNo});
    };

    $scope.showAddOportunidad = function(oportunidad) {
        return oportunidad.id === $scope.oportunidades[$scope.oportunidades.length-1].id;
    };
}


function DebilidadesCtrl($scope){
    $scope.debilidades = [{id: 1}, {id: 2}, {id: 3}];

    $scope.addNewOportunidad = function() {
        var newItemNo = $scope.debilidades.length+1;
        $scope.debilidades.push({'id':newItemNo});
    };

    $scope.showAddOportunidad = function(debilidad) {
        return debilidad.id === $scope.debilidades[$scope.debilidades.length-1].id;
    };
}

function AmenazasCtrl($scope){
    $scope.amenazas = [{id: 1}, {id: 2}, {id: 3}];

    $scope.addNewOportunidad = function() {
        var newItemNo = $scope.amenazas.length+1;
        $scope.amenazas.push({'id':newItemNo});
    };

    $scope.showAddOportunidad = function(amenaza) {
        return amenaza.id === $scope.amenazas[$scope.amenazas.length-1].id;
    };
}