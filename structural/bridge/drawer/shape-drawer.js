// @ts-check

const { WriteImpl } = require('./write-impl.js');

// shape drawer
// Uses the write implementation to draw shapes

class ShapeDrawer {
    _writeImpl;
    /**
     * 
     * @param {WriteImpl} writeImpl 
     */
    constructor(writeImpl) {
        this._writeImpl = writeImpl;
    }
    draw(){}
}

class SquareDrawer extends ShapeDrawer {
    /** @override */
    draw() {
        this._writeImpl.verticalBar();
        this._writeImpl.horizontalLine();
        this._writeImpl.horizontalLine();
        this._writeImpl.verticalBar();
    }
}

class TriangleDrawer extends ShapeDrawer {
    /** @override */
    draw(){ 
        this._writeImpl.forwardSlash();
        this._writeImpl.horizontalLine();
        this._writeImpl.backSlash();
    }
}

class CircleDrawer extends ShapeDrawer {
    /** @override */
    draw() {
        this._writeImpl.arc(360);
    }
}

module.exports = {
    ShapeDrawer, SquareDrawer, TriangleDrawer, CircleDrawer
}