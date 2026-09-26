import {Transport} from "../../interfaces/Transport";

export class Bike implements Transport{
    name: string;

    getCo2EmissionsPerKm(): number {
        return 0;
    }
}