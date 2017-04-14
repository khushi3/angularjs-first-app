var app = angular.module("myApp", []);

app.controller("demoController", function($scope) {
 $scope.book = "The Alchemist";
 $scope.author = "Paulo Coelho";
});