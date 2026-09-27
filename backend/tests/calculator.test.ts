import {describe, expect, it} from 'vitest';
import calculatorService, {Co2Labels} from '../src/calculatorService.js';
import {BikeTrip} from "../src/models/BikeTrip";
import {WalkTrip} from "../src/models/WalkTrip";
import {ThermalCarTrip} from "../src/models/ThermalCarTrip";
import {ElectricCarTrip} from "../src/models/ElectricCarTrip";
import {Countries} from "../src/enums/Countries";
import {TrainTrip} from "../src/models/TrainTrip";
import {BusTrip} from "../src/models/BusTrip";
import {TripBuilder} from "../src/builders/TripBuilder";
import {Transports} from "../src/enums/Transports";
import {TransportBuilder} from "../src/builders/TransportBuilder";
import {CarBuilder} from "../src/builders/CarBuilder";
import {ThermalCarType} from "../src/models/transports/carTypes/ThermalCarType";

describe('Calculator Service', () => {
  describe('New Bike transport', () => {
    it('should return 0 CO2 for bike trips', () => {
      const bikeTrip = new TripBuilder()
          .distance(0)
          .transport(new TransportBuilder().bike())

      const result = calculatorService.newCalculate(bikeTrip);

      expect(result.co2).toBe(0);
      expect(result.label).toBe(Co2Labels.GREEN);
    });

    it('should return 0 CO2 for walking', () => {
      const walkTrip = new TripBuilder()
          .distance(O)
          .transport(new TransportBuilder().bike())

      const result = calculatorService.newCalculate(walkTrip);

      expect(result.co2).toBe(0);
      expect(result.label).toBe(Co2Labels.GREEN);
    })
  })

  describe('Car transport with thermal engine', () => {
    it('should calculate CO2 for thermal car with 1 passenger', () => {
      const thermalCarTrip = new TripBuilder()
          .distance(100)
          .transport(new TransportBuilder()
              .car(new CarBuilder()
                  .passengers(1)
                  .carType(new ThermalCarType())
              )
          )

      const newResult = calculatorService.newCalculate(thermalCarTrip);

      expect(newResult.co2).toBe(19.2);
      expect(newResult.label).toBe(Co2Labels.RED);
    });

    it('should divide CO2 by number of passengers', () => {
      const thermalCarTrip = new ThermalCarTrip(100, 4)
      const newResult = calculatorService.newCalculate(thermalCarTrip);

      expect(newResult.co2).toBe(4.8);
      expect(newResult.label).toBe(Co2Labels.GREEN);
    });
  });

  describe('Car transport with electric engine', () => {
    it('should calculate lower CO2 for electric car in France', () => {
      const electricCarTrip = new ElectricCarTrip(100, 1, Countries.FRANCE)
      const newResult = calculatorService.newCalculate(electricCarTrip);

      expect(newResult.co2).toBe(1.2);
      expect(newResult.label).toBe(Co2Labels.GREEN);
    });

    it('should calculate higher CO2 for electric car in Poland', () => {
      const electricCarTrip = new ElectricCarTrip(100, 1, Countries.POLAND)
      const newResult = calculatorService.newCalculate(electricCarTrip);

      expect(newResult.co2).toBe(7.8);
      expect(newResult.label).toBe(Co2Labels.ORANGE);
    });
  });

  describe('Train transport', () => {
    it('should calculate low CO2 for train in France', () => {
      const trainTrip = new TrainTrip(200, Countries.FRANCE)
      const newResult = calculatorService.newCalculate(trainTrip);

      expect(newResult.co2).toBe(0.64);
      expect(newResult.label).toBe(Co2Labels.GREEN);
    });

    it('should calculate higher CO2 for train in Poland', () => {
      const trainTrip = new TrainTrip(200, Countries.POLAND)
      const newResult = calculatorService.newCalculate(trainTrip);

      expect(newResult.co2).toBe(13.8);
      expect(newResult.label).toBe(Co2Labels.ORANGE);
    });
  });

  describe('Bus transport', () => {
    it('should calculate CO2 for bus trips', () => {
      const busTrip = new BusTrip(100)
      const newResult = calculatorService.newCalculate(busTrip);

      expect(newResult.co2).toBe(10.4);
      expect(newResult.label).toBe(Co2Labels.ORANGE);
    });
  });
});
