import {Transport} from "../../interfaces/Transport";
import {Country} from "../../interfaces/Country";

export class Car implements Transport{
    name: string;
    passengers: number;

    getCo2EmissionsPerKm(): number {
        let result = 0;


        if (this.passengers > 0) result /= this.passengers;
        return result;
    }
}