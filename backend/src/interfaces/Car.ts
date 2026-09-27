import {Transport} from "./Transport";

export interface Car extends Transport {
    type: string;
    passengers: number;
}