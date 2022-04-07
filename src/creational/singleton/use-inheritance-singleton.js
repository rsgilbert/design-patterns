import { HumanSingleton, MaleSingleton } from "./inheritance-singleton.js";

const h1 = HumanSingleton.getInstance();
h1.print();

const m1 = MaleSingleton.getInstance();
m1.print();