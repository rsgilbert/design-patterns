// @ts-check

// write implementation 
// Does the low level details of writing 

class WriteImpl {
    _col = 'none';
    horizontalLine(){ this._writeSymbol('_')}
    verticalBar() {this._writeSymbol('|')}
    forwardSlash(){ this._writeSymbol('/')}
    backSlash(){ this._writeSymbol('\\')}
    arc(degrees) { this._writeSymbol('(' + degrees + ')')}
    _writeSymbol(symb) {
        console.log(this._color() + symb);
    }
    _color(){ return this._col.toUpperCase() + ' - '; }
}

class RedWriter extends WriteImpl {
    _col = 'red';
}

class BlueWriter extends WriteImpl {
    _col = 'blue'
}

class OrangeWriter extends WriteImpl {
    __col = 'orange'
}



module.exports = {
    WriteImpl, RedWriter, BlueWriter, OrangeWriter
}