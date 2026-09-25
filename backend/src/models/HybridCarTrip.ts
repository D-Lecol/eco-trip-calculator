import {CarTrip} from "../interfaces/CarTrip";
import {Countries} from "../enums/Countries";

export class HybridCarTrip implements CarTrip{
    constructor(
        private readonly distance: number,
        private readonly passengers: number
    ){}

    calculateCo2(): number {
        let result = this.distance * 0.098;
        if (this.passengers > 0) result /= this.passengers;
        return result;
    }
}