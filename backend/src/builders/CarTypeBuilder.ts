import {CarType} from "../interfaces/CarType.js";
import {ThermalCarType} from "../models/transports/carTypes/ThermalCarType.js";
import {HybridCarType} from "../models/transports/carTypes/HybridCarType.js";
import {Country} from "../interfaces/Country.js";
import {ElectricCarType} from "../models/transports/carTypes/ElectricCarType.js";

export class CarTypeBuilder {

    thermal(): CarType {
        return new ThermalCarType();
    }

    hybrid(): CarType {
        return new HybridCarType();
    }

    electric(country: Country): CarType {
        const electricCarType = new ElectricCarType();
        electricCarType.country = country;
        return electricCarType;
    }
}