// A memento can also store incremental updates about the originator
// These incremental updates can be used to undo changes on the originator
// If we consider a transaction-based system such as a ledger, a memento will be a snapshot of a ledger entry

class LedgerEntry {
    qty;
    type;
    constructor(qty, type) {
        this.qty = qty;
        this.type = type;
    }
}

class Item {
    _inventory;
    constructor(name, openingBalance) {
        this._inventory = openingBalance;
        this.name = name;
    }
    printItemReport() {
        console.log("### ITEM REPORT ###");
        console.log(this.name, this.inventory());
        console.log("### END ###");;
    }
    purchaseInventory(qty) {
        this._inventory += qty;
        return new LedgerEntry(qty, "INC");
    }
    consumeInventory(qty) {
        this._inventory -= qty;
        return new LedgerEntry(qty, "DEC");
    }
    undoEntry(ledgerEntry) {
        switch (ledgerEntry.type) {
            case "INC":
                this._inventory -= ledgerEntry.qty;
                break;
            case "DEC":
                this._inventory += ledgerEntry.qty;
        }
    }
    inventory() { return this._inventory; }
}

const brakes = new Item("Brakes", 12);
brakes.printItemReport()
const purch1 = brakes.purchaseInventory(5);
const purch2 = brakes.purchaseInventory(4);
brakes.printItemReport();
const consumption1 = brakes.consumeInventory(2);
const consumption2 = brakes.consumeInventory(3);
brakes.printItemReport();
brakes.undoEntry(purch2);
brakes.printItemReport();
const consumption3 = brakes.consumeInventory(10);
brakes.printItemReport();
brakes.undoEntry(consumption2);
brakes.printItemReport();

