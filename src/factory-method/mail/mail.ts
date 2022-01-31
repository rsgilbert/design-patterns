

export class Mail {
    /**
     * Factory method for creating transport.
     * Defaults to land mail. Can be overridden by subclasses.
     **/ 
    createTransport(): MailTransport {
        return new LandTransport();
    } 
    send() {
        let tp = this.createTransport();
        return `Sending a mail using a ${tp.vehicle} travelling on the ${tp.surface} surface`;
    }
}

export class AirMail extends Mail  {
    createTransport() {
        return new AirTransport();
    }
}

export class WaterMail extends Mail {
    createTransport() {
        return new WaterTransport();
    }
}

abstract class MailTransport {
    abstract surface : string;
    abstract vehicle : string;
}

class AirTransport extends MailTransport {
    get surface() { return 'air'; }
    get vehicle() { return 'plane'; }
}

class LandTransport extends MailTransport {
    get surface() { return 'land'; }
    get vehicle() { return 'taxi'; }
}

class WaterTransport extends MailTransport {
    get surface() { return 'water'; }
    get vehicle() { return 'boat'; }
}