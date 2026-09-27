import {CarTypes} from "../../../enums/CarTypes.js";
import {CarType} from "../../../interfaces/CarType.js";


export class HybridCarType implements CarType {
    name: CarTypes.HYBRID;

    getCo2Emissions(): number {
        return 0.098;
    }
}