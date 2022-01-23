import { ArtDecoChair, Chair, ModernChair, VictorianChair } from "./chair";
import { ArtDecoCoffeeTable, CoffeeTable, ModernCoffeeTable, VictorianCoffeeTable } from "./coffee-table";
import { ArtDecoSofa, ModernSofa, Sofa, VictorianSofa } from "./sofa";

export interface FurnitureFactory {
    createChair(): Chair;
    createCoffeeTable() : CoffeeTable;
    createSofa(): Sofa;
}

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
