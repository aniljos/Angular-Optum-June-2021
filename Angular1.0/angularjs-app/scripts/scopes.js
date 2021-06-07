//creates module
angular.module("app", []);

//Access the module
angular
    .module("app")
    .run(["$rootScope", function($rootScope){

        $rootScope.message = "Hello Scopes";

    }])
    .controller("FirstController", ["$scope", function($scope){

        $scope.user = {name: "Anil", location: "Mumbai"}

    }])
    .controller("SecondController", ["$scope", function($scope){

        $scope.clock = new Date().toLocaleTimeString();

    }])



