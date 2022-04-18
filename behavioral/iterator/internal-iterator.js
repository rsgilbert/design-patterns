// An internal iterator controls the iteration and 
// accepts a function parameter that should be called for each item in
// the iteration.

const { ListIterator } = require("./iterator.js");
const { List } = require("./list.js");


class ListWithInternalIterator extends List {
    /**
     * 
     * @param {(item)=>void} forEachFn 
     */
    forEach(forEachFn) {
        const iterator = new ListIterator(this);
        for(iterator.first(); ! iterator.isDone(); iterator.next()) {
            forEachFn(iterator.currentItem());
        } 
    }

    // Support js for..of and [...lst]
    *[Symbol.iterator]() {
         const iter = new ListIterator(this);
         for(iter.first(); ! iter.isDone(); iter.next()) {
            yield iter.currentItem();
         }
    }

}

module.exports = { ListWithInternalIterator }