
import { Door, Maze, Room, Wall, MazeInt, Direction, EnchantedMaze, RoomWithBomb, BombedWall } from "../maze-setup.js";

/** 
 * MazeGame (and its subclasses) is the Creator class in factory method pattern.
 * The Product classes are the Room, Door, Maze and Wall classes.
 * Creates the maze */
export class MazeGame {
    // factory methods 
    createMaze() {
        return new Maze();
    }
    createDoor(r1, r2) {
        return new Door(r1, r2);
    }
    createWall() {
        return new Wall();
    }
    createRoom(n) {
        return new Room(n);
    }

    createMazeGame() : MazeInt {
        let aMaze = this.createMaze();
        let r1 = this.createRoom(1);
        let r2 = this.createRoom(2);
        let theDoor = this.createDoor(r1, r2);

        aMaze.addRoom(r1);
        aMaze.addRoom(r2);

        r1.setSide(Direction.North, this.createWall());
        r1.setSide(Direction.East, theDoor);
        r1.setSide(Direction.South, this.createWall());
        r1.setSide(Direction.West, this.createWall());

        r2.setSide(Direction.North, this.createWall());
        r2.setSide(Direction.East, this.createWall());
        r2.setSide(Direction.South, this.createWall());
        r2.setSide(Direction.West, theDoor);
        return aMaze;
    }

}


export class EnchantedMazeGame extends MazeGame {
    /** @override */
    createMaze() { 
        return new EnchantedMaze();
    }
}

export class BombMazeGame extends MazeGame {
    /** 
     * Here we override a factory method so we return a different subclass of Wall.
     * @override */
    createWall() {
        return new BombedWall();
    }
    /** @override */
    createRoom(roomNo) { 
        return new RoomWithBomb(roomNo);
    }
}