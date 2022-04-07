// Builder pattern: See: https://refactoring.guru/design-patterns/builder

import { Car, CarManual } from "./car.js";

// The builder interface specifies methods for creating the 
// different parts of the product objects.
export interface Builder {
    reset(): void;
    setSeats(seatCount: number) : void;
    setEngine(engineName: string) : void;
    setTripComputer(computerOS: string): void;
    setGPS(hasGPS: boolean): void;
}


// Concrete builder classes follow the builder interface and 
// provide specific implementations of the building steps.
// A program may have several variations of builders each implemented 
// differently.
export class CarBuilder implements Builder {
    #car: Car;

    // A fresh builder instance should contain a blank product
    // object which it uses in further assembly
    constructor() {
        this.reset();
    }
    
    /**
     * Create a brand new instance of the object being built
     */
    reset() {
        this.#car = new Car();
    }

    setSeats(count) {
        this.#car.numberOfSeats = count;
    }
    setEngine(engineName) {
        this.#car.engine = engineName;
    }
    setTripComputer(os) {
        this.#car.os = os;
    }
    setGPS(hasGPS) {
        this.#car._hasGPS = hasGPS;
    }

    // Concrete builders are supposed to provide their own methods
    // for retrieving results.
    getProduct() : Car {
        return this.#car;
    }
}


// Concrete builder classes follow the builder interface and 
// provide specific implementations of the building steps.
// A program may have several variations of builders each implemented 
// differently.
export class CarManualBuilder implements Builder {
    #textArray = []

    // A fresh builder instance should contain a blank product
    // object which it uses in further assembly
    constructor() {
        this.reset();
    }
    
    /**
     * Create a brand new instance of the object being built
     */
    reset() {
        this.#textArray = [];
    }

    setSeats(count) {
        this.#textArray.push(`The car has ${count} seats`);
    }
    setEngine(engineName) {
        this.#textArray.push(`The engine of our car is car has ${engineName}`);
    }
    setTripComputer(os) {        
        this.#textArray.push(`Our car runs on ${os} operating system`);
    }
    setGPS(hasGPS) {
        let text;
        hasGPS ? text = 'The car supports GPS' : 'The car does not support GPS';
        this.#textArray.push(text);
    }

    // Concrete builders are supposed to provide their own methods
    // for retrieving results.
    buildManual() : CarManual {
        return new CarManual(this.#textArray.join('\n'));
    }
}


