import {Transport} from "../../interfaces/Transport.js";
import {Transports} from "../../enums/Transports.js";

export class Bus implements Transport {
    name: string = Transports.BUS;

    getCo2EmissionsPerKm(): number {
        return 0.104;
    }
}