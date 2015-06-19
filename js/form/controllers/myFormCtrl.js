angular.module("myFormApp")
	.controller("MyFormCtrl", MyFormCtrl);

MyFormCtrl.$inject = ["$scope"];


function MyFormCtrl ($scope) {	
	this.submit = function (data) {
		console.log("submit data: ", data);
		$scope.data = {};
	}
};