// handle events using commands

class Command {
    execute(){}
}


class OpenUrlCmd extends Command {
    url;
    constructor(url) {
        super();
        this.url = url;
    }
    execute(){
        console.log('openning url', this.url);
    }
}

class AnchorTag {
    #url;
    /** @type { Command } */
    onClickCmd;
    constructor(url) {
        this.url = url;
    }
    set url(arg) {
        this.#url = arg;
        this.onClickCmd = new OpenUrlCmd(this.#url);
    }
    click() {
        this.onClickCmd.execute();
    }
}

const a = new AnchorTag('http://localhost');
a.click();