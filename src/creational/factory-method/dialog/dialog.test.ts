import { CorrectWrongDialog, Dialog, TrueFalseDialog, YesNoDialog } from "./dialog"
import { beforeEach, expect, jest } from '@jest/globals';

describe('dialog', () => {
    let dialog: Dialog;

    beforeEach(() => {
        console.log = jest.fn();
    })

    test('yes no dialog', () => {
        dialog = new YesNoDialog();
        dialog.render();
        dialog.click(true);
        expectSecLogToBe(0, 'Yes');
        dialog.click(false)
        expect(expectSecLogToBe(1, 'No'));
    });
    test('true false dialog', () => {
        dialog = new TrueFalseDialog();
        dialog.render();
        dialog.click(true);
        expectSecLogToBe(0, 'True');
        dialog.click(false)
        expect(expectSecLogToBe(1, 'False'));
    });
    test('Correct Wrong dialog', () => {
        dialog = new CorrectWrongDialog();
        dialog.render();
        dialog.click(true);
        expectSecLogToBe(0, 'Correct');
        dialog.click(false)
        expect(expectSecLogToBe(1, 'Wrong'));
    });
});


function secondConsoleLogArg(callNo) {
    return console.log['mock']['calls'][callNo][1];
} 

function expectSecLogToBe(callNo, v) {
    expect(secondConsoleLogArg(callNo)).toBe(v);
}