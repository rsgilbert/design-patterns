// A hub object publishes events that other 
// objects subscribe to.
// These objects call methods on the hub to invoke events being fired off from the hub.
// In this way all objects subscribed to events from the hub will be notified. 
// The object that called the method on the hub does not know who is subscribed and the
// objects that have been notified of an event dont know the object that invoked the method 
// which fired off the event.
// In this way the hub serves as a mediator for these objects.
// The hub is able to notify new objects at once.
// New objects can also be setup to receive notifications from the hub or invoke methods on the hub
// without making modifications to existing classes.

const EventEmitter = require('events')

class AuthHub extends EventEmitter {
    emitSignupStarted() {
        console.log('this is', this)
        this.emit('signup_started');
    }
    emitSignupSuccessful(){
        this.emit('signup_successful');
    }
    emitSignupFailed(e) {
        this.emit('signup_failed', e);
    }
    emitLoginStarted() {
        this.emit('login');
    }
    emitLoginSuccessful() {
        return Promise.resolve(this.emit('login_successful'));
    }
    emitLoginFailed(e) {
        this.emit('login_failed', e);
    }
    emitSignoutStarted() {
        this.emit('signout_started');
    }
    emitSignoutSuccessful(){
        this.emit('signout_successful');
    }
    emitSignoutFailed() {
        this.emit('signout_failed');
    }
    emitConfirmStarted() {
        this.emit('confirm_started');
    }
    emitConfirmSuccessful() {
        this.emit('confirm_successful');
    }
}

class Signup {
    _authHub;
    constructor(authHub) {
        this._authHub = authHub;
    }
    signup(){
        this._authHub.emitSignupStarted();
        console.log('I am signing up...');
        console.log('signup looks good so far...');
        this._authHub.emitSignupSuccessful();
        this._authHub.emitConfirmStarted();
    }
}

class Login {
    _authHub;
    /**
     * 
     * @param {AuthHub} authHub 
     */
    constructor(authHub) {
        this._authHub = authHub;
        let self = this;
        this._authHub.on('signup_successful', () => {
            self.login();
        })
    }
    login() {
        this._authHub.emitLoginStarted();
        console.log('We are logging in');
        console.log('Ooops! I think something went wrong');
        this._authHub.emitLoginFailed(new Error('I dont know what went wrong'));
    }
}

class Signout {
    _authHub;
    /** @param {AuthHub} authHub */
    constructor(authHub) {
        this._authHub = authHub;
        const self = this;
        this._authHub.on('login_failed', (e) => {
            console.log('There was error so we are signing out. Error was', e.message);
            self.signout();
        });
    }
    signout() {
        this._authHub.emitSignoutStarted();
        console.log('Signing out....');
        console.log('Done, we are out!');
        this._authHub.emitSignoutSuccessful();
    }
}

class Confirm {
    _authHub;
    /** @param { AuthHub } authHub */
    constructor(authHub) {
        this._authHub = authHub;
        const self = this;
        this._authHub.on('signup_successful', () => {
            self.confirm();
        });
    }
    confirm() {
        this._authHub.emitConfirmStarted();
        console.log('confirming...');
        console.log('Confirmed!');
        this._authHub.emitConfirmSuccessful();
    }
}

const authHub0 = new AuthHub();

const authHub1 = new Proxy(authHub0, {
    get(target, prop, receiver) {
        if(prop.includes('emit')) {
            return function() {
                return process.nextTick(()=>{
                    console.log(prop)
                    return Reflect.get(target, prop, receiver).bind(target);
                });
            }
        }
        return Reflect.get(...arguments);
    }
})

const signup1 = new Signup(authHub1);

// const login1 = new Login(authHub1);
// const signout1 = new Signout(authHub1);
// const confirm1 = new Confirm(authHub1);
signup1.signup();
const login1 = new Login(authHub1);
const signout1 = new Signout(authHub1);
const confirm1 = new Confirm(authHub1);
console.log('fd')