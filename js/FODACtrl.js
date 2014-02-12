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
$scope.fortalezas = [{id: 'fortaleza1'}, {id: 'fortaleza2'}, {id: 'fortaleza3'}];

$scope.addNewFortaleza = function() { /*agrega otra fortaleza al arreglo*/
    var newItemNo = $scope.fortalezas.length+1;
    $scope.fortalezas.push({'id':'fortaleza'+newItemNo});
};

$scope.showAddFortaleza = function(fortaleza) {
    return fortaleza.id === $scope.fortalezas[$scope.fortalezas.length-1].id;
};

}

function OportunidadesCtrl($scope){
    $scope.oportunidades = [{id: 'oportunidad1'}, {id: 'oportunidad2'}, {id: 'oportunidad3'}];

    $scope.addNewOportunidad = function() {
        var newItemNo = $scope.oportunidades.length+1;
        $scope.oportunidades.push({'id':'oportunidad'+newItemNo});
    };

    $scope.showAddOportunidad = function(oportunidad) {
        return oportunidad.id === $scope.oportunidades[$scope.oportunidades.length-1].id;
    };
}


function DebilidadesCtrl($scope){
    $scope.debilidades = [{id: 'debilidad1'}, {id: 'debilidad2'}, {id: 'debilidad3'}];

    $scope.addNewOportunidad = function() {
        var newItemNo = $scope.debilidades.length+1;
        $scope.debilidades.push({'id':'debilidad'+newItemNo});
    };

    $scope.showAddOportunidad = function(debilidad) {
        return debilidad.id === $scope.debilidades[$scope.debilidades.length-1].id;
    };
}

function AmenazasCtrl($scope){
    $scope.amenazas = [{id: 'amenaza1'}, {id: 'amenaza2'}, {id: 'amenaza3'}];

    $scope.addNewOportunidad = function() {
        var newItemNo = $scope.amenazas.length+1;
        $scope.amenazas.push({'id':'amenaza'+newItemNo});
    };

    $scope.showAddOportunidad = function(amenaza) {
        return amenaza.id === $scope.amenazas[$scope.amenazas.length-1].id;
    };
}