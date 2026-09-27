import {TripDto} from "../DTOs/TripDto.js";
import {TripBuilder} from "../builders/TripBuilder.js";
import {TransportFactory} from "./TransportFactory.js";
import {Trip} from "../models/Trip.js";

export class TripFactory {
    static createFromDto(dto: TripDto): Trip {
        return new TripBuilder()
            .distance(dto.distance)
            .transport(TransportFactory.createFromDto(dto));
    }
}