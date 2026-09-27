import {TripDto} from "../DTOs/TripDto.js";
import {CarType} from "../interfaces/CarType.js";
import {CarTypeBuilder} from "../builders/CarTypeBuilder.js";
import {CarTypes} from "../enums/CarTypes.js";
import {CountryFactory} from "./CountryFactory.js";

export class CarTypeFactory {
    static createFromDto(dto: TripDto): CarType {
        const carTypeBuilder = new CarTypeBuilder();

        switch (dto.carType) {
            case CarTypes.THERMAL:
                return carTypeBuilder.thermal()
            case CarTypes.HYBRID:
                return carTypeBuilder.hybrid()
            case CarTypes.ELECTRIC:
                return carTypeBuilder.electric(CountryFactory.createByName(dto.country))
        }
    }
}