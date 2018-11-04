import * as actions from './index';

const testData = {
  basePrices: {
    smallPizza: 199,
    mediumPizza: 299,
    largePizza: 399
  },
  toppings: {
    cheese: {
      __typename: 'topping',
      name: 'Cheese',
      price: 119
    },
    sausage: {
      __typename: 'topping',
      name: 'Sausage',
      price: 79
    },
    onion: {
      __typename: 'topping',
      name: 'Onion',
      price: 49
    },
    pepperoni: {
      __typename: 'topping',
      name: 'Pepperoni',
      price: 29
    },
    bellPops: {
      __typename: 'topping',
      name: 'Bell peps',
      price: 33
    },
    greenOlives: {
      __typename: 'topping',
      name: 'Green olives',
      price: 39
    }
  },
  pizzaSizes: {
    small: 'small',
    medium: 'medium',
    large: 'large'
  }
};

describe('Pizza Store Actions', () => {

  it('addPizzaToStore function should create ' + actions.ADD_PIZZA_TO_STORE + ' action', () => {

    const size = testData.pizzaSizes.small;

    const id = 1;

    const toppings = [
      testData.toppings.cheese,
      testData.toppings.sausage,
      testData.toppings.onion
    ];

    const total = testData.basePrices.smallPizza +
            testData.toppings.cheese.price +
            testData.toppings.sausage.price +
            testData.toppings.onion.price;

    const quantity = 1;
    const basePrice = testData.basePrices.smallPizza;

    expect(actions.addPizzaToCart({

      id,
      quantity,
      basePrice,
      size,
      toppings,
      total

    })).toEqual({

      type: actions.ADD_PIZZA_TO_CART,
      pizza: {

        id,
        quantity,
        basePrice,
        size,
        toppings,
        total

      }

    });

  });

  it('removePizza should create ' + actions.REMOVE_PIZZA_FROM_CART + ' action', () => {

    const pizzaId = 1;

    expect(actions.removePizzaFromCart({
      pizzaId
    })).toEqual({
      type: actions.REMOVE_PIZZA_FROM_CART,
      pizzaId: { pizzaId }
    });

  });

  it('updatePizza should create ' + actions.UPDATE_PIZZA_IN_CART + ' action', () => {

    const size = testData.pizzaSizes.small;

    const id = 1;

    const toppings = [
      testData.toppings.cheese,
      testData.toppings.sausage,
      testData.toppings.onion
    ];

    const total = testData.basePrices.smallPizza +
            testData.toppings.cheese.price +
            testData.toppings.sausage.price +
            testData.toppings.onion.price;

    const quantity = 1;
    const basePrice = testData.basePrices.smallPizza;

    expect(actions.updatePizzaInCart({

      id,
      quantity,
      basePrice,
      size,
      toppings,
      total

    })).toEqual({

      type: actions.UPDATE_PIZZA_IN_CART,
      pizza: {
        id,
        quantity,
        basePrice,
        size,
        toppings,
        total
      }

    });

  });
});
