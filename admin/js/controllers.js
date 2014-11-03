var searchApp = angular.module('searchApp', []);

searchApp.controller('IndicesCtrl', function ($scope, $http) {
    $http.get('http://localhost:9200/_stats').success(function (data) {
        $scope.indices = [];
        for (var key in data.indices) {
            $scope.indices.push({'name': key});
        }
    });
});