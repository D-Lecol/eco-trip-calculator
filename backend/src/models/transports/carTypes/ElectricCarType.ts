import {CarType} from "../../../interfaces/CarType";
import {CarTypes} from "../../../enums/CarTypes";
import {Country} from "../../../interfaces/Country";

export class ElectricCarType implements CarType{
    name: CarTypes.ELECTRIC;
    country: Country;

    getCo2Emissions(): number {
        return this.country.getElectricCarCo2PerKm();
    }
}