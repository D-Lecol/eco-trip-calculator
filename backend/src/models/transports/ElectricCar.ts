import {Transport} from "../../interfaces/Transport";
import {Country} from "../../interfaces/Country";
import {Car} from "./Car";

export class ElectricCar extends Car{
    name: string;
    country: Country;
}