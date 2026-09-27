import {CarType} from "../interfaces/CarType";
import {ThermalCarType} from "../models/transports/carTypes/ThermalCarType";
import {ElectricCarType} from "../models/transports/carTypes/ElectricCarType";
import {HybridCarType} from "../models/transports/carTypes/HybridCarType";
import {Country} from "../interfaces/Country";

export class CarTypeBuilder{

    thermal(): CarType{
        return new ThermalCarType();
    }

    hybrid(): CarType{
        return new HybridCarType();
    }

    electric(country: Country): CarType{
        const electricCarType = new ElectricCarType();
        electricCarType.country = country;
        return electricCarType;
    }
}