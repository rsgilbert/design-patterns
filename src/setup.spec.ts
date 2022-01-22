import MazeGame from './setup.js'
// import { jest } from '@jest/globals'

describe('MazeGame', () => {
    test('Creeates maze', () => {
        const maze = MazeGame.createMaze();
        expect(maze.rooms).toHaveLength(2);
    });
});