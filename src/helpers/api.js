let toppings = [
  {
    __typename: 'topping',
    name: 'Cheese',
    price: 0.50
  },
  {
    __typename: 'topping',
    name: 'Sausage',
    price: 0.50
  },
  {
    __typename: 'topping',
    name: 'Onion',
    price: 0.50
  },
  {
    __typename: 'topping',
    name: 'Panner',
    price: 0.50
  },
  {
    __typename: 'topping',
    name: 'American Cheese',
    price: 0.50
  },
  {
    __typename: 'topping',
    name: 'Round Sausage',
    price: 0.50
  },
  {
    __typename: 'topping',
    name: 'Fresh Farm Onion',
    price: 0.50
  },
  {
    __typename: 'topping',
    name: 'Bell peps',
    price: 0.50
  },
  {
    __typename: 'topping',
    name: 'Pepperoni',
    price: 0.50
  },
  {
    __typename: 'topping',
    name: 'Green olives',
    price: 0.50
  }
];

let pizzaSizes = [
  {
    id: 1,
    sizeName: 'small',
    basePrice: 1.00,
    imgPath: '../../pizza_round.png'
  },
  {
    id: 2,
    sizeName: 'medium',
    basePrice: 1.50,
    imgPath: '../../pizza_round.png'
  },
  {
    id: 3,
    sizeName: 'large',
    basePrice: 2.00,
    imgPath: '../../pizza_round.png'
  }
];

let doughTypes = [
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
    price: 0.50
  },
  {
    id: 3,
    name: 'Just Right',
    description: 'The perfect balance between soft and cristy Pizza dough',
    price: 0.50
  },
  {
    id: 4,
    name: 'Cheese Burst',
    description: 'The extra cheese soft and cristy Pizza dough',
    price: 0.50
  }
];
let API = {
  toppings,
  pizzaSizes,
  doughTypes
};
export default API;
