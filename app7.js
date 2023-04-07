var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope) {
	$scope.workers = {
		'Україна': ['Київ', 'Львів'],
		'Польща': ['Варшава', 'Лодзь'],
		'Великобританія': ['Лондон', 'Манчестер']
	};
});