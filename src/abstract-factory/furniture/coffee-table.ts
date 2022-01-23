import { Sofa } from "./sofa";

export interface CoffeeTable {
    area(sofa: Sofa, chairCount: number);
    height: number;
}

export class VictorianCoffeeTable implements CoffeeTable {
    area(sofa: Sofa, chairCount: number) {
        return sofa.length * 2;
    }
    get height() { return 10; }
}

export class ModernCoffeeTable implements CoffeeTable {
    area(sofa: Sofa, chairCount: number) {
        return 2 * Math.PI * sofa.length ** 2;
    }
    get height() { return 4; }

}

export class ArtDecoCoffeeTable implements CoffeeTable {
    area(sofa: Sofa, chairCount: number) {
        return sofa.length ** 2;
    }
    get height() { return 6; }
}

