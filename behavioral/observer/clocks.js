// Use the observer design pattern to implement two clocks.
// A digital clock and an analog clock.
// Both of these clocks subscribe to receive updates from a timer.
// When the timer performs a tick, it notifies its subjects and the
// subjects redraw themselves based on the updated time in the timer.

/**
 * The subject / datasource / publisher / model
 */
class Subject {
    /**
     * A list of observers that have subscribed to receive updates
     * from the Subject
     * @type {Observer[] }
     */
    #observers = [];

    /**
     * The notify method asks every observer that has subscribed to the subject
     * to redraw itself.
     * It is called when a change happens to the subject.
     */
    notify() {
        for (let observer of this.#observers) {
            observer.update(this);
        }
    }

    /**
     * Attach/subscribe an observer to this subject.
     * The attached observer will receive updates to changes on this subject.
     * @param { Observer}observer
     */
    attach(observer) {
        this.#observers.push(observer)
    }


    /**
     * Detach/unsubscribe an observer from this subject.
     * The dettached observer will nolonger receive updates to changes on this subject.
     * @param { Observer}observer
     */
    deattach(observer) {
        this.#observers = this.#observers.filter(ob => ob !== observer);
    }

}

// The observer / subscriber / view
class Observer {
    /**
     * @type { Subject}
     */
    subject;
    /**
     *
     * @param {Subject} subject
     */
    constructor(subject) {
        subject.attach(this);
        this.subject = subject;
    }
    /**
     * @abstract
     * To be implemented by a subclass
     * @description The update method is called by the subject
     * when a change happens on the subject. The update method asks the
     * observer to redraw itself. The observer must re-fetch data from the subject.
     * @param { Subject} subject - the subject that is calling update. This allows the observer know which subject has changed.
     */
    update(subject) {
        throw Error("Not implemented");
    }
    // We are using this to test the functionality of Subject~detach
    stopObserving() {
        this.subject.deattach(this);
    }
}

class Time {
    /**
     *
     * @param { number }hours
     * @param { number} minutes
     * @param { number } seconds
     */
    constructor(hours, minutes, seconds) {
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
    }

}

// -- subject --
class MyTimer extends Subject {
    /** @type { Time } */
    time;

    tick() {
        const dt = new Date();
        this.time = new Time(dt.getHours(), dt.getMinutes(), dt.getSeconds());
        this.notify();
    }
}

// -- Observers --
class DigitalClock extends Observer {
    /**
     * @param {Subject} subject
     * @param { MyTimer } timer
     */
    constructor( timer) {
        super(timer);
    }

    /**
     * @override
     * @param { Subject} subject
     */
    update(subject) {
        if (subject instanceof MyTimer) {
            this.draw();
        }
    }

    /**
     *
     * @param { Time } time
     */
    draw() {
        console.log("### Digital Clock ###");
        console.log(`time is ${this.subject.time.hours}:${this.subject.time.minutes}:${this.subject.time.seconds}`);
        console.log("### END ###");
    }
}

class StopClock extends Observer {
    /** @type {Date} */
    #startDate;

    /**
     *
     * @param {Subject} subject
     * @param {MyTimer} timer
     * @param { Date } startDate Starting date and time for the stop clock
     */
    constructor( timer, startDate ) {
        super(timer);
        this.#startDate = startDate;
    }

    /**
     * @override
     * @param { Subject} subject
     */
    update(subject) {
        if (subject instanceof MyTimer) {
            this.draw();
        }
    }

    /**
     *
     * @param { Time } time
     */
    draw() {
        const elapsedSeconds = this.subject.time.seconds - this.#startDate.getSeconds();
        const elapsedMinutes = this.subject.time.minutes - this.#startDate.getMinutes();
        console.log("### Stop  Clock ###");
        console.log(`${elapsedMinutes} minutes and ${elapsedSeconds} seconds elapsed`)
        console.log("### END ###");
    }
}

const timer1 = new MyTimer();
const digitalClock1 = new DigitalClock(timer1);
const stopClock1 = new StopClock(timer1, new Date());

setTimeout(() => {
    timer1.tick();
}, 1000);

setTimeout(() => {
    timer1.tick();
}, 2000);

setTimeout(() => {
    timer1.tick();
    // remove a clock
    digitalClock1.stopObserving();
}, 3000);

setTimeout(() => {
    console.log("j")
    timer1.tick();
}, 4000);
setTimeout(() => {
    timer1.tick();
}, 5000);


