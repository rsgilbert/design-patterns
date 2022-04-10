// Using flyweight design pattern to share phones

// Many people can call using the same phone instead of having
// to create a new phone for each person.

// Each person has their own context object. The context objects 
// are callHistory, phoneBook etc 


// Part one. Not using flyweights
class Phone {
    phoneId;
    constructor(phoneId){
        this.phoneId = phoneId;
        let c;
        // phone construction is an expensive process
        for(let k of Array(10_000_000)){ // my pc was looping 34 million per sec
            c = k;
        }
    }
    callHistory = [];
    dial(num) {
        console.log('calling', num);
    }
    callLastNo(){
        this.dial(this.callHistory[this.callHistory.length-1]);
    }
    phoneBook = [];
    callContactByName(name) {
        this.dial(this.phoneBook.find(c => c.name === name).no);
    }
}



console.time();
const p1 = new Phone('phone-001');
p1.callHistory = ['02', '05', '28'];
p1.phoneBook = [{ name: 'Tom', no: '234'}, { name: 'Jane', no: '678'} ];

const p2 = new Phone('phone-001');
p2.callHistory = ['12', '15', '118'];
p2.phoneBook = [{ name: 'Kain', no: '444'}, { name: 'Pim', no: '222'} ];

const p3 = new Phone('phone-001'); // uses same phone as p1
p3.callHistory = ['22', '25', '448'];
p3.phoneBook = [{ name: 'Abel', no: '21'}, { name: 'Mia', no: '1'} ];

p1.callLastNo(); // 28
p1.callContactByName('Tom'); // 234

p2.callLastNo(); // 118
p2.callContactByName('Pim') // 222

p3.callLastNo(); // 448
p3.callContactByName('Abel'); // 21 
console.timeEnd(); // 500 ms


//  ***********************************************************
// Now using flyweight design pattern
// We identify the parts of the Phone class that dont change and are reused by
// multiple objects.
// These parts keep getting created unnecessarily many times.  So we create a cache so 
// that we reuse them in other objects as well.  We implement the fetching of the cached objects
// in an abstract factory class.
// These parts constitute what they call intrinsic data.
// We then keep the data that changes from object to object in another class called the context object.  The 
// context object also has a reference to a flyweight object that contains that data about it that wont change and is similar to 
// data in some of the other context objects.
// We call the data that the context object holds extrinsic data.
// We first define phone as a flyweight object
class PhoneFlyweight {
    phoneId;
    constructor(phoneId){
        this.phoneId = phoneId;
        let c;
        // phone construction is an expensive process
        for(let k of Array(10_000_000)){ // my pc was looping 34 million per sec
            c = k;
        }
    }
    dial(num) {
        console.log('calling', num);
    }
    callLastNo(callHistory){
        this.dial(callHistory[callHistory.length-1]);
    }
    callContactByName(name, phoneBook) {
        this.dial(phoneBook.find(c => c.name === name).no);
    }
}

// Define an abstract factory class for fetching a phone flyweight for a given phone id 
// The factory uses a cache to keep records of the phone flyweights
class PhoneFlyweightFactory {
    
    static #phoneFlyweights = {};
    /** @returns { PhoneFlyweight } */
    static getPhoneFlyweight(phoneId) {
        if(! this.#phoneFlyweights[phoneId]) {
            this.#phoneFlyweights[phoneId] = new PhoneFlyweight(phoneId);
        }; 
        return this.#phoneFlyweights[phoneId];
    }
}

// Define context object that stores phone details unique to every person
class PhoneContext {
    phoneFlyweight;
    callHistory = [];
    phoneBook = [];
    constructor(phoneId) {
        this.phoneFlyweight = PhoneFlyweightFactory.getPhoneFlyweight(phoneId);
    }
    // we can defer flyweight functions
    dial(num) { return this.phoneFlyweight.dial(num); }
    callLastNo() { return this.phoneFlyweight.callLastNo(this.callHistory); }
    callContactByName(name) { return this.phoneFlyweight.callContactByName(name, this.phoneBook)}
}

// action!
console.time();
const c1 = new PhoneContext('phone-001');
c1.callHistory = ['02', '05', '28'];
c1.phoneBook = [{ name: 'Tom', no: '234'}, { name: 'Jane', no: '678'} ];

const c2 = new PhoneContext('phone-001');
c2.callHistory = ['12', '15', '118'];
c2.phoneBook = [{ name: 'Kain', no: '444'}, { name: 'Pim', no: '222'} ];

const c3 = new PhoneContext('phone-001'); // uses same phone as p1
c3.callHistory = ['22', '25', '448'];
c3.phoneBook = [{ name: 'Abel', no: '21'}, { name: 'Mia', no: '1'} ];

c1.callLastNo(); // 28
c1.callContactByName('Tom'); // 234

c2.callLastNo(); // 118
c2.callContactByName('Pim') // 222

c3.callLastNo(); // 448
c3.callContactByName('Abel'); // 21 
console.timeEnd(); // 260 ms