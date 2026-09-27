import {TripDto} from "../DTOs/TripDto.js";
import {Car} from "../models/transports/Car.js";
import {CarBuilder} from "../builders/CarBuilder.js";
import {CarTypeFactory} from "./CarTypeFactory.js";

export class CarFactory {
    static createFromDto(dto: TripDto): Car {
        return new CarBuilder()
            .passengers(dto.passengers)
            .carType(CarTypeFactory.createFromDto(dto))
    }
}