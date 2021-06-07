//creates module
angular.module("app", []);

//Access the module
angular
    .module("app")
    .run(["$rootScope", function($rootScope){

        $rootScope.message = "Hello Scopes";
        console.log("$rootScope: ", $rootScope.$id);

    }])
    .controller("FirstController", ["$scope", function($scope){

        console.log("FC $scope: ", $scope.$id);
        console.log("FC $scope parent: ", $scope.$parent.$id);
        $scope.user = {name: "Anil", location: "Mumbai"}
        $scope.$watch("user.name", function(newValue, oldValue){

            console.log("user.name: ", newValue, oldValue);
            if(newValue === ""){
                $scope.user.location = "";
            } 
        });
    }])
    .controller("SecondController", ["$scope", "$interval", function($scope, $interval){

        console.log("SC $scope: ", $scope.$id);
        console.log("SC $scope parent: ", $scope.$parent.$id);
        $scope.clock = new Date().toLocaleTimeString();

        // setInterval(function(){
        //     $scope.clock = new Date().toLocaleTimeString();
        //     //starts a digest loop(change detection)--max 10 iterations
             
        //     $scope.$digest(); // detect changes in the current scope and the child scopes
        //     //$scope.$apply();    // detect changes in all the  scopes

        // }, 1000);

        $interval(function(){
            $scope.clock = new Date().toLocaleTimeString();
        }, 1000)

    }])
    .controller("ThirdController", [function(){

        this.count = 100;
        this.message = "This is a controllerAs syntax"

    }])



