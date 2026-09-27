import {Co2Labels} from "../enums/Co2Labels.js";

export class Co2Report {
    co2: number
    label: string;

    static new(co2: number): Co2Report {
        let co2Report = new Co2Report();
        co2Report.co2 = co2;

        co2Report.label = this.isGood(co2) ? Co2Labels.GREEN
            : co2Report.label = this.isAcceptable(co2) ? Co2Labels.ORANGE : Co2Labels.RED;

        return co2Report;
    }

    private static isGood(co2: number) {
        return co2 < 5
    }

    private static isAcceptable(co2: number) {
        return co2 >= 5 && co2 < 15
    }
}