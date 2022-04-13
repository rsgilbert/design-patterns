class Animal {
    biteCount = 0;
    bite() {
        console.log('i am biting you the', ++this.biteCount, 'th time');
    }
    punch() {
        console.log('Let me punch you')
    }
}


const animalLoggingProxy = new Proxy(new Animal(), {
    get(target, prop, receiver) {
        //console.log(target, props, receiver); 
        const result = Reflect.get(target, prop, receiver);
        console.log('Method', prop, 'was called');
        return result;

    }
})

// A factory method that returns a logging proxy for a given object.
function loggingProxyFactory(obj) {
    const proxy1 = new Proxy(obj, {
        get(target, prop, receiver) {
            const result = Reflect.get(target, prop, receiver);
            console.log('called', prop);
            return result;
        }
    });
    return proxy1;
}

// animalLoggingProxy.bite(); // notice that it will do a get on the proxy twice. Once for bite() and the second time for bitCount

const animalLoggingProxy2 = loggingProxyFactory(new Animal());
animalLoggingProxy2.bite();
animalLoggingProxy2.bite();
animalLoggingProxy2.bite();
