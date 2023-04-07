angular.module('myApp', [])
    .controller('myCtrl', function ($scope) {
        $scope.langs = ['html', 'css', 'js', 'php'];

        $scope.updateLang = function (index) {
            var lang = $scope.langs[index];
            $scope.langs[index] = lang.endsWith('+') ? lang.slice(0, -1) : lang + '+';
        }
    });
