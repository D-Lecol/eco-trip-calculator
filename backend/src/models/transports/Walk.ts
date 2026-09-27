import {Transport} from "../../interfaces/Transport.js";
import {Transports} from "../../enums/Transports.js";

export class Walk implements Transport {
    name: string = Transports.WALK;

    getCo2EmissionsPerKm(): number {
        return 0;
    }
}