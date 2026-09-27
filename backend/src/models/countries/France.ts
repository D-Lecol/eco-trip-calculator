import {Country} from "../../interfaces/Country";
import {Countries} from "../../enums/Countries";

export class France implements Country{
    name: string = Countries.FRANCE;

    getElectricCarCo2PerKm(): number {
        return 0.012;
    }

    getTrainCo2Percent(): number {
        return 0.0032;
    }
}