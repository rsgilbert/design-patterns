const { UnitOfMeasure, BaseUom, OtherUom } = require('./dozens.js');


// We assume Usd is the base uom

const usd = new BaseUom(); // We can as either use new BaseUom() or new OtherUom()
// usd.ratio = 1; // baseuom already defines ratio as 1

const ugx = new OtherUom();
ugx.ratio = 3545; // 3545 make up 1 usd

const kes = new OtherUom();
kes.ratio =  115.35;

const pound = new OtherUom();
pound.ratio = 0.76714;




// Add 10 usd + 5000 ugx + 20 kes + 5 pounds 
usd.amount = 10;
ugx.amount = 5000;
kes.amount = 20;
pound.amount = 5;

let result = usd.add(ugx);
console.log('added ugx', result);

result = result.add(kes)
    .add(pound);
console.log(result); // should expect: 18.10153

// now subtract
const result2 = result.subtract(pound)
    .subtract(kes)
    .subtract(ugx)
    .subtract(usd);
console.log(result2); // 0 (actual is 1e-15)