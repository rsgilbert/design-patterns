// A virtual proxy is a proxy that provides lazy initialization to the
// real subject. 
// The actual object will not be created until its really needed.
// Until the actual DatabaseQuery is needed, the client will be using a 
// simulated version of a DatabaseQuery while the actual DatabaseQuery will not really be existing.
// A virtual proxy therefore simulates the functionalities of a real subject and uses
// this simulated version until a time when the real subject is needed to fulfill client requests.

class DatabaseQuery {
    cmd;
    #data;
    constructor(cmd) {
        this.cmd = cmd;
        console.log('sending query', cmd);
        console.time();
        for(let i of Array(100_000_000)) {}
        console.timeEnd();
        console.log('finished creating query');
        this.#data = { value: 524 }
    }

    get data() { return this.#data; }

    result() {
        console.log('Your data is', this.data);
    }
}


class DatabaseQueryProxy {
    #proxyCmd;
    /** @type { DatabaseQuery } */
    #databaseQuery;
    constructor(cmd) {
        this.#proxyCmd = cmd;
    }
    get cmd() { return this.#proxyCmd; }
    set cmd(arg) { this.#proxyCmd = arg; }

    get data() {
        return this.getDatabaseQuery().data;
    }
    result() {
        return this.getDatabaseQuery().result();
    }
    getDatabaseQuery() {
        if(!this.#databaseQuery) {
            this.#databaseQuery = new DatabaseQuery(this.cmd);
        }
        return this.#databaseQuery;
    }
}

// use virtual proxy 
const dbQuery = new DatabaseQueryProxy('SELECT * FROM users;');
console.log(dbQuery.cmd);
dbQuery.cmd = 'DROP TABLE users;';
console.log(dbQuery.cmd);
dbQuery.result();
console.log(dbQuery.data);