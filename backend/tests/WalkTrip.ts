import {Trip} from "../src/interfaces/Trip";

export class WalkTrip implements Trip {
    constructor(private distance: number) {
    }

    calculateCo2(): number {
        return 0;
    }
}