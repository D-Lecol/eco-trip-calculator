import {Trip} from "../models/Trip.js";
import {Transport} from "../interfaces/Transport.js";

export class TripBuilder {
    distance(distance: number): TransportStep {
        const trip = new Trip();
        trip.distance = distance;
        return new Steps(trip)
    }
}

class Steps
    implements TransportStep {
    constructor(private readonly trip: Trip) {

    }

    transport(transport: Transport): Trip {
        this.trip.transport = transport;
        return this.trip;
    }
}

interface TransportStep {
    transport(transport: Transport): Trip;
}