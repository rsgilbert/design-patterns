import { BombMazeGame, EnchantedMazeGame, MazeGame } from './fm-create-maze.js'
import { jest } from '@jest/globals'

describe('createMazeGame', () => {
    let origLog
    beforeEach(() => {
        origLog = console.log;
        console.log = jest.fn();
    });
    afterEach(() => {
        console.log = origLog;
    })
    test('Create maze', () => {
        const maze = new MazeGame().createMazeGame();
        expect(maze.rooms).toHaveLength(2);
    });

    test('normal maze game created', () => {
        const maze = new MazeGame().createMazeGame();
        expect(console.log).toHaveBeenCalledWith('Normal maze created');
    });

    test('enchanted maze game created', () => {
        const mazeGame = new EnchantedMazeGame();
        const maze = mazeGame.createMazeGame();
        expect(console.log).toHaveBeenCalledWith('Enchanted maze created');
    });
    test('bomb maze game created', () => {
        const mazeGame = new BombMazeGame();
        const maze = mazeGame.createMazeGame();
        expect(console.log).toHaveBeenCalledWith('This wall could be bombed');
        expect(console.log).toHaveBeenCalledWith('This room might have a bomb');
    });
});