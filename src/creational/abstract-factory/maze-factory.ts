// MazeFactory for creating components of mazes.
// Our abstract factory contains a factory method for each kind of product to 
// create for a given family of products.

import { BombedWall, Door, EnchantedMaze, Maze, Room, RoomWithBomb, Wall } from "../maze-setup";

/**
 * Abstract factory class
 * An instance of the factory represents a factory for a particular family of products.
 * In this implementation of an abstract factory, the abstract factory class is a collection of factory methods.
 */
export abstract class MazeFactory {
    abstract makeMaze() : Maze;
    abstract makeWall() : Wall;
    abstract makeRoom(n: number) : Room;
    abstract makeDoor(r1: Room, r2: Room) : Door;
}


/**
 * Concrete factory class
 */
export class EnchantedMazeFactory extends MazeFactory {
    makeMaze() {
        return new EnchantedMaze();
    }
    makeDoor(r1: Room, r2: Room) {
        return new Door(r1, r2);
    }
    makeWall() { return new Wall(); }
    makeRoom(n: number){ return new Room(n); }

    castSpell() { console.log('Casting spell'); }

}


export class BombedMazeFactory extends MazeFactory {
    makeMaze() {
        return new Maze();
    }
    makeDoor(r1: Room, r2: Room) {
        return new Door(r1, r2);
    }
    makeWall() { return new BombedWall(); }
    makeRoom(n: number){ return new RoomWithBomb(n); }

    castSpell() { console.log('Casting spell'); }
}

