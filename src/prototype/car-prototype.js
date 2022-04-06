import _ from 'lodash';

class Car {
    carName;
    model;
    year;
    print() {
        console.log('I am a', this.year, ' ', this.carName, 'of model', this.model);
    }
    clone() {
        // console.log('proto this', Object.getPrototypeOf(this))
        const p = _.cloneDeep(this);
        
        // console.log('proto this', Object.getPrototypeOf(p))
        // console.log(Object.getPrototypeOf(p) === {}) //Object.getPrototypeOf(this)) 
        // console.log(_.isEqual(Object.getPrototypeOf(p), {})) // false
        return p;
        // console.log('cloned this', this)
        // return Object.assign({}, this);
        // return Object.assign(Object.create(Object.getPrototypeOf(this)), this)

    }
}


function mercedes() {
    // The idea of prototype is that you can create an object instance, set
    // default values for some of its properties and then give out clones that can be used
    // as if they were created from a constructor call.
    // In that way, copying a prototype - called cloning - is similar to 
    // constructing a new object.
    const mercedesPrototype = new Car();
    mercedesPrototype.model = 'Mercedez';

    // md5 is a clone
    const md5 = mercedesPrototype.clone();
    console.log(mercedesPrototype);
    console.log('md5', md5);
    md5.year = 2007;
    md5.print();

    // md10 is a clone
    const md10 = mercedesPrototype.clone();
    md10.carName = 'Supra';
    md10.print();

}

mercedes();