import {Transport} from "../../interfaces/Transport.js";
import {Transports} from "../../enums/Transports.js";
import {CarType} from "../../interfaces/CarType.js";

export class Car implements Transport {
    carType: CarType;
    name: string = Transports.CAR;
    passengers: number;

    getCo2EmissionsPerKm(): number {
        let result = this.carType.getCo2Emissions();

        if (this.passengers > 0) result /= this.passengers;
        return result;
    }
}