const { UnitOfMeasure, BaseUom, OtherUom } = require('./dozens.js');

const caton = new OtherUom();
caton.ratio = 1/30;
caton.amount = 50;


const twoCatons = caton.add(caton);
console.log(twoCatons.amount); // 100 
console.log(twoCatons.toBaseUom()); // 3000

const dozen1 = new OtherUom();
dozen1.ratio = 1/12;
dozen1.amount = 3;
console.log(dozen1.toBaseUom());
const twoCatonsOneDozen = dozen1.add(twoCatons);
console.log(twoCatonsOneDozen.amount); // 36
console.log(twoCatonsOneDozen.toBaseUom().amount); // 3036