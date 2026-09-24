import {describe, expect, it} from 'vitest';
import calculatorService, {Co2Labels} from '../src/calculatorService.js';
import {BikeTrip} from "../src/models/BikeTrip";
import {WalkTrip} from "./WalkTrip";
import {ThermalCarTrip} from "../src/models/ThermalCarTrip";
import {ElectricCarTrip} from "../src/models/ElectricCarTrip";
import {Countries} from "../src/enums/Countries";

describe('Calculator Service', () => {
  describe('New Bike transport', () => {
    it('should return 0 CO2 for bike trips', () => {
      const bikeTrip = new BikeTrip(10)
      const result = calculatorService.newCalculate(bikeTrip);

      expect(result.co2).toBe(0);
      expect(result.label).toBe(Co2Labels.GREEN);
    });

    it('should return 0 CO2 for walking', () => {
      const walkTrip = new WalkTrip(10)
      const result = calculatorService.newCalculate(walkTrip);

      expect(result.co2).toBe(0);
      expect(result.label).toBe(Co2Labels.GREEN);
    })
  })

  describe('Car transport with thermal engine', () => {
    it('should calculate CO2 for thermal car with 1 passenger', () => {
      const thermalCarTrip = new ThermalCarTrip(100, 1, Countries.FRANCE)
      const newResult = calculatorService.newCalculate(thermalCarTrip);

      expect(newResult.co2).toBe(19.2);
      expect(newResult.label).toBe(Co2Labels.RED);
    });

    it('should divide CO2 by number of passengers', () => {
      const thermalCarTrip = new ThermalCarTrip(100, 4, Countries.FRANCE)
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
      const result = calculatorService.calculate(200, 'train', null, 1, 'France');

      expect(result.co2).toBe(0.64);
      expect(result.label).toBe('GREEN');
    });

    it('should calculate higher CO2 for train in Poland', () => {
      const result = calculatorService.calculate(200, 'train', null, 1, 'Poland');

      expect(result.co2).toBe(13.8);
      expect(result.label).toBe('ORANGE');
    });
  });

  describe('Bus transport', () => {
    it('should calculate CO2 for bus trips', () => {
      const result = calculatorService.calculate(100, 'bus', null, 1, null);

      expect(result.co2).toBe(10.4);
      expect(result.label).toBe('ORANGE');
    });
  });
});
