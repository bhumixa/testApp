function MainCtrl($location ) {
	
};

function editDataCtrl($scope, $modalInstance, $timeout, $rootScope, $stateParams, $state, userDataService){
	
	$scope.id = userDataService.getId()

	

	$scope.submit = function(){
		if($scope.id != 'new'){
			alert('edit')
		}else{
			alert('new')
		}
	}

	$scope.cancel = function () {
        $modalInstance.close();
    };
}



function dashboardCtrl ($scope, $rootScope, $state, $http, $timeout, $modal, userDataService) {
	/*$scope.myData = [{name: "Moroni", age: 50},
                 {name: "Tiancum", age: 43},
                 {name: "Jacob", age: 27},
                 {name: "Nephi", age: 29},
                 {name: "Enos", age: 34}];
    $scope.gridOptions = { data: 'myData' };*/
	$scope.new =  function(){
		userDataService.setId('new')
		var modalInstance = $modal.open({
        	templateUrl: '/edit',
        	controller: editDataCtrl
   		});

	}

	$scope.edit =  function(id){
		userDataService.setId(id)
		var modalInstance = $modal.open({
        	templateUrl: '/edit',
        	controller: editDataCtrl
   		});
	}
}


angular
    .module('test')
    .controller('MainCtrl', MainCtrl)
    .controller('dashboardCtrl', dashboardCtrl)
  
    