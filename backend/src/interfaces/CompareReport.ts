import {Co2Report} from "../models/Co2Report.js";

export interface CompareReport {
    trip1: Co2Report
    trip2: Co2Report
    winner: string
    difference: number
}