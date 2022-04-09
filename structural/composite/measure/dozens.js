// @ts-check
// We represent data using a unit of measure and a corresponding
// base unit of measure.
// We use the composite design pattern to come up with this design where a common
// interface is used for various units of measure.

// The component in Composite Design Pattern
class UnitOfMeasure {
    amount;
    /** this is Uom to BaseUom ratio eg  dozen to pieces (base uom) = 0.12
     * 1 baseUom = this.ratio Uom
     * It answers the question: How many other units of measure make up one base one unit of measure
     */
    ratio;
    /**
     * 
     * @param {number} amount 
     */
    constructor(amount) {
        this.amount = amount;
    }
    /** 
     * @param { BaseUom } baseUom
     * @returns { UnitOfMeasure } 
     * */
    fromBaseUom(baseUom) { return this.createUom(baseUom.amount * this.ratio); }
    /** 
     * @returns { BaseUom } */
    toBaseUom() { return BaseUom.createBaseUom(this.amount / this.ratio) }
    /** @param { UnitOfMeasure } uom */
    add(uom) {
        return this.fromBaseUom(BaseUom.createBaseUom(this.toBaseUom().amount + uom.toBaseUom().amount));
    }
    /** @param { UnitOfMeasure } uom */
    subtract(uom) {
        return this.fromBaseUom(BaseUom.createBaseUom(this.toBaseUom().amount - uom.toBaseUom().amount));
    }
    /** factory function. To be overridden by subclasses */
    createUom(amt) {
        const result = new UnitOfMeasure(amt);
        result.ratio = this.ratio;
        return result;
    }
}


class BaseUom extends UnitOfMeasure {
    ratio = 1;
    /** @override */
    createUom(amt) {
        const result = new BaseUom(amt);
        result.ratio = this.ratio;
        return result;
    }
    static createBaseUom(amt) {
        const result = new BaseUom(amt);
        result.ratio = 1;
        return result;
    }
}

class OtherUom extends UnitOfMeasure {
    /** @override */
    createUom(amt) {
        const result = new OtherUom(amt);
        result.ratio = this.ratio;
        return result;
    }
}

module.exports = {
    BaseUom, OtherUom, UnitOfMeasure
}