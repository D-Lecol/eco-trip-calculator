import {TripCo2Report} from "./interfaces/TripCo2Report.js";
import {Co2Report} from "./models/Co2Report.js";
import {Trip} from "./models/Trip.js";


class HistoryService {
    data: TripCo2Report[] = [];
    counter: number = 0;

    addTrip(trip: Trip, co2Report: Co2Report): TripCo2Report {
        this.counter++;
        const tripCo2Report = {
            id: this.counter,
            trip,
            co2Report,
            timestamp: new Date()
        };
        this.data.push(tripCo2Report);
        return tripCo2Report;
    }

    getAll(): TripCo2Report[] {
        return this.data;
    }

    getStats(): any {
        let total = 0;
        let avg = 0;

        for (const element of this.data) {
            total = total + element.co2Report.co2;
        }

        if (this.data.length > 0) {
            avg = total / this.data.length;
        }

        return {
            totalTrips: this.data.length,
            totalCO2: total,
            averageCO2: avg,
            lastCalculation: this.data.length > 0 ? this.data[this.data.length - 1].timestamp : null
        };
    }

    clear(): void {
        this.data = [];
        this.counter = 0;
    }
}

export default new HistoryService();
