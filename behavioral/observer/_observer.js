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

    get observers() { return this.#observers }
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
        this.subject = subject;
        this.attachToSubject()
    }
    attachToSubject() {
        this.subject.attach(this);
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

module.exports = {
    Subject,
    Observer
}