const { ListWithIterator } = require('./list-with-iterator.js');


function use1() {
    const l1 = new ListWithIterator();
    l1.add('a');
    l1.add('b');
    l1.add('c');
    l1.add('d');
    const it1 = l1.createIterator();
    it1.first();
    while(! it1.isDone()) {
        const item = it1.currentItem();
        console.log('item is', item);
        it1.next();
    }

}

use1();




