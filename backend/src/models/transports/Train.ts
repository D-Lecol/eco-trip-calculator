import {Transport} from "../../interfaces/Transport";
import {Country} from "../../interfaces/Country";
import {Transports} from "../../enums/Transports";

export class Train implements Transport{
    name: string = Transports.TRAIN;
    country: Country;

    getCo2EmissionsPerKm(): number {
        return this.country.getTrainCo2Percent();
    }
}