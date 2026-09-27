import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import calculatorService from './calculatorService.js';
import compareService from './compareService.js';
import historyService from './historyService.js';
import {TripFactory} from "./factories/TripFactory";
import {pathToFileURL} from "node:url";
import {TripDto} from "./DTOs/TripDto";

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/api/calculate', (req: any, res: any) => {
  const createdTrip = TripFactory.createFromDto(req.body as TripDto)
  const newResult = calculatorService.newCalculate(createdTrip)

  const newTrip = historyService.addTrip({
    createdTrip,
    co2: newResult.co2,
    label: newResult.label
  })

  res.json({
    success: true,
    data: {
      co2: newResult.co2,
      label: newResult.label,
      id: newTrip.id
    }
  });
});

app.post('/api/compare', (req: any, res: any) => {
  const { trip1, trip2 } = req.body;

  const result = compareService.compare(trip1, trip2);

  res.json({
    success: true,
    ...result
  });
});

app.get('/api/history', (req: any, res: any) => {
  const history = historyService.getAll();
  res.json({
    success: true,
    data: history,
    count: history.length
  });
});

app.get('/api/stats', (req: any, res: any) => {
  const stats = historyService.getStats();
  res.json({
    success: true,
    ...stats
  });
});

export { app, calculatorService, compareService, historyService };

// ESM way to check if file is being run directly
const isMainModule =  import.meta.url === pathToFileURL(process.argv[1]).href;

if (isMainModule) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}
