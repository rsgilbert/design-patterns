export class Pizza {
    size: 'small'|'medium'|'large';
    type: 'chicken'|'beef'|'vegetable';
    
    constructor(){

    }
}

export interface IPizzaBuilder {
    size(size: 'small'|'medium'|'large'): void;
    type(type: 'chicken'|'beef'|'vegetable'): void;
    build(): any;
}

export class PizzaBuilder implements IPizzaBuilder {
    #pizza: Pizza;
    constructor(){ 
        this.#pizza = new Pizza();
    }

    size(size: 'small'|'medium'|'large') {
        this.#pizza.size = size;
    }
    type(type: 'chicken'|'beef'|'vegetable') {
        this.#pizza.type = type;
    }
    build() {
        return this.#pizza;
    }
}


export class PizzaPriceBuilder implements IPizzaBuilder {
    #price;
    constructor(){ 
        this.#price = 0;
    }

    size(size: 'small'|'medium'|'large') {
        switch(size) {
            case 'small':
                this.#price += 20;
                return;
            case 'medium':
                this.#price += 30;
                return;
            case 'large':
                this.#price += 40;
                return;
        }
    }

    /** @override */
    type(type) {
        switch(type) {
            case 'chicken':
                this.#price += 40;
                return;
            case 'beef':
                this.#price += 35;
                return;
            case 'vegetable':
                this.#price += 30;
                return;
        }
    }
    build() {
        return this.#price;
    }
}


/**
 * Director class.
 * Stores logic for how to build various pizzas.
 */
export class PizzaDirector {
    buildCampusPizza(pizzaBuilder: IPizzaBuilder) {
        pizzaBuilder.size('small');
        pizzaBuilder.type('beef');
    }

    buildRichManPizza(pizzaBuilder: IPizzaBuilder) {
        pizzaBuilder.size('large');
        pizzaBuilder.type('chicken');
    }
}