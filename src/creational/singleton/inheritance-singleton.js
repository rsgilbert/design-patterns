
// Didnt work because static properties are not inherited

export class HumanSingleton {
    gender = 'M or F';
    print() { 
        console.log(this.gender)
    }
    static _instance;
    static getInstance() {
        if(! HumanSingleton._instance) HumanSingleton._instance = new HumanSingleton();
        return HumanSingleton._instance;
    }
}

export class MaleSingleton {
    gender = 'M'
    // static getInstance() {
        
    // }
}

console.log(HumanSingleton.getInstance())