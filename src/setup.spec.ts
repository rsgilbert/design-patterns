import MazeGame from './setup.js'

describe('MazeGame', () => {
    test('Creeates maze', () => {
        // console.log = jest.fn;
        MazeGame.createMaze();
        expect(console.log).toHaveBeenCalled();
    });
});