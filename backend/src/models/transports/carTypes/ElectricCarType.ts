import {Country} from "../../../interfaces/Country.js";
import {CarTypes} from "../../../enums/CarTypes.js";
import {CarType} from "../../../interfaces/CarType.js";

export class ElectricCarType implements CarType {
    name: CarTypes.ELECTRIC;
    country: Country;

    getCo2Emissions(): number {
        return this.country.getElectricCarCo2PerKm();
    }
}