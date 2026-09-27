import {Transport} from "../../interfaces/Transport";
import {Transports} from "../../enums/Transports";

export class Bike implements Transport{
    name: string = Transports.BIKE;

    getCo2EmissionsPerKm(): number {
        return 0;
    }
}