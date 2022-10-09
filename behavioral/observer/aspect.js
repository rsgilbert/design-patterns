// We can specify modifications of interest explicitly
// by providing support for the notion of aspect
// An aspect is the type of update we are interested in
// When attaching an observer to a subject, we provide the aspect, ie, 
// type of event we are interested in being notified about 

const { Observer, Subject } = require('./_observer.js')
/**
 * The subject / datasource / publisher / model
 */
class AspectSubject extends Subject {
    /**
     * A list of observers that have subscribed to receive updates
     * from the Subject
     * @type {{ observer: Observer, aspect: string }[] }
     */
    #observers = [];
    /**
     * The notify method asks every observer that has subscribed to the subject
     * to redraw itself only and only if the aspect matches what the observer is interested in
     * It is called when a change happens to the subject.
     * @param {aspect} string 
     */
    notify(aspect) {
        for (let ob of this.#observers) {
            if (ob.aspect === aspect) {
                ob.observer.update(this);
            }
        }
    }

    /**
     * Attach/subscribe an observer to this subject.
     * The attached observer will receive updates to changes on this subject.
     * @param { AspectObserver}observer
     * @string { aspect } aspect
     */
    attach(observer, aspect) {
        this.#observers.push({ observer, aspect })
    }


    /**
     * Detach/unsubscribe an observer from this subject.
     * The dettached observer will nolonger receive updates to changes on this subject.
     * @param { Observer}observer
     */
    deattach(observer) {
        this.#observers = this.#observers.filter(ob => ob.observer !== observer);
    }

}

class AspectObserver extends Observer {
    /**
    * @type { string}
    */
    aspect;
    /**
     *
     * @param {AspectSubject} subject
     * @param { string } aspect
     */
    constructor(subject, aspect) {
        super(subject)
        this.aspect = aspect
        this.attachToSubject()
    }
    attachToSubject() {
        if(this.aspect)
            this.subject.attach(this, this.aspect);
    }
}


const EngineAspects = {
    START: 0,
    STOP: 1,
    ACCELERATE: 2,
    DECELERATE: 3,
}

class EngineSubject extends AspectSubject {
    /**
     * @type { keyof EngineAspects}
     */
    aspect = 'STOP'
    petrolQty = 0
    stop() {
        if(this.petrolQty !== 0 && this.aspect  !== 'STOP') {
            this.petrolQty -= 1
            this.aspect = 'DECELERATE'
            return this.notify('DECELERATE')
        }
        this.aspect = 'STOP'
        return this.notify('STOP')
    }
    move() {
        if (this.petrolQty === 0) {
            this.aspect = 'STOP'
            return this.notify('STOP')
        }
        this.petrolQty -= 1
        if (this.aspect === 'STOP') {
            // car  had been stopped 
            this.aspect = 'START'
            return this.notify('START')
        }
        this.aspect = 'ACCELERATE'
        return this.notify('ACCELERATE')
    }
}

class EngineObserver extends AspectObserver {
    /** @override  */
    update(subject) {
        console.log('new petrol qty', subject.petrolQty, 'aspect is', subject.aspect)
    }
}


const sub1 = new EngineSubject()

const obs1 = new EngineObserver(sub1, 'START')
const obs2 = new EngineObserver(sub1, 'DECELERATE')
sub1.petrolQty = 2
sub1.move()
sub1.move()
sub1.move()
sub1.stop()
sub1.petrolQty = 5
sub1.stop()
sub1.move()
sub1.stop()
sub1.stop()
sub1.stop()
sub1.stop()
sub1.stop()
sub1.stop()
sub1.stop()
sub1.stop()
sub1.stop()
sub1.stop()
