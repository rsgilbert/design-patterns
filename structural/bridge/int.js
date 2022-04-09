// @ts-check

// describe interface using a class
class PlainInterface {
    size = 4;
    describe() {}
    show(){ }
}

/**
 * @implements  PlainInterface 
 */
class ConcretePlain {
    size = 4;
    describe() {
        console.log('I am described')
    }
    show(){
        console.log('I am shown')
    }
}       

const conc = new ConcretePlain();
conc.describe();