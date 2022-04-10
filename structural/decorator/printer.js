// decorate a printer object

class Printer {
    data;
    constructor(data) { 
        this.data = data;
    }
    print(){ 
        console.log(this.data)
    }
    updateData(arg) {
        this.data = arg;
    }
}

const printer = new Printer('I love Lynn');
printer.print();
printer.updateData('Very much...');
printer.print();

// Define a printer decorator
// Must implement the Printer interface
/**
 * @implements Printer
 */
class PrinterDecorator {
    printer;

    constructor(printer) {
        this.printer = printer;
    }
    set data(arg) { this.printer.data = arg; }
    get data() { return this.printer.data; }

    updateData(arg) {
        this.printer.updateData(arg);
    }
    print(){
        this.printer.print();
    }
}

class StarPrinterDecorator extends PrinterDecorator {
    /** @override */
    print(){ 
        console.log('**********');
        super.print();
        console.log('**********');
    }
}

const starDecoratedPrinter = new StarPrinterDecorator(printer);
starDecoratedPrinter.print();

// Define a decorator that capitalizes the data at the point of updating
class UpperCasePrinterDecorator extends PrinterDecorator {
    /** @override */
    updateData(arg) {
        super.updateData(arg.toUpperCase());
    }
}

// decorate another decorated object
// Thereby chaining/composing decorators
const uppercaseDecorator = new UpperCasePrinterDecorator(starDecoratedPrinter);
uppercaseDecorator.updateData('Scarred and left me like a sunburn');
uppercaseDecorator.print();

console.log('-- double star --')
const doubleStarDecorator = new StarPrinterDecorator(uppercaseDecorator);
doubleStarDecorator.print();