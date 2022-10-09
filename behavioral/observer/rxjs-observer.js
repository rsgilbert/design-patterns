
class Observable {
    /**
     * @type { ({ next }) => void }
     */
    subscribeFn 
    
    /**
     * 
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

