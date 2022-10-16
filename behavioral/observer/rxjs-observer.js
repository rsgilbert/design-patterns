// best  implementation of  observable pattern in javascript
// uses function as parameter syntax

class Observable {
    /** @type { ({ next }) => void } */
    subscribeFn 
    
    /**
     * @param {({ next }) => void } subscribeFn - logic that calls subscriber.next(v)
     */
    constructor(subscribeFn) {
        this.subscribeFn = subscribeFn
    }
    /**
     * Call this function to start the subscription. 
     * @param {{ next }} subscriber 
     */
    subscribe(subscriber) {
        this.subscribeFn(subscriber)
    }
}
// end of  implementation

const observable1 = new Observable(subscriber => {
    let cnt = 0
    setInterval(() => {
        subscriber.next(++cnt)
    }, 1000)
})


const observer1 = {
    next(v) {
        console.log('Called next with value', v)
    }
}

const observer2 = {
    next(v) {
        console.log('new next value is', v)
    }
}

observable1.subscribe(observer1)
observable1.subscribe(observer2)

// usage example 2
const observable2 = new Observable(subscriber => {
    subscriber.next(10)
    subscriber.next(20)
})

const observer21 = { next: console.log }
observable2.subscribe(observer21)
