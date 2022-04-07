import { PizzaBuilder, PizzaDirector, PizzaPriceBuilder, IPizzaBuilder } from "./pizza"


describe('pizza', () => {
    test('pizza builder', () => {
        const pizzaBuilder = new PizzaBuilder();
        pizzaBuilder.size('medium');
        pizzaBuilder.type('chicken');
        const pizza = pizzaBuilder.build();
        expect(pizza.size).toBe('medium');
        expect(pizza.type).toBe('chicken');
    });

    test('pizza price builder', () => {
        let pizzaBuilder = new PizzaPriceBuilder();
        pizzaBuilder.size('medium');
        pizzaBuilder.type('chicken');
        const pizzaPrice = pizzaBuilder.build();
        expect(pizzaPrice).toBe(70);

        pizzaBuilder = new PizzaPriceBuilder();
        pizzaBuilder.size('large');
        pizzaBuilder.type('beef');
        const pizzaPrice2 = pizzaBuilder.build();
        expect(pizzaPrice2).toBe(75);
    });

    test('pizza director -> pizza', () => {
        let pizzaBuilder = new PizzaBuilder();
        let pizzaDirector = new PizzaDirector();
        pizzaDirector.buildCampusPizza(pizzaBuilder);
        const pizza = pizzaBuilder.build();
        expect(pizza.size).toBe('small');
        expect(pizza.type).toBe('beef');
    });

    test('pizza director -> pizza price', () => {
        let pizzaPriceBuilder: IPizzaBuilder = new PizzaPriceBuilder();
        let pizzaDirector = new PizzaDirector();
        pizzaDirector.buildRichManPizza(pizzaPriceBuilder);
        const pizzaPrice = pizzaPriceBuilder.build();
        expect(pizzaPrice).toBe(80);
    });
})