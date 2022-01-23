/**
 * Implementing an abstract factory for furniture.
 * See: https://refactoring.guru/design-patterns/abstract-factory
 */

import { ArtDecoChair, Chair, ModernChair, VictorianChair } from "./chair";
import { ArtDecoCoffeeTable, CoffeeTable, ModernCoffeeTable, VictorianCoffeeTable } from "./coffee-table";
import { ArtDecoSofa, ModernSofa, Sofa, VictorianSofa } from "./sofa";

export interface FurnitureFactory {
    createChair(): Chair;
    createCoffeeTable() : CoffeeTable;
    createSofa(): Sofa;
}


// Below classes represent factories for the three variants of furniture, that is
// art deco, victorian and modern furniture.

class ArtDecoFactory implements FurnitureFactory {
    createChair() { return new ArtDecoChair(); }
    createCoffeeTable() { return new ArtDecoCoffeeTable(); }
    createSofa() { return new ArtDecoSofa(); }
}

class VictorianFactory implements FurnitureFactory {
    createChair() { return new VictorianChair(); }
    createCoffeeTable() { return new VictorianCoffeeTable(); }
    createSofa() { return new VictorianSofa(); }
}

class ModernFactory implements FurnitureFactory {
    createChair() { return new ModernChair(); }
    createCoffeeTable() { return new ModernCoffeeTable(); }
    createSofa() {  return new ModernSofa(); }
}

export const victorianFactory = new VictorianFactory();
export const modernFactory = new ModernFactory();
export const artDecoFactory = new ArtDecoFactory();
