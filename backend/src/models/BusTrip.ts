import {Trip} from "../interfaces/Trip";

export class BusTrip implements Trip{
    constructor(private readonly distance: number) {

    }

    calculateCo2(): number {
        return this.distance * 0.104;
    }
}