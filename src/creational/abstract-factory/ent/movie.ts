export interface Movie {
    genre: string;
    play(): void;
}

export class AfricanMovie implements Movie {
    _name;
    constructor(name: string) {
        this._name = name;
    }
    get genre(){ 
        return 'African';
    }
    play() {
        console.log('African movie playing');
    }
}

export class AmericanMovie implements Movie {
    _name;
    constructor(name: string) {
        this._name = name;
    }
    get genre(){ 
        return 'American';
    }
    play() {
        console.log('American movie playing');
    }
}

export class KoreanMovie implements Movie {
    _name;
    constructor(name: string) {
        this._name = name;
    }
    get genre(){ 
        return 'Korean';
    }
    play() {
        console.log('Korean movie playing');
    }
}

