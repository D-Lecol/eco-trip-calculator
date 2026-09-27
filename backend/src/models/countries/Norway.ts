import {Country} from "../../interfaces/Country.js";
import {Countries} from "../../enums/Countries.js";

export class Norway implements Country {
    name: string = Countries.NORWAY;

    getElectricCarCo2PerKm(): number {
        return 0.04;
    }

    getTrainCo2Percent(): number {
        return 0.001;
    }
}