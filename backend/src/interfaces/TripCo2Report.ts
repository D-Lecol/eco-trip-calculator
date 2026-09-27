import {Co2Report} from "../models/Co2Report";
import {Trip} from "../models/Trip.js";

export interface TripCo2Report {
    id: number;
    trip: Trip
    co2Report: Co2Report
    timestamp: Date
}