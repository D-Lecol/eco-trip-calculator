import {CarType} from "../../../interfaces/CarType";
import {CarTypes} from "../../../enums/CarTypes";

export class ThermalCarType implements CarType{
    name: CarTypes.THERMAL;

    getCo2Emissions(): number {
        return 0.192;
    }
}