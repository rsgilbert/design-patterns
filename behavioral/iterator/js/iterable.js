// An iterable is an object that defines its iteration behaviour.
// An iterable defines an internal iterator.
// In javascript, we make an object iterable by 
// implementing the @@iterator method through a 
// property called Symbol.iterator 

// An iterator created by a generator is also an iterable.
function* makeIterator() {
    yield 1;
    yield 10;
    yield 1000;
}

const genIt1 = makeIterator();


// for .. of works only for iterables.
for(let item of genIt1) {
    console.log('item is', item);
}



// the iterator has the property Symbol.iterator so its an iterable
// Being  an iterable means that it defines its own iteration behaviour.
console.log(genIt1[Symbol.iterator]())

// make iterator generator accepting being iterated many times
// by making its @@iterator to be a function/generator that returns an iterator / generator function
// genIt1[Symbol.iterator] =  makeIterator

// for(let item of genIt1) {
//     console.log('item is', item); // wont run. iterator created by generator was fully consumed
// }
// for(let item of genIt1) {
//     console.log('item is', item); // wont run. iterator created by generator was fully consumed
// }

console.log(genIt1[Symbol.iterator]() === genIt1) // true. iterables that iterate only once return the generator object when their iterator method is called.

let ar1 = [2, 5, 1, 23]
for(let item of ar1) { console.log(item)}
console.log(ar1[Symbol.iterator]()) // iterables that can be iterated many times return a new iterator when thier @@iterator method is invoked.