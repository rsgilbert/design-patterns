class Screen {

    /**
     * Template method.
     * Displays content on the screen
     */
    display() {
        this.beforeDisplay()
        this.focus()
        this.render()
        this.afterDisplay()
    }

    /** hook operation */
    beforeDisplay() {}
    /** hook operation */
    afterDisplay() {}

    /**
     * @abstract
     */
    focus() {
        throw Error('Not implemented')
    }
    /** @abstract */
    render() {
        throw Error('Not implemented')
    }
}

class HDScreen extends Screen {
    beforeDisplay(){
        console.log('About to display content on HD screen')
    }
    afterDisplay() {
        console.log('Finished')
    }
    focus() {
        console.log('Focusing screen...')
    }
    render() {
        console.log('Rendering graphics..')
        console.log('Showing tom and jerry')
    }
}

const hd1 = new HDScreen()
hd1.display()