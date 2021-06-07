//create a module
var module = angular.module("app", []);

//provider injections
module.config(function(){
    console.log("module config")
})

//similar to the main methods
module.run(function($rootScope){
    console.log("module run");
    $rootScope.teams = ["MI", "CSK", "RCB", "KKR"];
})

//Manual bootstrap
//angular.bootstrap(document, ["app"]);
// angular
//     .bootstrap(document.getElementById("thebody"), ["app"]);

//AutoBootstrap
//   <body id="thebody" ng-app="app">

module.controller("MainController", function($scope){
    console.log("In the MainController");
    $scope.message = "Hello Controller";
});
