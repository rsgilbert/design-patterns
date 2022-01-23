export interface Checkbox {
    toggle();
    hide();
}

export class WinCheckbox implements Checkbox {
    toggle() {
        console.log('Toggled windows checkbox');
    }
    hide() {
        console.log('Hid windows checkbox');
    }
}

export class MacCheckbox implements Checkbox {
    toggle() {
        console.log('Toggled mac checkbox');
    }
    hide() {
        console.log('Hid mac checkbox');
    }
}

export class LinuxCheckbox implements Checkbox {
    toggle() {
        console.log('Toggled linux checkbox');
    }
    hide() {
        console.log('Hid linux checkbox');
    }
}

export class AndroidCheckbox implements Checkbox {
    toggle() {
        console.log('Toggled android checkbox');
    }
    hide() {
        console.log('Hid android checkbox');
    }
}

