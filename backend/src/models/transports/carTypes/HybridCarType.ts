import {CarType} from "../../../interfaces/CarType";
import {CarTypes} from "../../../enums/CarTypes";

export class HybridCarType implements CarType{
    name: CarTypes.HYBRID;

    getCo2Emissions(): number {
        return 0.098;
    }
}