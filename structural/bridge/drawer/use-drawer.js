// @ts-check
const { TriangleDrawer, CircleDrawer, SquareDrawer } = require('./shape-drawer.js')
const { WriteImpl, OrangeWriter, BlueWriter, RedWriter } = require('./write-impl.js')


function drawCircle() {
    const circleDrawer = new CircleDrawer(new RedWriter());
    circleDrawer.draw();
}

function drawBox(){
    const boxDrawer = new SquareDrawer(new BlueWriter());
    boxDrawer.draw();
}

function drawSumbusa(){ 
    const sumbusaDrawer = new TriangleDrawer(new WriteImpl()); // We didnt colorize the write impl by using a subclass.
    sumbusaDrawer.draw();
}

drawCircle();
drawBox();

drawSumbusa();

