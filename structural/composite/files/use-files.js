// @ts-check
const { Directory, FileLocation, File } = require('./file.js')

function testFiles(){ 
    const basePath = '/Users/gilbert/Projects/node/learning/design-patterns/structural/composite'
    const dir1 = new Directory(basePath);
    dir1.addChild(new File(basePath + '/readme.md'));
    const dir2 = new Directory(basePath + '/files');
    dir1.addChild(dir2);
    dir2.addChild(new File(dir2.filePath + '/use-files.js'));
    dir2.addChild(new File(dir2.filePath + '/file.js'));

    // same interface for both composite directory and individual file

    // methods on directories
    console.log(dir1.fileCount()); // 3
    console.log(dir1.size()); // 2771
    console.log(dir2.sizeInKb()); // 2.2
    dir1.print();

    // methods on files
    console.log("** file **")
    const f1 = new File(basePath + '/readme.md');
    // f1.addChild(f1); throws error
    console.log(f1.fileCount());
    console.log(f1.size());
    console.log(f1.sizeInKb());
    f1.print();


}

testFiles();