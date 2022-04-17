const {  BooleanExpBuilder } = require('./boolean-builder.js');
const { Context } = require('./boolean-exp.js');

function build1() {
    const builder = new BooleanExpBuilder();
    const e1 = builder.first('x')
        .and('y')
        .or(false)
        .not()
        .build();
    const ctx1 = new Context({ x: false, y: false });
    console.log(e1.evaluate(ctx1));
}


build1();