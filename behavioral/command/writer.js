class Text {
    stmt = '';
}

class Command {
    execute() {};
    // support undo operations
    unexecute() {};
}

class WriterCmd extends Command {
    /** @type { Text } */
    #text;
    /** @type { string }  */
    #content;
    /** @type { string } */
    #textStmtBackup;
    constructor(text) {
        super();
        this.#text = text;
        this.#textStmtBackup = this.#text.stmt;
    }
    set content(arg) {
        this.#content = arg;
    }
    execute() {
        this.#textStmtBackup = this.#text.stmt;
        this.#text.stmt += this.#content;
    }
    unexecute(){    
        this.#text.stmt = this.#textStmtBackup;
    }
}

const t1 = new Text();
const writer1 = new WriterCmd(t1);
writer1.content = 'Jennifer njagala';

writer1.execute();
console.log(t1.stmt);
writer1.content = " ozine kumazina";
writer1.execute();
console.log(t1);
writer1.unexecute();
console.log(t1);
writer1.execute();
console.log(t1);

const writer2 = new WriterCmd(t1);
writer2.content = ' gewazinila wali';
writer2.unexecute();
writer2.execute();
console.log(t1);
writer2.unexecute();
console.log(t1);
writer2.unexecute();
console.log(t1);
