import {describe, expect, it} from 'vitest';
import calculatorService from '../src/calculatorService.js';
import {TripBuilder} from "../src/builders/TripBuilder.js";
import {TransportBuilder} from "../src/builders/TransportBuilder.js";
import {Co2Labels} from "../src/enums/Co2Labels.js";
import {CarBuilder} from "../src/builders/CarBuilder.js";
import {CarTypeBuilder} from "../src/builders/CarTypeBuilder.js";
import {France} from "../src/models/countries/France.js";
import {Poland} from "../src/models/countries/Poland.js";
import {TrainBuilder} from "../src/builders/TrainBuilder.js";


describe('Calculator Service', () => {
    describe('New Bike transport', () => {
        it('should return 0 CO2 for bike trips', () => {
            const trip = new TripBuilder()
                .distance(0)
                .transport(new TransportBuilder().bike())

            const result = calculatorService.calculate(trip);

            expect(result.co2).toBe(0);
            expect(result.label).toBe(Co2Labels.GREEN);
        });

        it('should return 0 CO2 for walking', () => {
            const trip = new TripBuilder()
                .distance(0)
                .transport(new TransportBuilder().bike())

            const result = calculatorService.calculate(trip);

            expect(result.co2).toBe(0);
            expect(result.label).toBe(Co2Labels.GREEN);
        })
    })

    describe('Car transport with thermal engine', () => {
        it('should calculate CO2 for thermal car with 1 passenger', () => {
            const trip = new TripBuilder()
                .distance(100)
                .transport(new TransportBuilder()
                    .car(new CarBuilder()
                        .passengers(1)
                        .carType(new CarTypeBuilder().thermal())
                    )
                )

            const newResult = calculatorService.calculate(trip);

            expect(newResult.co2).toBe(19.2);
            expect(newResult.label).toBe(Co2Labels.RED);
        });

        it('should divide CO2 by number of passengers', () => {
            const trip = new TripBuilder()
                .distance(100)
                .transport(new TransportBuilder()
                    .car(new CarBuilder()
                        .passengers(4)
                        .carType(new CarTypeBuilder().thermal())
                    )
                )

            const newResult = calculatorService.calculate(trip);

            expect(newResult.co2).toBe(4.8);
            expect(newResult.label).toBe(Co2Labels.GREEN);
        });
    });

    describe('Car transport with electric engine', () => {
        it('should calculate lower CO2 for electric car in France', () => {
            const trip = new TripBuilder()
                .distance(100)
                .transport(new TransportBuilder()
                    .car(new CarBuilder()
                        .passengers(1)
                        .carType(new CarTypeBuilder().electric(new France()))
                    )
                )

            const newResult = calculatorService.calculate(trip);

            expect(newResult.co2).toBe(1.2);
            expect(newResult.label).toBe(Co2Labels.GREEN);
        });

        it('should calculate higher CO2 for electric car in Poland', () => {
            const trip = new TripBuilder()
                .distance(100)
                .transport(new TransportBuilder()
                    .car(new CarBuilder()
                        .passengers(1)
                        .carType(new CarTypeBuilder().electric(new Poland()))
                    )
                )
            const newResult = calculatorService.calculate(trip);

            expect(newResult.co2).toBe(7.8);
            expect(newResult.label).toBe(Co2Labels.ORANGE);
        });
    });

    describe('Train transport', () => {
        it('should calculate low CO2 for train in France', () => {
            const trip = new TripBuilder()
                .distance(200)
                .transport(new TransportBuilder()
                    .train(new TrainBuilder().from(new France()))
                )

            const newResult = calculatorService.calculate(trip);

            expect(newResult.co2).toBe(0.64);
            expect(newResult.label).toBe(Co2Labels.GREEN);
        });

        it('should calculate higher CO2 for train in Poland', () => {
            const trip = new TripBuilder()
                .distance(200)
                .transport(new TransportBuilder()
                    .train(new TrainBuilder().from(new Poland()))
                )

            const newResult = calculatorService.calculate(trip);

            expect(newResult.co2).toBe(13.8);
            expect(newResult.label).toBe(Co2Labels.ORANGE);
        });
    });

    describe('Bus transport', () => {
        it('should calculate CO2 for bus trips', () => {
            const trip = new TripBuilder()
                .distance(100)
                .transport(new TransportBuilder()
                    .bus()
                )

            const newResult = calculatorService.calculate(trip);

            expect(newResult.co2).toBe(10.4);
            expect(newResult.label).toBe(Co2Labels.ORANGE);
        });
    });
});
