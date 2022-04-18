// A generator function creates and  returns a special type of iterator 

// implement range iterator using a generator function
// Each time you call next() on the iterator it runs until it encounters
// a yield statement at which point it pauses execution.
function* makeRangeIteratorUsingGen(start = 0, end = 50, step = 1) {
    let count = 0;
    for( ; start < end; start+=step) {
        count++;
        yield start;
    }
    return count;
}

// use generator
// create iterator
let iter1 = makeRangeIteratorUsingGen(5, 20, 7);
let res1 = iter1.next();
while(! res1.done) {
    console.log('result is',res1);
    res1 = iter1.next();
}
console.log('iteration returned value is', res1);

