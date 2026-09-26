import {Transport} from "../../interfaces/Transport";

export class HybridCar implements Transport{
    name: string;

    getCo2EmissionsPerKm(): number {
        return 0.098;
    }
}