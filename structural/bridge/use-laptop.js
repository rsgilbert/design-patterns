// @ts-check

const { ThirteenInch, SeventeenInch } = require('./laptop-size.js');
const { Macbook, Windows } = require('./laptop-platform.js');

const homeLaptop = new SeventeenInch('2017 MacbookPro', new Macbook());
console.log(homeLaptop.getExpectedInches());
console.log(homeLaptop.getActualInches());
console.log(homeLaptop.os());

console.log('\n** work **\n')
const workLaptop = new ThirteenInch('Lenovo', new Windows());
console.log(workLaptop.getExpectedInches());
console.log(workLaptop.getActualInches());
console.log(workLaptop.os());
