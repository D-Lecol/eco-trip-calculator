import {Transport} from "../../interfaces/Transport";

export class Walk implements Transport{
    name: string;

    getCo2EmissionsPerKm(): number {
        return 0;
    }
}