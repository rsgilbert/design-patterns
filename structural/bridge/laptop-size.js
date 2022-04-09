// @ts-check
const { LaptopPlatform } = require("./laptop-platform.js")

class LaptopSize {
    laptopPlatform;
    model;
    /**
     * We setup a bridge between LaptopSize and LaptopPlatform. 
     * LaptopPlatform contains implementations for lower level details that need to be used by LaptopSize.
     * LaptopSize is acting as the abstraction in the bridge between LaptopSize and LaptopPlatform.
     * @param {LaptopPlatform} laptopPlatform 
     */
    constructor(model, laptopPlatform){
        this.model = model;
        this.laptopPlatform = laptopPlatform; // delegate object
    }
    getActualInches(){
        return Math.sqrt(this.laptopPlatform.getHeight(this.model) ** 2 + this.laptopPlatform.getWidth(this.model) ** 2);
    }

    os() {
        const manu = this.laptopPlatform.getManufacturer();
        if(manu === 'Apple') return 'MacOS';
        else return 'Could be anyone';
    }
    getExpectedInches(){}

}

class ThirteenInch  extends LaptopSize {
    getExpectedInches() {
        return 13;
    }
}

class SeventeenInch extends LaptopSize {
    getExpectedInches() {
        return 17;
    }


}
module.exports = {
    LaptopSize, ThirteenInch, SeventeenInch
}
