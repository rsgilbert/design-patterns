// A virtual proxy to a persistent file
// Does not make a file system operation until it is really needed
const fs = require('fs');
const path = require('path')


class File {
    #filePath;
    #fileContents;
    constructor(filePath) {
        this.#filePath = filePath;
        this.#fileContents = fs.readFileSync(filePath).toString();
        console.log('file read from disk');
    }
    get contents() { return this.#fileContents; }
    get fileName() { 
        return path.basename(this.#filePath);
    }
    get filePath() { return this.#filePath; }
    get size() { 
        return fs.statSync(this.#filePath).size;
    }
} 

// The virtual proxy simulates the operations of a real object 
// postponing creating the object until it is necessary
class FileVirtualProxy {
    #file;
    #filePath;
    constructor(filePath) {
        this.#filePath = filePath;
    }
    _getFile() {
        if(!this.#file) {
            this.#file = new File(this.#filePath);
        }
        return this.#file;
    }
    get contents(){ 
        return this._getFile().contents;
    }
    get size() {
        return this._getFile().size;
    }
    get filePath() { return this.#filePath; }
    get fileName() { return path.basename(this.#filePath); }
}

console.log('*** bare metal ***')
const f1 = new File('./readme.md');
console.log(f1.fileName);
console.log(f1.size);
console.log(f1.contents)
console.log('*** file virtual proxy ***');

const fproxy1 = new FileVirtualProxy('./protection-proxy.js');
console.log(fproxy1.fileName);
console.log(fproxy1.filePath);
console.log(fproxy1.size);
console.log(fproxy1.contents)