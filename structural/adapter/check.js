// @ts-check
/** @type { number } */
let a;

a = 0;
// @ts-expect-error
a = false;


// infering types

class C {
    /** @type {number} */
    count;
    constructor() {
        this.madman = true;
    }
    papaya() {
        this.strange = 4;
    }
    banana() {
        this.strange = '3k'
    }
}

const c = new C();
c.strange
c.count =8;

/** @type {{ t: number }} */
const o = { t: 4 }
o.t = 5;

/**
 * @type { number}
 */
let h = null;

/**
 * 
 * @param {string} [msg] - optional
 */
function saySomething(msg) {
    console.log(msg)
}

saySomething('d')
saySomething();

/**
 * @param { ...number } args - dfs
 */
function count() {
    console.log(arguments)
}

count(4);

// generics

/** 
 * @augments {Message<{T: string}>}
*/
class Message {
    constructor() {

    }
}

let m = new Message();
m;

/**
 * @type {Array.<number>}
 */
let arr = [];
arr.push(3);
// arr.push('k');

const 