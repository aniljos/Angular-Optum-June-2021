var Car = /** @class */ (function () {
    function Car(name, speed, gears) {
        this.name = name;
        this.speed = speed;
        this.gears = gears;
    }
    Car.prototype.applyBrakes = function (decrement) {
        this.speed -= decrement;
    };
    return Car;
}());
var car1 = new Car("Audi", 250, 6);
console.log("car1", car1);
car1.applyBrakes(160);
console.log("car1", car1);
