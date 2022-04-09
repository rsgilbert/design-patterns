const { SoapData } = require('./soap-data.js')


const soapData1 = { name: 'Simon', age: 23, gender: 'M' }

const soapData2 = [
    { name: 'Suzzie', age: 34, gender: 'F' },
    { name: 'Techawa', age: 11, gender: 'M'}, 
    { name: 'Innocent', age: 35, gender: 'M'}
]

const soapData3 = 'Mugazi';

const soapData4 = null;

const soapData5 = 0;

const dataArr = [
    new SoapData(soapData1),
    new SoapData(soapData2),
    new SoapData(soapData3),
    new SoapData(soapData4),
    new SoapData(soapData5)
]

for(let d of dataArr) {
    console.log(d.data)
}