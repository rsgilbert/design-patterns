// A logging proxy keeps a history of requests to the service object
// and logs each request before passing it to the real subject / service.
// A logging proxy thus helps keep an audit trail on how the real subject is being used by its clients.
class Activity {
    sleep() {
        console.log('I am sleeping')
    }
    wakeup() {
        console.log('I am waking up')
    }
}

class ActivityLoggingProxy {
    constructor() {
        this._activity = new Activity();
    }
    sleep(){ 
        this._activity.sleep();
        console.log('executed sleep at', new Date());
    }
    wakeup() {
        this._activity.wakeup();
        console.log('executed wakeup at', new Date());
    }
}

console.log('** bare metal **')
const act = new Activity();
act.sleep();
act.wakeup();
console.log('** activity logging proxy. Keep a history of requests sent to subject. Be watchful! **')
const actProxy1 = new ActivityLoggingProxy();
actProxy1.sleep();
actProxy1.wakeup();