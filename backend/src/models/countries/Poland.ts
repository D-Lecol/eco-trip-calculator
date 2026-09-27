import {Country} from "../../interfaces/Country.js";
import {Countries} from "../../enums/Countries.js";

export class Poland implements Country {
    name: string = Countries.POLAND;

    getElectricCarCo2PerKm(): number {
        return 0.078;
    }

    getTrainCo2Percent(): number {
        return 0.069;
    }
}