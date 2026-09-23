import {Trip} from "../interfaces/Trip";

export class BikeTrip implements Trip {
    constructor(private distance: number) {
    }

    calculateCo2(): number {
        return 0;
    }
}

