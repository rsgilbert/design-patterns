const seasons = {
    first() { return 'winter'},
    second() { return 'spring'},
    third() { return 'summer'},
    fourth() { return 'autumn'},

    *[Symbol.iterator]() {
        yield this.first();
        yield this.second();
        yield this.third();
        yield this.fourth();
    }

}


// console.log('seasons are', seasons)
// console.log(seasons.second());

for(let s of seasons) {
    console.log(s)
}

const seasonList = [...seasons];
console.log(seasonList)