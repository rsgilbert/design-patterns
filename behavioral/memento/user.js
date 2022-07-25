// A memento can also store context.
// We can use a memento to store the details of the user making the requests.
// In this way, we can perform actions based on the current user, for example
// we can decide whether they have permissions to do xyz

class Server {
    constructor() {
        console.log("Creating admin token");
        const adminExpiryDate = new Date();
        adminExpiryDate.setMinutes(adminExpiryDate.getMinutes() + 10);
        console.log("Admin token is", JSON.stringify({
            expiryDate: adminExpiryDate.getTime(),
            isAdmin: true,
            name: "Administrator"
        }));
    }

    issueToken(name, isAdmin, token) {
        if(this.validateTokenExpiry(token) && this.validateAdmin(token)) {
            const expiryDate = new Date()
            expiryDate.setSeconds(expiryDate.getSeconds() + 10)
            return JSON.stringify({
                expiryDate: expiryDate.getTime(),
                isAdmin,
                name
            });
        }
    }

    /**
     * Returns name of the user making the request based on their bearer token
     * @param token
     */
    whoAmI(token) {
        if(this.validateTokenExpiry(token)) {
            return this._user(token).name;
        }
    }

    /**
     * Internal method
     * @param token
     * @returns {any}
     * @private
     */
    _user(token) {
        try {
            return JSON.parse(token);
        }
        catch (e) {
            console.log("Bad token", e.message);
        }
    }

    validateTokenExpiry(token) {
        if(!this._user(token)) return false;
        if(this._user(token)?.expiryDate < new Date().getTime()) {
            console.log("This token has already expired");
            return false;
        }
        return true;
    }
    validateAdmin(token) {
        if(!this._user(token)) return false;
        if(!this._user(token)?.isAdmin) {
            console.log("You are not an admin");
            return false;
        }
        return true;
    }

    serverTime(token) {
        if(this.validateTokenExpiry(token) && this.validateAdmin(token)) {
            return new Date();
        }
    }
}

// creaated by first running the program with a bad token
const initialToken = "{\"expiryDate\":1658723306228,\"isAdmin\":true,\"name\":\"Administrator\"}";
const server01 = new Server();
const tk1 = server01.issueToken("Johnson", false, initialToken);
const tk2 = server01.issueToken("Maleka", true, initialToken);

console.log(server01.whoAmI(tk1));
console.log(server01.whoAmI(tk2));
console.log(server01.serverTime(tk1));
console.log(server01.serverTime(tk2));