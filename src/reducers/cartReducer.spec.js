import cartReducer from './cartReducer';
import {
  ADD_PIZZA_TO_CART,
  REMOVE_PIZZA_FROM_CART,
  UPDATE_PIZZA_IN_CART
} from '../actions/index';

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
  doughTypes: [
    {
      id: 1,
      name: 'Thin',
      description: 'Thin and cristy Pizza dough',
      price: 0
    },
    {
      id: 2,
      name: 'Thick',
      description: 'Thick and soft Pizza dough',
      price: 59
    },
    {
      id: 3,
      name: 'Just Right',
      description: 'The perfect balance between soft and cristy Pizza dough',
      price: 39
    },
    {
      id: 4,
      name: 'Cheese Burst',
      description: 'The extra cheese soft and cristy Pizza dough',
      price: 109
    }
  ]
};

const testPizzas = {
  smallPizza: {
    id: 1,
    size: 'small',
    toppings: [
      testData.toppings.cheese,
      testData.toppings.sausage,
      testData.toppings.onion
    ],
    basePrice: 199,
    quantity: 1,
    doughType: testData.doughTypes[0],
    imgPath: ''
  },
  mediumPizza: {
    id: 2,
    size: 'medium',
    toppings: [
      testData.toppings.cheese,
      testData.toppings.sausage,
      testData.toppings.onion,
      testData.toppings.pepperoni
    ],
    basePrice: 299,
    quantity: 1,
    doughType: testData.doughTypes[0],
    imgPath: ''
  },
  largePizza: {
    id: 3,
    size: 'large',
    toppings: [
      testData.toppings.pepperoni,
      testData.toppings.cheese,
      testData.toppings.sausage,
      testData.toppings.onion
    ],
    basePrice: 399,
    quantity: 1,
    doughType: testData.doughTypes[0],
    imgPath: ''
  }
}

describe('Pizzas Reducer', () => {
  it('should not break with initial undeifned state', () => {

    expect(cartReducer(undefined, {})).toEqual([]);

  });

  it('should add PIZZA to store when "ADD_PIZZA_TO_CART" action is dispatched with a "pizza" payload', () => {

    expect(
      cartReducer([], {
        type: ADD_PIZZA_TO_CART,
        pizza: testPizzas.smallPizza
      })
    ).toEqual([testPizzas.smallPizza]);

  });

  it('should remove the pizza from store when "REMOVE_PIZZA_FROM_CART" action is dispatched', () => {

    expect(
      cartReducer(
        [
          testPizzas.smallPizza,
          testPizzas.mediumPizza,
          testPizzas.largePizza
        ],
        {
          type: REMOVE_PIZZA_FROM_CART,
          pizzaId: testPizzas.largePizza.id
        }
      )
    ).toEqual([
      testPizzas.smallPizza,
      testPizzas.mediumPizza
    ]);

  });

  it('should update pizza when "UPDATE_PIZZA_IN_CART" action is dispatched with a "pizza" payload', () => {

    const updatedPizza = {
      ...testPizzas.largePizza,
      toppings: [testData.toppings.bellPops],
      quantity: 2
    }

    expect(
      cartReducer(
        [testPizzas.smallPizza, testPizzas.mediumPizza, testPizzas.largePizza],
        {
          type: UPDATE_PIZZA_IN_CART,
          pizza: updatedPizza
        }
      )
    ).toEqual([
      testPizzas.smallPizza,
      testPizzas.mediumPizza,
      updatedPizza
    ]);

  });
});
