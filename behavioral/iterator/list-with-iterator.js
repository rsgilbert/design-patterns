const { List } = require('./list.js');
const { ListIterator } = require('./iterator.js')

class ListWithIterator extends List {
    createIterator() {
        return new ListIterator(this);
    }
}

module.exports = { ListWithIterator }