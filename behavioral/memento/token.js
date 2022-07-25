// A token stores the state / context of an ongoing operation
// Later on, when its time to resume activities, the token is
// used to restore the state/context/position that the operation was in.
// A token can store variables such as progress made, time spent so far,
// the user making the request etc.
// In this way, the program/object does not have to handle storing its state
// when its about to shut down.

class TimeWaiter {
    #secondsToWait

    constructor(secondsToWait) {
        this.#secondsToWait = secondsToWait;
    }

    doWait() {
        return new Promise((res, rej) => {
            if (this.#secondsToWait <= 0) return rej("Ran out of seconds");
            setTimeout(() => {
                this.#secondsToWait--;
                console.log("Finished a wait, remaining with", this.#secondsToWait, "seconds");
                return res();
            }, 1000);
        });
    }

    createToken() {
        return JSON.stringify({ "_secondsToWait": this.#secondsToWait })
    }
    restoreFromToken(token) {
        this.#secondsToWait = JSON.parse(token)["_secondsToWait"];
    }
}

async function runWaiter() {
    const waiter = new TimeWaiter(5)
    await waiter.doWait();
    await waiter.doWait();
    const token1 = waiter.createToken()
    await waiter.doWait()
    await waiter.doWait()
    waiter.restoreFromToken(token1)
    waiter.doWait()
    waiter.doWait()
}

runWaiter()