// Represent a calculation as an abstract 
// syntax tree using the interpreter pattern

/** @returns {any} */
function notImplemented() {
    throw new Error('Not implemented')
}

class Expression {

    /**
     * interprete is an interpreter that returns the calculation represented by
     * the abstract syntax tree.
     * @returns { number } */
    interprete(context){ return notImplemented() }
    /**
     * toString is also an interpreter that returns the string
     * representation of the abstract syntax tree
     * @param {*} context 
     * @returns 
     */
    toString(context){ return this.interprete(context).toString(); }
}

class BinaryExpression extends Expression {
    _operand1;
    _operand2;
    _operator;
    /**
     * 
     * @param {Expression} operand1 
     * @param {Expression} operand2 
     */
    constructor(operand1, operand2) {
        super();
        this._operand1 = operand1;
        this._operand2 = operand2;
    }
    interprete(context){ return notImplemented(); }
    toString(context){
        return `(${this._operand1.toString(context)} ${this._operator} ${this._operand2.toString(context)})`
    }
}

class AddExpression extends BinaryExpression {
    _operator = '+'
    interprete(context) {
        return this._operand1.interprete(context) +
            this._operand2.interprete(context); 
    }
}

class SubtractExpression extends BinaryExpression {
    _operator = '-';
    interprete(context) {
        return this._operand1.interprete(context) -
            this._operand2.interprete(context); 
    }
}
class DivideExpression extends BinaryExpression {
    _operator = '/';
    interprete(context) {
        return this._operand1.interprete(context) /
            this._operand2.interprete(context); 
    }
}

class MultiplyExpression extends BinaryExpression {
    _operator = '*';
    interprete(context) {
        return this._operand1.interprete(context) *
            this._operand2.interprete(context); 
    }
}
class PowerExpression extends BinaryExpression {
    _operator = '**';
    interprete(context) {
        return this._operand1.interprete(context) **
            this._operand2.interprete(context); 
    }
}

class VariableExpression extends Expression {
    _variable;
    /** @param { string } variable */
    constructor(variable) {
        super();
        this._variable = variable;
    }
    interprete(context) {
        return context[this._variable];
    }
}

class ConstantExpression extends Expression {
    _constant;
    constructor(constant) {
        super();
        this._constant = constant;
    }
    interprete(context){
        return this._constant;
    }
}

class UnaryExpression extends Expression {
    _operand;
    constructor(operand) {
        super();
        this._operand = operand;
    }
}

class SquareExpression extends UnaryExpression {
    interprete(context) {
        return this._operand.interprete(context) ** 2;
    }
    toString(context) {
        return `(${this._operand.interprete(context)} ** 2)`
    }
}


class CalcExpressionBuilder {
     /** @type { Expression } */
     expr;

     _exprFor(expr) {
         if(typeof expr === 'string') {
             return new VariableExpression(expr);
         }
         if(typeof expr === 'number') {
             return new ConstantExpression(expr);
         }
         return expr;
     }
     /** @param { Expression | string | number } other */
     add(other){
         this.expr = new AddExpression(this.expr, this._exprFor(other));
         return this;
     }
     /** @param { Expression | string | number } other */
     subtract(other) {
         this.expr = new SubtractExpression(this.expr, this._exprFor(other));
         return this;
     }
     /** @param { Expression | string | number } other */
     multiply(other) {
        this.expr = new MultiplyExpression(this.expr, this._exprFor(other));
        return this;
    }
    /** @param { Expression | string | number } other */
    divide(other) {
        this.expr = new DivideExpression(this.expr, this._exprFor(other));
        return this;
    }
    /** @param { Expression | string | number } other */
    power(other) {
        this.expr = new PowerExpression(this.expr, this._exprFor(other));
        return this;
    }
    square() {
        this.expr = new SquareExpression(this.expr);
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

module.exports = { CalcExpressionBuilder }