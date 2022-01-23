export interface Sofa {
    isSoft(): boolean;
    length: number
}

export class VictorianSofa implements Sofa {
    isSoft() { return true; }
    get length() { return 10; }
}

export class ModernSofa implements Sofa {
    isSoft(){ return false; }
    get length() { return 5; }
}

export class ArtDecoSofa implements Sofa {
    isSoft() { return true; }
    get length() { return 8; }
}

