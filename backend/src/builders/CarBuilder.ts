import {Car} from "../models/transports/Car.js";
import {CarType} from "../interfaces/CarType.js";

export class CarBuilder {
    passengers(passengers: number): CarTypeStep {
        const car = new Car();
        car.passengers = passengers;
        return new Steps(car)
    }
}

class Steps implements CarTypeStep {
    constructor(private readonly car: Car) {

    }

    carType(carType: CarType): Car {
        this.car.carType = carType;
        return this.car;
    }
}

interface CarTypeStep {
    carType(carType: CarType): Car;
}

