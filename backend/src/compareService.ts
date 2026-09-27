import calculatorService from './calculatorService.js';
import {Trip} from "./models/Trip";

class CompareService {
    compare(trip1: Trip, trip2: Trip): any {
        const r1 = calculatorService.calculate(trip1);

        const r2 = calculatorService.calculate(trip2);

        var winner = '';
        if (r1.co2 < r2.co2) {
            winner = 'trip1';
        } else if (r2.co2 < r1.co2) {
            winner = 'trip2';
        } else {
            winner = 'equal';
        }

        return {
            trip1: {co2: r1.co2, label: r1.label},
            trip2: {co2: r2.co2, label: r2.label},
            winner: winner,
            difference: Math.abs(r1.co2 - r2.co2)
        };
    }
}

export default new CompareService();
