export interface Chair {
    hasLegs(): boolean;
    sitOn(): void
}

export class VictorianChair implements Chair {
    hasLegs() { 
        return true;
    }
    sitOn() {
        console.log('Sitting on victorian chair');
    }
}

export class ModernChair implements Chair {
    hasLegs() { 
        return false;
    }
    sitOn() {
        console.log('Sitting on modern chair');
    }
}

export class ArtDecoChair implements Chair {
    hasLegs() { 
        return true;
    }
    sitOn() { 
        console.log('Sitting on art deco chair');
    }
}

