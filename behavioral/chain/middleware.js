class Activity  {
    activityDescription;
    /** @type { Array<()=>void> } */
    middleware = [];
    constructor(activityDescription) {
        this.activityDescription = activityDescription;
    }

    /** @param { (next: ()=> void) => void } handler */
    addMiddleware(handler) {
        this.middleware = [...this.middleware, handler];
    }

    runMiddleware() {
        const self = this;
        function done() { self.act(); }
        const middleware = [...this.middleware, done];
        let i = 0;
        function next() {
            middleware[i++](next);
        };
        next();
    }
    act() {
        console.log('Performing activity', this.activityDescription);
    }

    performActivity()  {
        this.runMiddleware();
        console.log('done!')
    }
}




const activity1 = new Activity('cleaning compound');
activity1.addMiddleware(function loggingMiddleware(next) {
    console.log('before going to next')
    next();
    console.log('after next');
});

function secondMiddleware(next) {
    console.log('I am the second middleware and I have started');
    next();
    console.log('second middleware finished')
}
activity1.addMiddleware(secondMiddleware)
activity1.performActivity();