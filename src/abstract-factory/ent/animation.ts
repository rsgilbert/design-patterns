export interface Animation {
    animate(): void;
    type: string;
}

abstract class AbstractAnimation implements Animation {
    _name;
    constructor(name: string) {
        this._name = name;
    }
    abstract animate(): void;
    abstract type: string;
}

export class AfricanAnimation extends AbstractAnimation {
    get type(){ 
        return 'African';
    }
    animate() {
        console.log('African animation');
    }
}

export class AmericanAnimation extends AbstractAnimation {
    get type(){ 
        return 'American';
    }
    animate() {
        console.log('American animation');
    }
}

export class KoreanAnimation extends AbstractAnimation {
    get type(){ 
        return 'Korean';
    }
    animate() {
        console.log('Korean animation');
    }
}