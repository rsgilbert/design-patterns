import { Builder, CarBuilder, CarManualBuilder } from './car-builder.js';

describe('car builder', () => {
    test('car builder', () => {
        let builder = new CarBuilder();
        builder.setEngine('v8');
        builder.setGPS(true);
        builder.setSeats(6);
        builder.setTripComputer('Linux');
        const car = builder.getProduct();
        expect(car.engine).toBe('v8');
        expect(car.isHasGPS).toBe(true);
        expect(car.numberOfSeats).toBe(6);
    });
    test('car manual builder', () => {
        let builder = new CarManualBuilder();
        builder.setEngine('v8');
        builder.setGPS(true);
        builder.setSeats(6);
        builder.setTripComputer('Linux');
        const carManual = builder.buildManual();
        console.log(carManual)
        expect(carManual.text.length).toBeGreaterThan(30);
        expect(carManual.text).toContain('Linux');
        expect(carManual.text).toContain('6');
        expect(carManual.text).toContain('v8')
        
    });
});