import {Trip} from "./models/Trip";
import {Co2Report} from "./models/Co2Report.js";

class CalculatorService {
    calculate(trip: Trip): Co2Report {
        const result = trip.calculateCo2()
        return Co2Report.new(result)
    }
}

export default new CalculatorService();
