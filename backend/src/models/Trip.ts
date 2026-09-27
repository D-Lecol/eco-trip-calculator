import {Transport} from "../interfaces/Transport";
import {TripBuilder} from "../builders/TripBuilder";

export class Trip{
    transport: Transport;
    distance: number;

    public calculateCo2(): number{
        return this.distance * this.transport.getCo2EmissionsPerKm();
    }

    static builder(): TripBuilder{
        return new TripBuilder();
    }
 }