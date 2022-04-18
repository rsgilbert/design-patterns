const { ListWithInternalIterator } = require('./internal-iterator.js')

function f1() {
    const l1 = new ListWithInternalIterator();
    l1.add(100);
    l1.add(200);
    l1.add(500);
    l1.add(800);
    l1.forEach(item => {
        console.log('the current item is ', item);
    });
}

// f1();

function f2() {
    const l2 = new ListWithInternalIterator();
    l2.add(5);
    l2.add(50);
    l2.add(505);
    l2.add(5050);
    for(let el of l2) {
        console.log('element is', el);
    }
    for(let el of l2) {
        console.log('element is', el);
    }
    const a1 = Array.from(l2);
    console.log(a1)
}

f2();