

{/* <hello></hello> */}
angular
    .module("app", [])
    .component("hello", {
        template: `<h4>Hello Component</h4>`
    })
    .component("counter", {
        templateUrl: 'templates/counter.html',
        controllerAs: "model",
        bindings: {
            description: "@"
        },
        controller: function(){
            this.count = 10

            this.increment = function(){
                this.count++;
            }

            this.decrement = function(){
                this.count--;
            }
        }
    })