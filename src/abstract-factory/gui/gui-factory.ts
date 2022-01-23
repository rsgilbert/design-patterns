import { AndroidButton, Button, LinuxButton, MacButton, WinButton } from './button.js';
import { AndroidCheckbox, Checkbox, LinuxCheckbox, MacCheckbox, WinCheckbox } from './checkbox.js';

// The abstract factory interface declares a set of 
// methods that return different abstract products. 
// These products are called a family and are related 
// by a high-level theme or concept. Products of one 
// family are usually able to collaborate among 
// themselves. A family of products may have several
// variants, but the products of one variant are incompatible 
// with the products of another variant. 
export interface GUIFactory {
    createButton() : Button;
    createCheckbox() : Checkbox;
}


// Concrete factories produce a family of products that 
// belong to a single variant. 
// The factory guarantees that the resulting products 
// are compatible. Signatures of the concrete factory's 
// methods return an abstract product, while inside the method
// a concrete product is instantiated.
/**
 * @implements GUIFactory
 */
class WinFactory implements GUIFactory {
    createButton() {
        return new WinButton();
    }
    createCheckbox() {
        return new WinCheckbox();
    }
}


class MacFactory implements GUIFactory {
    createButton() {
        return new MacButton();
    }
    createCheckbox() {
        return new MacCheckbox();
    }
} 

class LinuxFactory implements GUIFactory {
    createButton() {
        return new LinuxButton();
    }
    createCheckbox() {
        return new LinuxCheckbox();
    }
} 

class AndroidFactory implements GUIFactory {
    createButton() {
        return new AndroidButton();
    }
    createCheckbox() {
        return new AndroidCheckbox();
    }
} 

// We export instances of the concrete factories.
// In this way we use the concrete factories as singletons.
export const winFactory = new WinFactory();
export const macFactory = new MacFactory();
export const linuxFactory = new LinuxFactory();
export const androidFactory = new AndroidFactory();