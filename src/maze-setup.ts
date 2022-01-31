export enum Direction { 
    North, South, East, West
}

/**
 * Common abstract class for all the components of a maze
 * 
 */
export abstract class MapSite {
    public abstract enter() : void 
}

/**
 * Room interface.
 * Determines the key relationships between components in the maze.
 */
export interface RoomInt extends MapSite {
    getSide(direction: Direction): MapSite;
    setSide(direction: Direction, mapSite: MapSite): void;
    _sides: [MapSite, MapSite, MapSite, MapSite]; 
    _roomNumber: number;
}

export class Room implements RoomInt {
    _sides: [MapSite, MapSite, MapSite, MapSite];
    _roomNumber: number;
    
    constructor(roomNo) {
        this._roomNumber = roomNo;
    }

    enter() { console.log('Entered room')}
    getSide(direction: Direction): MapSite { return; }
    setSide(direction: Direction, mapSite: MapSite): void  { return; }
}


/**
 * Represents wall that can occur on any side of the room.
 */
export interface WallInt extends MapSite {

}

export class Wall implements WallInt {
    enter() {
        console.log('Entered through wall')
    }
}

/**
 * Represents a door that can occur on any side of the room.
 */
export interface DoorInt extends MapSite {
    otherSideFrom(room: RoomInt) : RoomInt;
    _room1: RoomInt;
    _room2: RoomInt;
    _isOpen: boolean;
}

export class Door implements DoorInt {
    _room1: RoomInt;
    _room2: RoomInt;
    _isOpen: boolean;
    constructor(room1: Room, room2: Room) {
        this._room1 = room1;
        this._room2 = room2;
    }
    enter() {
        console.log('Passed through door')
    }
    otherSideFrom(room: RoomInt) : RoomInt {
        return;
    }
}

export interface MazeInt {
    addRoom(room: RoomInt);
    roomNo(roomNo: number): RoomInt;
    rooms: Room[];
}

export class Maze implements MazeInt {
    _rooms: Room[] = []

    constructor() {
        console.log('Normal maze created');
    }

    get rooms() { return this._rooms; }
    addRoom(room: RoomInt){
        this._rooms.push(room);
    }
    
    roomNo(roomNo: number): RoomInt {
        return this._rooms.find(r => r._roomNumber === roomNo);
    }
}

export class EnchantedMaze extends Maze {
    _rooms: Room[] = []

    constructor() {
        super();
        console.log('Enchanted maze created');
    }
}


export class BombedWall extends Wall {
    constructor() {
        super();
        console.log('This wall could be bombed')
    }
}

export class RoomWithBomb extends Room {
    constructor(roomNo) {
        console.log('This room might have a bomb');
        super(roomNo);
    }
}










