const fs = require('fs');
const zlib = require('zlib');


class SaveToFile {
    data;

    async save(filePath) {
        const stream = fs.createWriteStream(filePath);
        return new Promise((res, rej) => {
            stream.write(this.data, e => {
                if (e) return rej(e);
                res();
            })
        });
    }
}


// Normal operations. No decoration
const saver = new SaveToFile();
saver.data = 'Munanansi';
saver.save('./my-data.txt')
    .then(v => console.log('successfully saved data'))
    .catch(e => console.log('Failed to save', e));

// Decorate by base64 encoding the data
// implements SaveToFile's interface
class SaveToFileDecorator {
    saver;
    constructor(saver) {
        this.saver = saver;
    }
    set data(arg) { this.saver.data = arg; }
    get data() { return this.saver.data; }
    async save(filePath) { return this.saver.save(filePath); }
}

// base64 decorator 
class Base64Decorator extends SaveToFileDecorator {
    constructor(saver) {
        super(saver);
        this.data = this.data;
    }

    // base64 encode data when setting it
    set data(arg) {
        super.data = this.base64Encode(arg);
    }
    // when we defined setter on subclass we also had to define getter
    get data() { return super.data; }

    base64Encode(arg) {
        return Buffer.from(arg).toString('base64');
    }
}

const base64Saver = new Base64Decorator(saver);
base64Saver.save('./base64-data-1.txt')
    .then(v => console.log('success'))
    .catch(e => { throw e });
base64Saver.data = 'Tuliwano';
base64Saver.save('./base64-data-2.txt')
    .then(v => console.log('success'))
    .catch(e => { throw e });


// Compression decorator
class CompressDecorator extends SaveToFileDecorator {
    // we completely overrwite save method
    async save(filePath) {
        const stream = fs.createWriteStream(filePath);
        return new Promise((res, rej) => {
            // stream
            // .pipe(zlib.createGzip()) // pipe into compressor
            // .write(this.data, e => {
            //     if(e) return rej(e);
            //     res();
            // });
            stream.write(zlib.gzipSync(this.data), e => {
                if (e) return rej(e);
                res();
            })
        });

    }
}

const compressBase64Saver = new CompressDecorator(base64Saver);
compressBase64Saver.save('./compressed-base64.zip')
    .then(v => console.log('compressed and saved'))
    .catch(e => { throw e });

const normalSaver = new SaveToFile();
normalSaver.data = 'Today is my day!';
const compressNormal = new CompressDecorator(normalSaver);
compressNormal.save('./normal-compressed.zip')
.then(d => 'normal successful')
.catch(e => { throw e});