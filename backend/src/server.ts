import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import calculatorService from './calculatorService.js';
import compareService from './compareService.js';
import historyService from './historyService.js';
import {pathToFileURL} from "node:url";
import {TripFactory} from "./factories/TripFactory.js";
import {TripDto} from "./DTOs/TripDto.js";
import {CompareTripsDto} from "./DTOs/CompareTripsDto.js";

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/api/calculate', (req: any, res: any) => {
    const trip = TripFactory.createFromDto(req.body as TripDto)
    const co2Report = calculatorService.calculate(trip)

    const tripCo2Report = historyService.addTrip(trip, co2Report)

    res.json({
        success: true,
        data: {
            co2: tripCo2Report.co2Report.co2,
            label: tripCo2Report.co2Report.label,
            id: tripCo2Report.id,
        }
    });
});

app.post('/api/compare', (req: any, res: any) => {
    const compareTripsDto = req.body as CompareTripsDto;

    const result = compareService.compare(
        TripFactory.createFromDto(compareTripsDto.trip1),
        TripFactory.createFromDto(compareTripsDto.trip2),
    );

    res.json({
        success: true,
        ...result
    });
});

app.get('/api/history', (_red: any, res: any) => {
    const history = historyService.getAll();
    res.json({
        success: true,
        data: history,
        count: history.length
    });
});

app.get('/api/stats', (_red: any, res: any) => {
    const stats = historyService.getStats();
    res.json({
        success: true,
        ...stats
    });
});

export {app, calculatorService, compareService, historyService};

// ESM way to check if file is being run directly
const isMainModule = import.meta.url === pathToFileURL(process.argv[1]).href;

if (isMainModule) {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}
