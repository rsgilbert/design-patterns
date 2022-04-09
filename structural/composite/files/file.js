// @ts-check
// Using composite pattern to represent file system
const _ = require('lodash');
const fs = require('fs')

class FileLocation {
    #filePath;
    children = [];
     /** @param { string } filePath */
     constructor(filePath) {
        this.filePath = filePath;
    }
    fileCount() { return 1; }
    size() { return 0; }
    /** @param { FileLocation } fileLocation  */
    addChild(fileLocation){
        notImplemented();
    }
    /** @param { FileLocation } fileLocation  */
    deleteChild(fileLocation){
        notImplemented();
    }

    set filePath(arg){ 
        // first check if path exists
        fs.statSync(arg);
        this.#filePath = arg;
    }
    get filePath() { return this.#filePath; }

    sizeInKb() { return this.size() / 1024; }
    print() {
        console.log(this.filePath)
    }

}


class File extends FileLocation {
    size() {
        const byteSize = fs.statSync(this.filePath).size;
        return byteSize;
    }
}

class Directory extends FileLocation {
    /** @override /** @param { FileLocation } fileLocation  */
    addChild(fileLocation) {
        this.children = [...this.children, fileLocation]
    }
    /** @override /** @param { FileLocation } fileLocation  */
    deleteChild(fileLocation) {
        this.children = this.children.filter(c => c !== fileLocation)
    }
    size(){ 
        const byteSize = _.sum(this.children.map(c => c.size())) ;
        return byteSize;
    }
    fileCount() {
        return _.sum(this.children.map(c => {
            return c.fileCount();
        }));
    }
    print(){ 
        for(let f of this.children) { f.print(); }
    }
}   

function notImplemented(){
    throw Error('Not implemented')
}


module.exports = {
    Directory, File, FileLocation
}