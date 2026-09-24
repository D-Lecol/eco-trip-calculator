import {Countries} from "../enums/Countries";
import {Trip} from "../interfaces/Trip";

export class TrainTrip implements Trip{
    constructor(
        private readonly distance: number,
        private readonly country: Countries
    ) {}

    calculateCo2(): number {
        let result = 0;
        switch (this.country) {
            case 'France':
                result = this.distance * 0.0032;
                break;
            case 'Germany':
                result = this.distance * 0.032;
                break;
            case 'Poland':
                result = this.distance * 0.069;
                break;
            case 'Norway':
                result = this.distance * 0.001;
                break;
            default:
                result = this.distance * 0.041;
                break;
        }
        return result;
    }



}