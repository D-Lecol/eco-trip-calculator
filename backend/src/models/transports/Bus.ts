import {Transport} from "../../interfaces/Transport";
import {Transports} from "../../enums/Transports";

export class Bus implements Transport{
    name: string = Transports.BUS;

    getCo2EmissionsPerKm(): number {
        return 0.104;
    }
}