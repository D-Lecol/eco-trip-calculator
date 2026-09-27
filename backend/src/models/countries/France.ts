import {Country} from "../../interfaces/Country.js";
import {Countries} from "../../enums/Countries.js";

export class France implements Country {
    name: string = Countries.FRANCE;

    getElectricCarCo2PerKm(): number {
        return 0.012;
    }

    getTrainCo2Percent(): number {
        return 0.0032;
    }
}