import {Country} from "../../interfaces/Country.js";
import {Countries} from "../../enums/Countries.js";

export class Germany implements Country {
    name: string = Countries.GERMANY;

    getElectricCarCo2PerKm(): number {
        return 0.045;
    }

    getTrainCo2Percent(): number {
        return 0.032;
    }
}