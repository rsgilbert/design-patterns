import { HouseSingleton } from "./simple-singleton.js";

const house1 = HouseSingleton.getInstance();
const house2 = HouseSingleton.getInstance();
house1.windows = 3;
house1.doors = 1;

house1.print();
house2.print();

const house3 = HouseSingleton.getInstance();
house3.windows = 8;
house2.doors = 5;

// All print the same values
house1.print();
house2.print();
house3.print();

const h4 = new HouseSingleton();
h4.windows = 3;
h4.print();
house1.print();