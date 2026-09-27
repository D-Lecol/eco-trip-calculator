import {Trip} from "../models/Trip";
import {Transport} from "../interfaces/Transport";
import {TripDto} from "../DTOs/TripDto";

export class TripBuilder {
    distance(distance: number): TransportStep{
        const trip = new Trip();
        trip.distance = distance;
        return new Steps(trip)
    }

    static fromDto(dto: TripDto){

    }
}

class Steps
    implements TransportStep
{
    constructor(private readonly trip: Trip){

    }

    transport(transport: Transport): Trip {
        this.trip.transport = transport;
        return this.trip;
    }
}

interface TransportStep{
    transport(transport: Transport): Trip;
}