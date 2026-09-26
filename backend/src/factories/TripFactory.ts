import {BikeTrip} from "../models/BikeTrip";
import {Transports} from "../enums/Transports";
import {Trip} from "../interfaces/Trip";
import {TripDto} from "../DTOs/TripDto";
import {WalkTrip} from "../models/WalkTrip";
import {TrainTrip} from "../models/TrainTrip";
import {Countries} from "../enums/Countries";
import {CarTrip} from "../interfaces/CarTrip";
import {CarType} from "../enums/CarType";
import {ThermalCarTrip} from "../models/ThermalCarTrip";
import {ElectricCarTrip} from "../models/ElectricCarTrip";
import {HybridCarTrip} from "../models/HybridCarTrip";
import {BusTrip} from "../models/BusTrip";

export class TripFactory {
    static createFromDto(dto: TripDto): Trip{
        switch (dto.transport) {
            case Transports.BIKE: return new BikeTrip();
            case Transports.WALK: return new WalkTrip();
            case Transports.TRAIN: return new TrainTrip(dto.distance, Countries[dto.country]);
            case Transports.CAR: return this.createCarFromDto(dto);
            default: return new BusTrip(dto.distance);
        }
    }

    private static createCarFromDto(dto: TripDto): CarTrip{
        switch (dto.carType) {
            case CarType.THERMAL: return new ThermalCarTrip(dto.distance, dto.passengers);
            case CarType.ELECTRIC: return new ElectricCarTrip(dto.distance, dto.passengers, Countries[dto.country]);
            default: return new HybridCarTrip(dto.distance, dto.passengers);
        }
    }
}