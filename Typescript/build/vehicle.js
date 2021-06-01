export class Car {
    constructor(name, speed, gears) {
        this.name = name;
        this.speed = speed;
        this.gears = gears;
    }
    applyBrakes(decrement) {
        this.speed -= decrement;
    }
}
// const car1: Car = new Car("Audi", 250, 6);
// console.log("car1", car1);
// car1.applyBrakes(160);
// console.log("car1", car1);
