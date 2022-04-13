// return 'XX' if property is not object

const handler1 = {
    get(obj, prop) {
        return prop in obj ? obj[prop] : 'XX';
    }
}

const p = new Proxy(/* real subject */ { space: 'alot'}, /* proxy */ handler1);

// console.log(p);
// console.log(p.talk); // XX
// console.log(p.space);

p.nail = 'long'
// console.log(p);
// console.log(p.nail)


console.log('nail' in p, 'kk' in p);

class Cow {
    #take = 4
     moo() { console.log('moooo..') }
}
const p2 = new Proxy(new Cow(), handler1);
p2.moo();
// console.log(p2.crazy)
// console.log(p2)

// No-op forwarding proxy 
// Our proxy will forward requests/operations to a javascript object
// This may involve setting some properties on the target object that were not even there
const target3 = {maze: 'tough'}
const p3 = new Proxy(target3, {}) 
console.log(p3)
console.log(p3.check)

p3.check = function(n){ console.log('checked 5 times') }
console.log(p3.check(5));
console.log(target3) // target3 now has the check function
