class TCPConnection {
    /** @type {TCPState} */
    #state = new TCPClosedState(this);

    get state() {
        return this.#state
    }
    set state(st) {
        this.#state = st 
        this.#state.connection = this 
    }

    sendData(remoteAddr, data) {
        this.state.open(remoteAddr)
        this.state.synchronize()
        this.state.transmit(data)
        this.state.close()

    }
}
class TCPState {
    /** @type {TCPConnection} */
    connection;

    constructor(conn) {
        this.connection = conn;
    }

    transmit(data) {
        throw Error('not implemented')
    }
    open(remoteAddr) {
        throw Error('not implemented')
    }
    close() {
        throw Error('not implemented')
    }
    synchronize() {
        throw Error('not implemented')
    }
}

class TCPEstablishedState extends TCPState {
    transmit(data) {
        console.log('transmitting data', data)
    }
    close() {
        console.log('closing tcp connection')
        this.connection.state = new TCPClosedState() // we changed state
    }

}

class TCPClosedState extends TCPState {
    open(remoteAddr) {
        console.log('opening a new tcp connection to', remoteAddr)
        this.connection.state = new TCPOpenState()
    }
}

class TCPOpenState extends TCPState {
    close() {
        console.log('closing a tcp connection')
        this.connection.state = new TCPClosedState()
    }
    synchronize() {
        console.log('synchronizing data')
        this.connection.state = new TCPEstablishedState()
    }
}

const conn = new TCPConnection()
conn.sendData('10.10.10.5', '10010101')