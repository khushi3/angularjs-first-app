var app = angular.module("myApp", ["ngRoute"]);

app.controller("mainController",["$scope",function($scope) {
$scope.title= "my first Angularjs App";
 $scope.book = "The Alchemist";
 $scope.author = "Paulo Coelho";
}]);
app.controller("homeController",["$scope",function($scope){
	$scope.title="i am in home page";
}]);
app.controller("aboutController", ["$scope",function ($scope){
	$scope.title="i am in about page";
}]);
app.controller("contactController",["$scope",function($scope){
	$scope.title="i m in contact page";
}]);
app.config(function($routeProvider){
	$routeProvider
	.when("/", {
		templateUrl : "pages/home.html",
		controller :  "mainController"
	})
	.when("/about",{
		templateUrl : "pages/about.html",
		controller: "aboutController"
	})
	.when("/contact",{
		templateUrl: "contact.html",
		controller: "contactController"
	});
	
})