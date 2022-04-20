const { CellEvent, Piece, Board, Mediator } = require('./chess.js');

function playGame1() {
    const mediator = new Mediator();
    mediator.registerCellEvent(new CellEvent());
    mediator.registerBoard(new Board(mediator));

    const blackKnight = new Piece(mediator, 'B8');
    const whiteQueen = new Piece(mediator, 'D1');
    const blackPawn = new Piece(mediator, 'D7');
    blackKnight.moveTo('C6');
    whiteQueen.moveTo('D7');
    blackPawn.moveTo('D6')
    
}

playGame1();