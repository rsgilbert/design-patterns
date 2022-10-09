// We are going to explore how to maintain consistency during updates
// When two or more parameters have to be changed, the notification
// has to be sent after all parameters have changed 
// We should therefore delay notifying the observers until then 

const { Observer, Subject } = require('./_observer.js')


class AreaSubject extends Subject {
    #width = 0
    #height = 0
    get area() {
        return this.#height * this.#width
    }
 
    // utilities to update width and height 

    changeWidth(w) {
        this.#width = w 
    }
    changeHeight(h) {
        this.#height = h 
    }
    // end of utilities


    // template methods to update width and height
    // they call notify at the end
    set width(w) { 
        this.changeWidth(w) 
        this.notify()
    } 

    set height(h) { 
        this.changeHeight(h)
        this.notify()
    }
    // end of template methods

    changeArea({ w, h }) {
        // // bad - this will notify before the area is fully changed
        // this.width = w 
        // this.height = h
        // // bad end 

        // // good - use utilitity methods that DONT call notify
        this.changeWidth(w)
        this.changeHeight(h)
        // this.#width = w 
        // this.#height = h
        this.notify()
    }
}


class AreaObserver extends Observer {
    /**
     * @override
     * @param {AreaSubject} sub
     */
    update(sub) {
        console.log('Area is', sub.area)
    }
}

const areaSub = new AreaSubject()
const areaObs = new AreaObserver(areaSub)

// areaSub.width = 10
// areaSub.height = 5
// areaSub.width = 3
areaSub.changeArea({ w: 10, h: 20 })