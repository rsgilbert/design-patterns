import { MazeGame } from './create-maze.js'
import { jest } from '@jest/globals'
import { BombedMazeFactory, EnchantedMazeFactory } from './abstract-factory/maze-factory.js';
import { EnchantedMaze } from './maze-setup.js';
import { CountingMazeBuilder, StandardMazeBuilder } from './builder/maze-builder.js'
describe('MazeGame', () => {
    test('Create maze', () => {
        const maze = MazeGame.createMaze();
        expect(maze.rooms).toHaveLength(2);
    });

    test('normal maze created', () => {
        let origLog = console.log;
        console.log = jest.fn();
        const maze = MazeGame.createMaze();
        expect(console.log).toHaveBeenCalledWith('Normal maze created');
        console.log = origLog;
    });


    test('Create maze using factory', () => {
        const maze = MazeGame.createMazeUsingFactory(new EnchantedMazeFactory());
        expect(maze.rooms).toHaveLength(2);
    });

    test('EnchantedMazeFactory creates enchanted maze', () => {
        let origLog = console.log;
        console.log = jest.fn();
        const maze = MazeGame.createMazeUsingFactory(new EnchantedMazeFactory());
        expect(console.log).toHaveBeenCalledTimes(2);
        expect(console.log).toHaveBeenLastCalledWith("Enchanted maze created");
        console.log = origLog;
    });

    test('BombedMazeFactory creates maze with bomb feature', () => {
        let origLog = console.log;
        console.log = jest.fn();
        const maze = MazeGame.createMazeUsingFactory(new BombedMazeFactory());
        expect(console.log).toHaveBeenCalledTimes(3);
        console.log = origLog;
    });

    // builder 
    test('create maze using builder', () => {
        let mazeBuilder = new StandardMazeBuilder();
        const maze = MazeGame.createMazeUsingBuilder(mazeBuilder);
        expect(maze.rooms).toHaveLength(2);
    });

    test('create complex maze using builder', () => {
        let mazeBuilder = new StandardMazeBuilder();
        const maze = MazeGame.createComplexMazeUsingBuilder(mazeBuilder);
        expect(maze.rooms).toHaveLength(8);
    });

    // counting builder
    test('counts rooms and doors in a maze', () => { 
        let countingMazeBuilder = new CountingMazeBuilder();
        const count = MazeGame.countPartsOfAMaze(countingMazeBuilder);
        expect(count.doors).toBe(2);
        expect(count.rooms).toBe(5);
    });
});