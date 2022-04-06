import _ from "lodash";

const clothPrototype = {
    color: 'red',
    showColor() {
        console.log('this color is', this.color);
    },
    size: 'M',
    print() {
        console.log('Size', this.size, 'color', this.color)
    },
    clone() {
        return _.cloneDeep(this);
    }
}

const plantPrototype = Object.freeze({
    phylum: 'PLANTAE',
    family: 'Herbivorae',
    describe() { console.log(this.phylum, this.family); },
    clone() {
        return _.cloneDeep(this);
    }
});

// prototype registry
// We get a clone of the prototype 
/// We freeze the prototypes so someone does not by mistake
// modify them instead of modifying a clone of the prototype.
const prototypeRegistry = { 
    clothPrototype: Object.freeze(clothPrototype), 
    plantPrototype
}


// Whenever you need to create a new object,
// pick its prototype from the prototype registry, clone the 
// prototype and start from there
const c1 = prototypeRegistry.clothPrototype.clone();
c1.size = 'L';
c1.print();
const c2 = prototypeRegistry.clothPrototype.clone();
c2.print();

const p1 = prototypeRegistry.plantPrototype.clone();
p1.describe();

// In below you forgot to clone so you'll get at error
// const p2 = prototypeRegistry.plantPrototype;
const p2 = prototypeRegistry.plantPrototype.clone();
p2.family = 'ANIMALIA';
p2.describe();

const p3 = prototypeRegistry.plantPrototype.clone();
p3.describe();