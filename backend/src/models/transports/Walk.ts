import {Transport} from "../../interfaces/Transport";
import {Transports} from "../../enums/Transports";

export class Walk implements Transport{
    name: string = Transports.WALK;

    getCo2EmissionsPerKm(): number {
        return 0;
    }
}