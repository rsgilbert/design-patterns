const _ = require('lodash')

// A macro command consists of other subcommands
class LiveADayCmd {
    cmds = [];
    constructor(...commands) {
        commands.forEach(cmd => this.addCmd(cmd))
    }
    addCmd(cmd){
        this.cmds = [...this.cmds, cmd]
    }
    execute() {
        for(let cmd of this.cmds) {
            cmd.execute();
        }
    }
    unexecute() {
        _.forEachRight(this.cmds, (cmd) => {
            cmd.unexecute();
        });
    }
}

class ShowerCmd {
    execute() {
        console.log('I am showering')
    }
    unexecute(){
        console.log('I shouldnt have showered, so I am dirtying myself');
    }
}

class WakeupCmd {
    execute(){
        console.log('I am waking up');
    }
    unexecute(){ 
        console.log('I am resuming sleep')
    }
}

class DieCmd {
    execute(){
        console.log('I am dying')
    }
    unexecute() {
        console.log('Sorry, dying process is not reversible.')
    }
}

const live1 = new LiveADayCmd(new WakeupCmd(), new ShowerCmd(), new DieCmd())
live1.execute();
console.log("*** done ***")
live1.unexecute();