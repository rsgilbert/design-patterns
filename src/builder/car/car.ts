// Using the Builder pattern only makes sense when
// your products are quite complex and require
// extensive configuration. 
// The following two products are related, although
// they don't have a common interface.

export class Car {
    engine: string;
    os: string;
    constructor() {
    }

    _numberOfSeats = 0;
    get numberOfSeats() {
        return this._numberOfSeats;
    }
    set numberOfSeats(arg) { this._numberOfSeats = arg; }

    _hasGPS: boolean = false;
    get isHasGPS() { return this._hasGPS; }

}

// Each car should have a user manual
// that corresponds to the car's configuration
// and describes all its features.
export class CarManual {
    _text;
    get text() { return this._text; }
    constructor(text) {
        this._text = text;
    }
}





