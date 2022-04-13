// Reflect provides methods for interceptable Javascript operations


class Tapeworm {
    trap = 4
    constructor() {
        console.log('i am a tapeworn')
    }
    walk() { console.log('i am walking')}
}
const t1 = new Tapeworm();
const t2 = Reflect.construct(Tapeworm, [])
t2.walk();
console.log(Reflect.ownKeys(t2))