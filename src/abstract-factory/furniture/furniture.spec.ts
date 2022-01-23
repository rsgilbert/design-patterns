import { jest } from '@jest/globals';
import { artDecoFactory, FurnitureFactory, modernFactory, victorianFactory } from './furniture-factory';

describe('furniture factory', () => {
    let furnitureFactory: FurnitureFactory;
    let origLog;

    beforeEach(() => {
        origLog = console.log;
        console.log = jest.fn();
        furnitureFactory = victorianFactory;
    });
    afterEach(() => {
        console.log = origLog;
    });

    describe('victorian', () => {
        beforeEach(() => {
            furnitureFactory = victorianFactory;
        });

        test('chair', () => {
            let chair = furnitureFactory.createChair();
            expect(chair.hasLegs()).toBe(true);
        });

        test('sofa', () => {
            let sofa = furnitureFactory.createSofa();
            expect(sofa.isSoft()).toBe(true);
            expect(sofa.length).toBe(10);
        });

        test('coffee table', () => {
            let coffeeTable = furnitureFactory.createCoffeeTable();
            expect(coffeeTable.height).toBe(10);
            expect(coffeeTable.area(furnitureFactory.createSofa(), 0)).toBeCloseTo(20);
        });
    });


    describe('modern', () => {
        beforeEach(() => {
            furnitureFactory = modernFactory;
        });

        test('chair', () => {
            let chair = furnitureFactory.createChair();
            expect(chair.hasLegs()).toBe(false);
        });

        test('sofa', () => {
            let sofa = furnitureFactory.createSofa();
            expect(sofa.isSoft()).toBe(false);
            expect(sofa.length).toBe(5);
        });

        test('coffee table', () => {
            let coffeeTable = furnitureFactory.createCoffeeTable();
            expect(coffeeTable.height).toBe(4);
            expect(coffeeTable.area(furnitureFactory.createSofa(), 0)).toBeCloseTo(25 * 2 * 3.14159);
        });
    });

    describe('art deco', () => {
        beforeEach(() => {
            furnitureFactory = artDecoFactory;
        });

        test('chair', () => {
            let chair = furnitureFactory.createChair();
            expect(chair.hasLegs()).toBe(true);
        });

        test('sofa', () => {
            let sofa = furnitureFactory.createSofa();
            expect(sofa.isSoft()).toBe(true);
            expect(sofa.length).toBe(8);
        });

        test('coffee table', () => {
            let coffeeTable = furnitureFactory.createCoffeeTable();
            expect(coffeeTable.height).toBe(6);
            expect(coffeeTable.area(furnitureFactory.createSofa(), 0)).toBe(64);
        });
    });
});
