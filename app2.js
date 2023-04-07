angular.module('myApp', [])
    .controller('myCtrl', function ($scope) {
        $scope.list = [1, 2, 3, 4, 5];
        $scope.reverseList = function () {
            $scope.list.reverse();
        };
    });