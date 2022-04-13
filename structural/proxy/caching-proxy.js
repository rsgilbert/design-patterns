class Information {
    get bestAnime() { 
        console.log('reached info')
        this.longRunningOp();
        return 'Naruto'
    }
    get bestActor() {
        console.log('let me check')
        this.longRunningOp();
        return 'Jason'
    }
    longRunningOp(){
        for(let i of Array(100_000_000)) {
        }
    }
}

class InformationCachingProxy {
    #information;
    #cache = {};
    constructor(){
        this.#information = new Information();
    }
    get bestActor() {
        if(this.#cache.bestActor === undefined) {
            this.#cache.bestActor = this.#information.bestActor;
        }
        return this.#cache.bestActor;
    }
    get bestAnime() {
        if(this.#cache.bestAnime === undefined) {
            this.#cache.bestAnime = this.#information.bestAnime;
        }
        return this.#cache.bestAnime;
    }
}


const info1 = new Information();
console.log('first time')
console.time();
console.log(info1.bestActor)
console.timeEnd();
console.time();
console.log(info1.bestAnime)
console.timeEnd();
console.log('second time')
console.time();
console.log(info1.bestActor)
console.timeEnd();
console.time();
console.log(info1.bestAnime)
console.timeEnd();

console.log('*** Using Caching Proxy ***')
const infoProxy1 = new InformationCachingProxy();
console.log('first time')
console.time();
console.log(infoProxy1.bestActor)
console.timeEnd();
console.time();
console.log(infoProxy1.bestAnime)
console.timeEnd();
console.log('second time'); // will take much less time
console.time();
console.log(infoProxy1.bestActor)
console.timeEnd();
console.time();
console.log(infoProxy1.bestAnime)
console.timeEnd();