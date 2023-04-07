angular.module('myApp', [])
	.controller('myCtrl', function ($scope) {
		$scope.users = ['Микола', 'Василь', 'Петро'];
		$scope.remainingUsers = ['Аня', 'Валя', 'Маша'];

		$scope.addUser = function () {
			if ($scope.remainingUsers.length > 0) {
				$scope.users.push($scope.remainingUsers.shift());
			}
			if ($scope.remainingUsers.length == 0) {
				$scope.users.sort();
			}
		};
	});
