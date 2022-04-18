const { ListIterator, ReverseListIterator } = require('./iterator.js')
const { List } = require("./list.js")


function useIt1() {
    const l1 = new List();
    l1.add('box')
    l1.add('tool')
    l1.add('chocolate')
    l1.add('dance')

    const iter1 = new ListIterator(l1);
    for(iter1.first(); ! iter1.isDone(); iter1.next()) {
        const item = iter1.currentItem();
        console.log('item is', item);
    }

}


function useReverseIt2() {
    const l2 = new List();
    l2.add('potato');
    l2.add('chips');
    l2.add('cabbage');
    l2.add('sweet pepsi');
    l2.add('daddies');

    const iter1 = new ReverseListIterator(l2);
    for(iter1.first(); ! iter1.isDone(); iter1.next()) {
        const item = iter1.currentItem();
        console.log('item is', item);
    }
}
// useIt1();
// useReverseIt2();

function toList() {
    const l3 = new List();
    l3.add('banana');
    l3.add('charcoal');
    l3.add(18);
    l3.add('tarantula');
    const iterator = new ListIterator(l3);
    const items = [...iterator];
    console.log(items);
}
// toList();


function useForOf() {
    const l4 = new List();
    l4.add(true);
    l4.add(true);
    l4.add(false);
    l4.add(true);
    l4.add(false);
    const revIter1 = new ReverseListIterator(l4);
    for(let item of revIter1) {
        console.log('item is', item);
    }
}
useForOf();