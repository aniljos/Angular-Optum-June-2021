interface Vehicle{

    name: string;
    speed: number;
    gears?: number;

    applyBrakes(decrement: number): void;
}

export class Car implements Vehicle{

    name: string;
    speed: number;
    gears?: number;

    constructor(name: string, speed: number, gears: number){
        this.name = name;
        this.speed = speed;
        this.gears = gears;
    }

    applyBrakes(decrement: number): void {
        this.speed -= decrement;
    }
}

// const car1: Car = new Car("Audi", 250, 6);
// console.log("car1", car1);

// car1.applyBrakes(160);
// console.log("car1", car1);