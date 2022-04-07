
export class HouseSingleton {
    doors;
    windows;
    print() { console.log(this.doors, 'doors', this.windows, 'windows'); }
    static #instance;
    /**
     * 
     * @returns { HouseSingleton }
     */
    // lazy
    static getInstanceLazy() {
        if(!HouseSingleton.#instance) {
            HouseSingleton.#instance = new HouseSingleton();
        }
        return HouseSingleton.#instance;
    }   

    // Eager
    static #inst2 = new HouseSingleton();
    static getInstance() {
        return HouseSingleton.#inst2;
    }
}

