// A protection proxy
// A protection proxy provides access control to an object.
// Only authorized clients can access certain functionalities on the real subject


class Bash {
    changePassword() {
        console.log('password changed');
    }
    deleteFile(f) {
        console.log('file', f, 'deleted')
    }
    time(){ 
        console.log('The time is ', new Date());
    }
    listDirectory(d) {
        console.log('This directory contains some files')
    }
}

class BashProtectionProxy {
    #bash;
    #permissions;
    constructor(permissions) {
        this.#permissions = permissions;
        this.#bash = new Bash();
    }
    changePassword() {
        if(this.#permissions.isAdmin){
            this.#bash.changePassword();
        }
        else console.log('Only admins can change passwords')
    }
    deleteFile(f) {
        if(this.#permissions.deleteAllowed) {
            this.#bash.deleteFile(f);
        }
        else console.log('You dont have permissions to delete files')
    }
    time() {
        return this.#bash.time();
    }
    listDirectory(d) {
        if(this.#permissions.executeAllowed && this.#permissions.readAllowed) {
            this.#bash.listDirectory(d);
        }
        else console.log('You dont have permissions for read and execute on a directory');
    }
}

// bare metal access
console.log('*** bare metal ***')
const bash1 = new Bash();
bash1.changePassword();
bash1.time();
bash1.deleteFile('ping.txt');
bash1.listDirectory('/');

console.log('*** protection proxy ***');
const permissions = { readAllowed: true, executeAllowed: true }
const bashProxy1 = new BashProtectionProxy(permissions); // the proxy internally manages the lifecycle of the real subject.
bashProxy1.changePassword();
bashProxy1.time();
bashProxy1.deleteFile('x.py');
bashProxy1.listDirectory('/var');
