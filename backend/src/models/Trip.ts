import {Transport} from "../interfaces/Transport.js";

export class Trip {
    transport: Transport;
    distance: number;

    public calculateCo2(): number {
        return this.distance * this.transport.getCo2EmissionsPerKm();
    }
}