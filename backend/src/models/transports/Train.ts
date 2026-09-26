import {Transport} from "../../interfaces/Transport";
import {Country} from "../../interfaces/Country";

export class Train implements Transport{
    name: string;
    country: Country;

    getCo2EmissionsPerKm(): number {
        return 0;
    }
}