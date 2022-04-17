const { AndExp, OrExp, Context, Constant, VariableExp, NotExp } =  require('./boolean-exp.js')

function test1() {
    const x = new VariableExp('x');
    const a = new VariableExp('a');
    const b = new VariableExp('b');
    const c = new VariableExp('c');

    const expr1 = new OrExp(a, b);
    const expr2 = new OrExp(expr1, c);
    const expr12 = new OrExp(expr1, expr2);

    const ctx1 = new Context({
        a: false, b: true, c: false
    })
    const result1 = expr12.evaluate(ctx1);
    console.log(result1); // false

    const expr3 = new AndExp(a, b);
    const expr4 = new AndExp(c, b);
    const expr34 = new AndExp(expr3, expr4);
    const ctx2 = new Context({
        a: true, b: false, c: true
    })
    const result2 = expr34.evaluate(ctx2);
    console.log(result2);

}

// test1();

function testNotExp() {
    const expr1 = new VariableExp('r');
    const expr2 = new VariableExp('s');

    const n1 = new NotExp(expr1);
    const n2 = new NotExp(expr2);

    const ctx1 = new Context({ r: true, s: false, t: true });
    console.log(n1.evaluate(ctx1)); // false
    console.log(n2.evaluate(ctx1)); // true

    const n3 = new OrExp(n1, n2);
    const n4 = new NotExp(n3);
    console.log(n4.evaluate(ctx1)); // false
}

testNotExp();