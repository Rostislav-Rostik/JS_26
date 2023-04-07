var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope) {
    $scope.numbers = [4, 1, 3, 2, 5];
    $scope.sortList = function () {
        $scope.numbers.sort(function (a, b) { return a - b });
    };
});