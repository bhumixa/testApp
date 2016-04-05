function userDataService($http, $rootScope){
	var id = '';

	return {
		setId:function(value) {
			id = value;
		},
		getId:function() {
			return id;
		},
	}
}

angular
    .module('test')
    .service('userDataService', userDataService)