// In javascript, an iterator is an object that implements
// javascipt's iterator protocol.

// A function that returns an iterator object that
// can be consumed. The function uses a closure to keep track of its values/internal state.
function makeRangeIterator(start = 0, end = Infinity, step = 1) {
    let nextIdx = start;
    let iterationCount = 0;

    const rangeIterator = {
        next() {
            if(nextIdx < end) {
                // we're still within range
                const result = {
                    done: false, value: nextIdx
                }
                iterationCount++;
                nextIdx += 3;
                return result;
            }
            else {
                // iterator is fully consumed
                return {
                    done: true, value: iterationCount
                }
            }
        }
    }
    return rangeIterator;
}

// use iterator
const it1 = makeRangeIterator(1, 14, 3);
let r1 = it1.next();
while(! r1.done) {
    console.log('value is', r1.value);
    r1 = it1.next();
}

console.log('Fully consumed iterator. Iterator ran', r1.value, 'times')