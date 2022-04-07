import { Direction, Door, Maze, Room, Wall } from "../maze-setup";

/**
 * The MazeBuilder class defines the following interface
 * for building mazes.
 */  
export interface MazeBuilder {
    buildMaze(): void;
    buildRoom(room: number): void;
    buildDoor(roomFrom: number, roomTo: number): void;
    getMaze(): Maze;
}

/**
 * Abstract Base Class (ABC) for creating mazes. Note that this class doesnot
 * create mazes itself. Its main purpose is to define a base class for creating mazes.
 * It defines empty implementations primarily for convenience.
 * Subclasses of MazeBuilder do the actual work.
 */
export abstract class AbstractMazeBuilder implements MazeBuilder {
    buildMaze(){ }
    buildRoom(room: number) {}
    buildDoor(roomFrom: number, roomTo: number) {}
    abstract getMaze();
}


/**
 * Concrete implementation of maze builder. Provides an 
 * implementation that builds simple mazes.
 */
export class StandardMazeBuilder extends AbstractMazeBuilder {
    _currentMaze: Maze;
    buildMaze() {
        this._currentMaze = new Maze();
    }
    // Looks up both rooms in the maze and finds their adjoining wall.
    buildDoor(roomFrom: number, roomTo: number) {
        let r1 = this._currentMaze.roomNo(roomFrom);
        let r2 = this._currentMaze.roomNo(roomTo);
        let d = new Door(r1, r2);
        // set side on r1 and r2 using common wall
    }
    /** Creates a room and builds walls around it. */
    buildRoom(room: number) {
        const r = new Room(room);
        this._currentMaze.addRoom(r);
        r.setSide(Direction.North, new Wall());
        r.setSide(Direction.East, new Wall());
        r.setSide(Direction.South, new Wall());
        r.setSide(Direction.West, new Wall());
    }

    getMaze() { return this._currentMaze; }

    /** Determines the direction of the common wall between two rooms. */
    private commonWall(room1: Room, room2: Room) : Direction {
        return;
    }
}


/**
 * This builder doesn't create a maze at all. It just counts the
 * different kinds of components that would have been created.
 */
export class CountingMazeBuilder extends AbstractMazeBuilder {
    _doors;
    _rooms;
    constructor() {
        super();
        this._doors = this._rooms = 0;
    }
    buildRoom(room: number) { this._rooms ++; }
    buildDoor(roomFrom: number, roomTo: number) { this._doors++; }

    getMaze() { throw Error('Not implemented') }
    getCount() {
        return { rooms: this._rooms, doors: this._doors }
    }
}