import {Transport} from "../../interfaces/Transport.js";
import {Transports} from "../../enums/Transports.js";

export class Bike implements Transport {
    name: string = Transports.BIKE;

    getCo2EmissionsPerKm(): number {
        return 0;
    }
}