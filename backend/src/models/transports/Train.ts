import {Transport} from "../../interfaces/Transport.js";
import {Transports} from "../../enums/Transports.js";
import {Country} from "../../interfaces/Country.js";

export class Train implements Transport {
    name: string = Transports.TRAIN;
    country: Country;

    getCo2EmissionsPerKm(): number {
        return this.country.getTrainCo2Percent();
    }
}