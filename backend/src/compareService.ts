import calculatorService from './calculatorService.js';
import {Trip} from "./models/Trip";
import {CompareReport} from "./interfaces/CompareReport.js";
import {Co2Report} from "./models/Co2Report.js";

class CompareService {
    compare(trip1: Trip, trip2: Trip): CompareReport {
        const co2Report1 = calculatorService.calculate(trip1);

        const co2Report2 = calculatorService.calculate(trip2);

        let winner: string;

        if (co2Report1.co2 < co2Report2.co2) winner = Winner.TRIP1
        else if (co2Report2.co2 < co2Report1.co2) winner = Winner.TRIP2
        else winner = Winner.EQUAL
        
        return {
            trip1: co2Report1,
            trip2: co2Report2,
            winner: winner,
            difference: this.getDifference(co2Report1, co2Report2)
        };
    }

    private getDifference(co2Report1: Co2Report, co2Report2: Co2Report): number {
        return Math.abs(co2Report1.co2 - co2Report2.co2)
    }
}

enum Winner {
    TRIP1 = 'trip1',
    TRIP2 = 'trip2',
    EQUAL = 'equal',
}

export default new CompareService();
