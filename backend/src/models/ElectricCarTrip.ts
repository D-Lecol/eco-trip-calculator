import {Trip} from "../interfaces/Trip";
import {Countries} from "../enums/Countries";
import {CarTrip} from "../interfaces/CarTrip";

export class ElectricCarTrip implements CarTrip {
    constructor(
        private readonly distance: number,
        private readonly passengers: number,
        private readonly country: Countries
    ) {}

    calculateCo2(): number {
        let result = 0;
        switch (this.country) {
            case 'France':
                result = this.distance * 0.012;
                break;
            case 'Germany':
                result = this.distance * 0.045;
                break;
            case 'Poland':
                result = this.distance * 0.078;
                break;
            default:
                result = this.distance * 0.04;
                break;
        }

        if (this.passengers > 0) result /= this.passengers;
        return result;
    }

}