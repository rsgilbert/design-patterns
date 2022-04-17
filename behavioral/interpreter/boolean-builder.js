
// build boolean expression

const { OrExp, BooleanExp, AndExp, NotExp, VariableExp, Constant } = require("./boolean-exp");

class BooleanExpBuilder {
    /** @type { BooleanExp } */
    expr;

    _exprFor(expr) {
        if(typeof expr === 'string') {
            return new VariableExp(expr);
        }
        if(typeof expr === 'boolean') {
            return new Constant(expr);
        }
        return expr;
    }
    /** @param { BooleanExp | string | boolean } other */
    or(other){
        this.expr = new OrExp(this.expr, this._exprFor(other));
        return this;
    }
    /** @param { BooleanExp | string | boolean } other */
    and(other) {
        this.expr = new AndExp(this.expr, this._exprFor(other));
        return this;
    }
    not() {
        this.expr = new NotExp(this.expr);
        return this;
    }
    first(expr) {
        this.expr = this._exprFor(expr);
        return this;
    }

    build() {
        return this.expr;
    }
}

module.exports =  { BooleanExpBuilder };