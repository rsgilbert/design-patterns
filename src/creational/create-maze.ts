
import { MazeFactory } from "./abstract-factory/maze-factory";
import { MazeBuilder, CountingMazeBuilder } from "./builder/maze-builder";
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

    static createMazeUsingBuilder(mazeBuilder: MazeBuilder) : Maze {
        mazeBuilder.buildMaze();
        mazeBuilder.buildRoom(1);
        mazeBuilder.buildRoom(2);
        mazeBuilder.buildDoor(1, 2);
        return mazeBuilder.getMaze();
    }

    // director
    static createComplexMazeUsingBuilder(mazeBuilder: MazeBuilder) : Maze {
        mazeBuilder.buildMaze();
        mazeBuilder.buildRoom(1);
        mazeBuilder.buildRoom(2);
        mazeBuilder.buildRoom(3);
        mazeBuilder.buildRoom(4);
        mazeBuilder.buildRoom(5);
        mazeBuilder.buildRoom(6);
        mazeBuilder.buildRoom(7);
        mazeBuilder.buildRoom(8);
        return mazeBuilder.getMaze();
    }

    // Below static method is a director for getting count of parts using a builder
    static countPartsOfAMaze(countingMazeBuilder: CountingMazeBuilder): { rooms: number, doors: number } {
        countingMazeBuilder.buildMaze();
        countingMazeBuilder.buildRoom(1);
        countingMazeBuilder.buildRoom(2);
        countingMazeBuilder.buildRoom(3);
        countingMazeBuilder.buildRoom(4);
        countingMazeBuilder.buildRoom(5);
        countingMazeBuilder.buildDoor(1, 2);
        countingMazeBuilder.buildDoor(4, 3);
        return countingMazeBuilder.getCount();
    }
}
