const target = {
    message1: 'hi',
    message2: 'there'
}

const handler1 = {
}

const proxy1 = new Proxy(target, handler1)

// console.log(proxy1.message1)
// console.log(proxy1.message2)



const handler2 = {
    // intercepts attempts to access properties in the target
    // handler functions are sometimes called traps
    get(target, prop, receiver) {
        console.log(target, prop, receiver)
        return 'world'
    }
}

const proxy2 = new Proxy(target, handler2)
// console.log(proxy2.message1)
// console.log('x')
// console.log(proxy2.message2)

// Give some accessors the original behaviour and redefine others
const target2 = {
    tellMe: 'Are you ok',
    praiseMe: 'WOw, you are amazing',
    abuseMe: 'I dont like you'
}

const handler3 = {
    get (target, prop, receiver) {
        switch(prop) {
            case 'tellMe': 
                return 'What do you want to be tol now?'
            case 'abuseMe': 
                return 'I am good person who doesnt insult others'
        }
        return Reflect.get(target, prop, receiver);
    }
}

const proxy3 = new Proxy(target2, handler3);
console.log(proxy3.tellMe)
console.log(proxy3.praiseMe)
console.log(proxy3.abuseMe)
console.log(proxy3.shoutOut)