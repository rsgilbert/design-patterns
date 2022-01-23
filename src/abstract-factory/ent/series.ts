export interface Series {
    sceneLocation: string;
    next(): void;
}

abstract class AbstractSeries implements Series {
    _name;
    _seasons;
    constructor(name: string, seasons: number) {
        this._name = name;
        this._seasons = seasons;
    }
    abstract sceneLocation;
    abstract next();    
}

export class AfricanSeries extends AbstractSeries {
    get sceneLocation(){ 
        return 'Africa';
    }
    next() {
        console.log('African Series going to next episode');
    }
}

export class AmericanSeries extends AbstractSeries {
    get sceneLocation(){ 
        return 'USA';
    }
    next() {
        console.log('American Series nexting');
    }
}

export class KoreanSeries extends AbstractSeries {
    get sceneLocation(){ 
        return 'South Korea';
    }
    next() {
        console.log('Korean Series nexting');
    }
}

