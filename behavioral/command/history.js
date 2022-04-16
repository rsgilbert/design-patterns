// We can keep track of command operations by using 
// a command history object
const _ = require('lodash')

class CmdHistory {
    cmds = [];
    /**
     * Points to the most recently executed command
     * @type { number }
     */
    position = -1;

    /** We assume the added command has been executed by the client */
    addCmd(cmd) {
        this.cmds = [...this.cmds, cmd];
        this.position = this.cmds.length - 1;
    }
    undo() {
        this.cmds[this.position].unexecute();
        this.position--;
    }
    /**
     * Re-execute most recently unexecuted command.
     * The cmd must also support redo
     */
    redo() {
        this.position++;
        this.cmds[this.position].redo();
    }
}


/**
 * Decorates normal commands so that they can be used with command history
 */
class HistoryCmd {
    cmdHistory;
    cmd;
    constructor(cmd, cmdHistory) {
        this.cmd = cmd;
        this.cmdHistory = cmdHistory;
    }
    execute(){
        this.cmd.execute();
        this.cmdHistory.addCmd(this);
    }
    // Here we dont add the cmd to cmd history
    redo() {
        this.cmd.execute();
    }
    unexecute(){
        this.cmd.unexecute();
    }
}

class DrinkCmd {
    drinkCount = 0;
    execute() {
        console.log('drinking water. Drink count is now', ++this.drinkCount)
    }
    unexecute() {
        console.log('Spitting, drink count back to', --this.drinkCount);
    }
}

class EatCmd {
    eatCount = 0;
    dish = 'bogoya'
    execute() {
        console.log('eating', this.dish, '. eat count is now', ++this.eatCount)
    }
    unexecute() {
        console.log('Stopping to eat', this.dish, ', eat count back to', --this.eatCount);
    }
}

const cmdHist1 = new CmdHistory();
const eatCmd1 = new EatCmd();
const eatWithHist1 = new HistoryCmd(eatCmd1, cmdHist1);

const drinkCmd1 = new DrinkCmd();
const drinkWithHist1 = new HistoryCmd(drinkCmd1, cmdHist1);

eatWithHist1.execute();
eatWithHist1.execute();
eatWithHist1.execute();
drinkWithHist1.execute();
drinkWithHist1.execute();

console.log('**History**')

cmdHist1.undo();
cmdHist1.undo();
cmdHist1.undo();
cmdHist1.undo();
cmdHist1.undo();

cmdHist1.redo();
// cmdHist1.redo();
// cmdHist1.redo();
// cmdHist1.redo();

console.log("** execute again **")
eatWithHist1.execute();
eatWithHist1.execute();
// drinkWithHist1.execute();
cmdHist1.undo();
cmdHist1.redo();

// console.log(cmdHist1);