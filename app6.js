var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope) {
	$scope.nums = [
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9]
	];
});