const { List } = require('./list.js')
const { notImplemented } = require('../util.js');
const _ = require('lodash')

class Iterator {
    first(){ return notImplemented(); }
    next() { return notImplemented(); }
    isDone() { return notImplemented(); }
    currentItem(){ return notImplemented(); }

    // Support for .. of and [...ar] js iterator syntax
    // Define a generator 
    *[Symbol.iterator]() {
        for(this.first(); ! this.isDone(); this.next()) {
            yield this.currentItem();
        }
    }

}

class ListIterator extends Iterator {
    #list;
    #pos = 0;
    /**
     * 
     * @param {List} list 
     */
    constructor(list) {
        super();
        this.#list = _.cloneDeep(list);
    }   
    first() {
        this.#pos = 0;
    }
    next(){
        this.#pos ++;
    }
    isDone(){ 
        return this.#list.count() <= this.#pos;
    }
    currentItem(){
        if(this.isDone()) {
            throw new Error('Iterator out of bounds');
        }
        return this.#list.get(this.#pos);
    }
}


class ReverseListIterator extends Iterator {
    #list;
    #pos = 0;
    /**
     * 
     * @param {List} list 
     */
    constructor(list) {
        super();
        this.#list = _.cloneDeep(list);
        this.first();
    }   
    first() {
        this.#pos = this.#list.count() - 1;
    }
    next(){
        this.#pos --;
    }
    isDone(){ 
        return this.#pos < 0;
    }
    currentItem(){
        if(this.isDone()) {
            throw new Error('Iterator out of bounds');
        }
        return this.#list.get(this.#pos);
    }
}


module.exports = {
    ListIterator,
    ReverseListIterator
}