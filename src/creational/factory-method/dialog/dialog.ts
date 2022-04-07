
/**
 * Abstract Creator class. 
 * Declares the factory method that must return an object of a product class.
 */
export abstract class Dialog {
    button: Button;

    /**
     * Factory method for creating objects.
     */
    abstract createButton(): Button;

    render() {
        this.button = this.createButton();
        this.button.onClick(v => {
            console.log('You have chosen', v);
        });
    }

    click(arg) {
        this.button.click(arg);
    }
}

/**
 * Concrete creators.
 */
export class YesNoDialog extends Dialog {
    /** @override */
    createButton(){
        return new YesNoButton();
    }
}

export class CorrectWrongDialog extends Dialog {
    /** @override */
    createButton() {
        return new CorrectWrongButton();
    }
}

export class TrueFalseDialog extends Dialog {
    /** @override */
    createButton() {
        return new TrueFalseButton();
    }
}

/**
 * Abstract product class. Represents the Button object.
 * Overridden by concrete classes.
 */
abstract class Button {
    _onClickHandler;

    abstract click(arg: boolean);

    onClick(fn) {
        this._onClickHandler = fn;
    }
}

class YesNoButton extends Button {
    click(arg) {
        this._onClickHandler(arg ? 'Yes' : 'No');
    }
}

class CorrectWrongButton extends Button {
    click(arg) {
        this._onClickHandler(arg ? 'Correct' : 'Wrong');
    }
}

class TrueFalseButton extends Button {
    click(arg) {
        this._onClickHandler(arg ? 'True' : 'False');
    }
}