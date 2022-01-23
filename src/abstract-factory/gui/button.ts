// Each distinct product of a product family should 
// have a base interface. All variants of the product
// must implement this base interface.
export interface Button {
    paint();
}

// Concrete products are created by corresponding 
// concrete factories.
export class WinButton implements Button {
    paint() {
        console.log('Painting a button on a Windows computer');
    }
}


export class MacButton implements Button {
    paint() {
        console.log('Painting a button on a Mac computer');
    }
}

export class LinuxButton implements Button {
    paint() { 
        console.log('Painting a button on a linux computer');
    }
}

export class AndroidButton implements Button { 
    paint() {
        console.log("Painting a button on an android device");
    }
}


