
class Handler {
    /** @type { Handler } */
    next;
    constructor(next) {
        this.next = next;
    }
    handle(task) {
        if(this.next) {
            return this.next.handle(task);
        }
        console.log('Default handler handing')
    }
}

class Chairman extends Handler {
    handle(task) {
        if(task?.isSimple)
            console.log('processed by chairman');
        else return super.handle(task);
    }
}

class PrimeMinister extends Handler {
    handle(task) {
        if(task?.isHard) {
            console.log('hard enough so I prime minister will do it')
        }
        else return super.handle(task);
    }
}

class President extends Handler {
    handle(task) {
        if(task) {
            console.log('The task is presidential level');
        }
        else return super.handle(task);
    }
}

// action 
const task1 = { NOTisHard: true }

const pres = new President();
const prime = new PrimeMinister(pres);
const chair = new Chairman();
chair.next = prime;

chair.handle(null);