const { CalcExpressionBuilder } = require('./calc.js')


function build1() {
    const expr1 = new CalcExpressionBuilder()
        .first(5)
        .add('x')
        .subtract('y')
        .build();
    console.log(expr1.interprete({ x: 3, y: 4 })); // 4
    console.log(expr1.toString({ x: 3, y: 4 }))
}
// build1();

function build2(){
    const expr2 = new CalcExpressionBuilder()
        .first('a')
        .multiply('b')
        .add('c')
        .subtract('d')
        .divide('e')
        .build();
    const ctx = { a: 2, b: 10, c: 5, d: 3, e: 2 }
    console.log(expr2.toString(ctx));
    console.log(expr2.interprete(ctx));
        
}
// build2();

function build3(){
    // represent the problem
    // build an interpreter that can solve the problem

    const expr3 = new CalcExpressionBuilder()
        .first('p')
        .square()
        .multiply('p')
        .power('q')
        .build();
    const ctx = { p: 5, q: 3 }
    console.log(expr3.toString(ctx))
    // solve problem
    console.log(expr3.interprete(ctx))

}
// build3();

function build4() {
    const expr4 = new CalcExpressionBuilder()
        .first('a')
        .multiply('b')
        .add('c')
        .build();
    
    const expr5 = new CalcExpressionBuilder()
        .first('x')
        .power('y')
        .build();
    const expr6 = new CalcExpressionBuilder()
        .first(expr4)
        .subtract(expr5)
        .build();
    const ctx = { a: 3, b: 5, c: 8, x: 4, y: 3 };
    console.log(expr6.toString(ctx)); // (((3 * 5) + 8) - (4 ** 3))
    console.log(expr6.interprete(ctx)); // -41
}
build4();