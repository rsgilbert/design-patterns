import { jest } from '@jest/globals';
import { GUIFactory, macFactory, winFactory, linuxFactory, androidFactory } from "./gui-factory";

describe('gui factory', () => {
    let guiFactory: GUIFactory;
    let origLog;

    describe('windows', () => {
        beforeEach(() => {
            guiFactory = winFactory;
            origLog = console.log;
            console.log = jest.fn();
        });

        afterEach(() => {
            console.log = origLog;
        });
        
        it('creates windows button', () => {
            const button = guiFactory.createButton();
            button.paint();
            expect(console.log).toHaveBeenCalledWith('Painting a button on a Windows computer');
        });

        it('creates windows checkbox', () => {
            const checkbox = guiFactory.createCheckbox();
            checkbox.toggle();
            expect(console.log).toHaveBeenCalledWith('Toggled windows checkbox');
            checkbox.hide();
            expect(console.log).toHaveBeenCalledWith('Hid windows checkbox')
        });
    });

    describe('mac', () => {
        beforeEach(() => {
            guiFactory = macFactory;
            origLog = console.log;
            console.log = jest.fn();
        });

        afterEach(() => {
            console.log = origLog;
        });
        
        it('creates mac button', () => {
            const button = guiFactory.createButton();
            button.paint();
            expect(console.log).toHaveBeenCalledWith('Painting a button on a Mac computer');
        });

        it('creates mac checkbox', () => {
            const checkbox = guiFactory.createCheckbox();
            checkbox.toggle();
            expect(console.log).toHaveBeenCalledWith('Toggled mac checkbox');
            checkbox.hide();
            expect(console.log).toHaveBeenCalledWith('Hid mac checkbox')
        });
    });

    describe('linux', () => {
        beforeEach(() => {
            guiFactory = linuxFactory;
            origLog = console.log;
            console.log = jest.fn();
        });

        afterEach(() => {
            console.log = origLog;
        });
        
        it('creates linux button', () => {
            const button = guiFactory.createButton();
            button.paint();
            expect(console.log).toHaveBeenCalledWith('Painting a button on a linux computer');
        });

        it('creates linux checkbox', () => {
            const checkbox = guiFactory.createCheckbox();
            checkbox.toggle();
            expect(console.log).toHaveBeenCalledWith('Toggled linux checkbox');
            checkbox.hide();
            expect(console.log).toHaveBeenCalledWith('Hid linux checkbox')
        });
    });

    describe('android', () => {
        beforeEach(() => {
            guiFactory = androidFactory;
            origLog = console.log;
            console.log = jest.fn();
        });

        afterEach(() => {
            console.log = origLog;
        });
        
        it('creates android button', () => {
            const button = guiFactory.createButton();
            button.paint();
            expect(console.log).toHaveBeenCalledWith('Painting a button on an android device');
        });

        it('creates android checkbox', () => {
            const checkbox = guiFactory.createCheckbox();
            checkbox.toggle();
            expect(console.log).toHaveBeenCalledWith('Toggled android checkbox');
            checkbox.hide();
            expect(console.log).toHaveBeenCalledWith('Hid android checkbox')
        });
    });
});