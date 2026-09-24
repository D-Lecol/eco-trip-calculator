import {CarTrip} from "../interfaces/CarTrip";

export class ThermalCarTrip implements CarTrip {
    constructor(
        private readonly distance: number,
        private readonly passengers: number,
        private readonly country: string
    ) {}


    calculateCo2(): number {
        let result = this.distance * 0.192;
        if (this.passengers > 0) result /= this.passengers;
        return result;
    }

}