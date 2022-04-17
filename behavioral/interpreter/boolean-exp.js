// interprete boolean expressions
// eg true and y or false
// We'll manually build the abstract syntax tree
// using classes defined following the interpreter pattern and then
// call interprete on the root node of the syntax tree.
// Below interpreter supports and, or, not, variable and constant boolean expressions
/**
 * Defines a mapping from variabls to boolean values true or false.
 */
class Context {
    #data;
    /**
     * 
     * @param {Record<string, boolean>} data 
     */
    constructor(data) {
        this.#data = data;
    }
    /**
     * Lookup a value for a given key
     * @param { string } key 
     * @returns { boolean }
     */
    lookup(key) {
        return this.#data[key];
    }
    assign(key, value) {
        this.#data[key] = value;
    }
}

/**
 * Defines interface for all classes that define a boolean expression.
 */
class BooleanExp {
    /**
     * EValuates a boolean expression in a context that assigns
     * a true or false value to each variable.
     * @param {Context} context 
     * @returns { boolean } boolean value
     */
    evaluate(context) {
        throw new Error('Not implemented');
    }
}

class Constant extends BooleanExp {
    c;
    constructor(c) {
        super();
        this.c = c;
    }
    evaluate(context) {
        return this.c;
    }
}

/** Represents a named variable */
class VariableExp extends BooleanExp {
    #key;
    constructor(key) {
        super();
        this.#key = key;
    }
    /** @param { Context } context  */
    evaluate(context) {
        return context.lookup(this.#key);
    } 
    /**
     * Produces a new {@link BooleanExp} by replacing a variable with an 
     * expression.
     * @param {string} key 
     * @param {BooleanExp} expr
     */
    replace(key, expr)  {
        if(key === this.#key) {
            return expr;
        }
        else return new VariableExp(this.#key);
    } 
}

class AbstractUnaryExp extends BooleanExp {
    _booleanExp1;
    /**
     * 
     * @param {BooleanExp} booleanExp1 
     */
    constructor(booleanExp1) {
        super();
        this._booleanExp1 = booleanExp1;
    }
}

class NotExp extends AbstractUnaryExp {
    evaluate(context) {
        return ! this._booleanExp1.evaluate(context);
    }
}

class AbstractBinaryExp extends BooleanExp {
    booleanExp1;
    booleanExp2;
    /**
     * 
     * @param {BooleanExp} booleanExp1 
     * @param {BooleanExp} booleanExp2 
     */
    constructor(booleanExp1, booleanExp2) {
        super();
        this.booleanExp1 = booleanExp1;
        this.booleanExp2 = booleanExp2;
    }

    /** @returns { boolean } */
    evaluate(context) {
        throw new Error('not implemented');
    }
}

class AndExp extends AbstractBinaryExp {
    evaluate(context) {
        return this.booleanExp1.evaluate(context) && this.booleanExp2.evaluate(context);
    }
}

class OrExp extends AbstractBinaryExp {
    evaluate(context) {
        return this.booleanExp1.evaluate(context) || this.booleanExp2.evaluate(context);
    }
}




module.exports = {
    AndExp, OrExp, Context, Constant, 
    BooleanExp, VariableExp, NotExp
}






