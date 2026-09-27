import {Co2Labels} from "../enums/Co2Labels.js";

export class Co2Report {
    co2: number
    label: string;

    static new(co2: number): Co2Report {
        let co2Report = new Co2Report();
        co2Report.co2 = co2;

        if (this.isGood(co2)) co2Report.label = Co2Labels.GREEN
        else if (this.isAcceptable(co2)) co2Report.label = Co2Labels.ORANGE
        else co2Report.label = Co2Labels.RED

        return co2Report;
    }

    private static isGood(co2: number) {
        return co2 < 5
    }

    private static isAcceptable(co2: number) {
        return co2 >= 5 && co2 < 15
    }
}