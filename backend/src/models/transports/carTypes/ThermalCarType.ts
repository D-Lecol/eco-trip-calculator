import {CarTypes} from "../../../enums/CarTypes.js";
import {CarType} from "../../../interfaces/CarType.js";


export class ThermalCarType implements CarType {
    name: CarTypes.THERMAL;

    getCo2Emissions(): number {
        return 0.192;
    }
}