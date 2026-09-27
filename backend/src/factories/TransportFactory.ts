import {TripDto} from "../DTOs/TripDto.js";
import {Transport} from "../interfaces/Transport.js";
import {TransportBuilder} from "../builders/TransportBuilder.js";
import {Transports} from "../enums/Transports.js";
import {TrainBuilder} from "../builders/TrainBuilder.js";
import {CountryFactory} from "./CountryFactory.js";
import {CarFactory} from "./CarFactory.js";

export class TransportFactory {
    static createFromDto(dto: TripDto): Transport {
        const transportBuilder = new TransportBuilder()

        switch (dto.transport) {
            case Transports.WALK:
                return transportBuilder.walk()
            case Transports.BIKE:
                return transportBuilder.bike()
            case Transports.BUS:
                return transportBuilder.bus()
            case Transports.TRAIN:
                return transportBuilder
                    .train(new TrainBuilder()
                        .from(CountryFactory.createByName(dto.country)))
            case Transports.CAR:
                return transportBuilder.car(CarFactory.createFromDto(dto))
        }
    }
}