// represents a chess piece
class Piece {
    _cell;
    _mediator;
    constructor(mediator, cell) {
        this._cell = cell;
        this._mediator = mediator;
        this._mediator.addPiece(this._cell, this);
    }
    moveTo(newCell) {
        this._mediator.move(this._cell, newCell);
    }
}

class Board {
    _positions = {};
    _mediator;
    constructor(mediator) {
        this._mediator = mediator;
    }
    move(cell1, cell2) {
        const hadPiece = !!this._positions[cell2];
        this._positions[cell2] = this._positions[cell1];
        delete this._positions[cell1];
        this._mediator.pieceMoved(cell1, cell2);
        hadPiece && this._mediator.pieceCaptured(cell2);
    }
    addPiece(cell, piece) {
        this._positions[cell] = piece;
        this._mediator.pieceAdded(cell);
    }
    getPiece(cell) {
        const result = this._positions[cell];
        this._mediator.pieceGotten(cell);
        return result;
    }

}

// never calls mediator so no need to add it in its construction
class CellEvent {
    pieceMoved(cell1, cell2) {
        console.log('Piece was moved from cell', cell1, 'to cell', cell2);
    }
    pieceAdded(cell) {
        console.log('A piece was added to cell', cell);
    }
    pieceGotten(cell) {
        console.log('A piece was gotten on cell', cell);
    }
    pieceCaptured(cell) {
        console.log('The piece at cell', cell, 'was captured');
    }
}

// This is a manual mediator. Its methods manually send requests to related objects.
// New objects which should be notified will have to be registered on the mediator 
// and the mediator also has to be modified to send requests to the new object.
class Mediator {
    /** @type { Board } */
    _board; 
    /** @type { CellEvent } */
    _cellEvent;
    registerBoard(board){
        this._board = board;
    }
    registerCellEvent(cellEvent) {
        this._cellEvent = cellEvent;
    }
    // we dont need to register Piece because we wont be ever send notifications from mediator to piece

    // --- notify methods ----
    // from piece
    addPiece(cell, piece) {
        this._board.addPiece(cell, piece);
    }
    move(cell1, cell2) {
        this._board.move(cell1, cell2);
    }
    // from board
    pieceMoved(cell1, cell2) {
        this._cellEvent.pieceMoved(cell1, cell2);
    }
    pieceCaptured(cell) {
        this._cellEvent.pieceCaptured(cell);
    }
    pieceAdded(cell) {
        this._cellEvent.pieceAdded(cell);
    }
    pieceGotten(cell) {
        this._cellEvent.pieceGotten(cell);
    }
    
}

module.exports = { CellEvent, Piece, Mediator, Board }