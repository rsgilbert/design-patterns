
import { MazeFactory } from "./abstract-factory/maze-factory";
import { Door, Maze, Room, Wall, MazeInt, Direction } from "./maze-setup";

/** Creates the maze */
export class MazeGame {
    static createMaze() : MazeInt {
        let aMaze: Maze = new Maze();
        let r1: Room = new Room(1);
        let r2: Room = new Room(2);
        let theDoor: Door = new Door(r1, r2);

        aMaze.addRoom(r1);
        aMaze.addRoom(r2);

        r1.setSide(Direction.North, new Wall());
        r1.setSide(Direction.East, theDoor);
        r1.setSide(Direction.South, new Wall());
        r1.setSide(Direction.West, new Wall());

        r2.setSide(Direction.North, new Wall());
        r2.setSide(Direction.East, new Wall());
        r2.setSide(Direction.South, new Wall());
        r2.setSide(Direction.West, theDoor);
        return aMaze;
    }

    static createMazeUsingFactory(mazeFactory: MazeFactory) {
        let maze = mazeFactory.makeMaze();
        let r1 = mazeFactory.makeRoom(1);
        let r2 = mazeFactory.makeRoom(2);
        let theDoor = mazeFactory.makeDoor(r1, r2);


        maze.addRoom(r1);
        maze.addRoom(r2);

        r1.setSide(Direction.North, new Wall());
        r1.setSide(Direction.East, theDoor);
        r1.setSide(Direction.South, new Wall());
        r1.setSide(Direction.West, new Wall());

        r2.setSide(Direction.North, new Wall());
        r2.setSide(Direction.East, new Wall());
        r2.setSide(Direction.South, new Wall());
        r2.setSide(Direction.West, theDoor);
        return maze;
    }
}
