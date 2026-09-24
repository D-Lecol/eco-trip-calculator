import {Trip} from "../interfaces/Trip";

export class WalkTrip implements Trip {
    constructor() {
    }

    calculateCo2(): number {
        return 0;
    }
}