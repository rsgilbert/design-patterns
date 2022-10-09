// A change manager manages subject-observer relationships.
// It is responsible for updating observers due to changes on the subjects.
// The subject or instead a user calls methods on the change manager such as Notify, Register, Unregister
// passing in the subject, or observer or both as parameters.
// A user can choose to defer notifications to the observers until a moment when
// they finished making all modifications to the subject and only then do they call Notify() on the change manager.
// With a change manager, subjects do not need to maintain references to their observers. The change manager does so.
// The change manager also defines the update strategy and updates all dependent observers at the request of the subject or user.
// A change manager is an example of the mediator design pattern.

const { Observer, Subject} = require('./_observer.js')


class SimpleChangeManager {
    /** @type { {subject: ManagedSubject, observer: Observer}[]} subject-observer mapping */
    subObsMapping = []
    register(subject, observer) {
        this.subObsMapping.push({ subject, observer })
    }
    unregister(subject, observer) {
        this.subObsMapping = this.subObsMapping.filter(mapping => !(mapping.observer === observer && mapping.subject === subject))
    } 
    notify() {
        for(let mapping of this.subObsMapping) {
            mapping.observer.update(mapping.subject)
        }
    }
}

class ManagedSubject extends Subject {
    /** @type {SimpleChangeManager} */
    changeManager;
    constructor(changeManager) {
        super()
        this.changeManager = changeManager;
    }

    /** @override */
    attach(observer) {
        this.changeManager.register(this, observer)
    }

    /** @override */
    deattach(observer) {
        this.changeManager.unregister(this, observer)
    }
    notify() {
        this.changeManager.notify()
    }
}

class LoggerObserver extends Observer {
    /** @override */
    update(subject) {
        console.log('updated subject is', subject)
    }
}

class MusicSubject extends ManagedSubject {
    song = 'No song'
    playSong(song) {
        this.song = song 
        this.notify()
    }
}

class GrowingSubject extends ManagedSubject {
    height = 0 
    
    grow() {
        this.height++
        this.notify()
    }
}

class ExpandingSubject extends ManagedSubject {
    #radius = 0
    get circumference() { return 2 * Math.PI * this.#radius }
    get area() { return Math.PI * this.#radius ** 2 }
    set radius(r) { 
        this.#radius = r
        this.notify()
    }

}

const mgr1 = new SimpleChangeManager()

const growSub = new GrowingSubject(mgr1)
const musicSub = new MusicSubject(mgr1)
const expSub1 = new ExpandingSubject(mgr1)
const expSub2 = new ExpandingSubject(mgr1)

const gObs = new LoggerObserver(growSub)
const mObs = new LoggerObserver(musicSub)
new LoggerObserver(expSub1)
new LoggerObserver(expSub2)
new LoggerObserver(expSub2)

// growing
growSub.grow()
// growSub.grow()
// growSub.deattach(gObs)
// growSub.grow()
// growSub.grow()
// end of growing

musicSub.playSong('roar')

expSub1.radius = 3
console.log(expSub1.area)
mgr1.notify()





