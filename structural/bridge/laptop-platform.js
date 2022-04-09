// @ts-check

class LaptopPlatform {
    getManufacturer(){ return ''}
    getYear(model){}
    getWidth(model){ return 0; }
    getHeight(model){ return 0; }
}


class Macbook extends LaptopPlatform {
    getManufacturer() { return 'Apple'}
    getYear(model) { 
        if(model === 'new'){
            return 2020;
        } else return 2017;
    }
    getWidth(model) {
        if(model === 'new'){
            return 13;
        } else return 15;
    }
    getHeight(model) {
        if(model === 'new'){
            return 7;
        } else return 8;
    }
}

class Windows extends LaptopPlatform {
    getManufacturer() {return 'unknown'}
    getYear(model) {
        if(model == 'old') {
            return 2000;
        }
        else return 2022;
    }
    getWidth(model) { return 13;}
    getHeight(model) { return 6; }
}

class Linux extends LaptopPlatform {
    getManufacturer() { return 'kubuntu'}
    getYear(model) { return 1985;}
    getWidth(model) { return 20; }
    getHeight(model) { return 10; }
}


module.exports = { Linux, Windows, Macbook, LaptopPlatform }

