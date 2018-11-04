import {
  ADD_PIZZA_TO_CART,
  REMOVE_PIZZA_FROM_CART,
  UPDATE_PIZZA_IN_CART
} from '../actions';

const cartReducer = (state = [], action) => {
  switch (action.type) {

  case ADD_PIZZA_TO_CART:
    return [
      ...state,
      {
        id: action.pizza.id,
        size: action.pizza.size,
        basePrice: action.pizza.basePrice,
        quantity: action.pizza.quantity,
        toppings: action.pizza.toppings,
        doughType: action.pizza.doughType,
        imgPath: action.pizza.imgPath,
      },
    ];

  case REMOVE_PIZZA_FROM_CART:
    return state.filter(pizza => pizza.id !== action.pizzaId);

  case UPDATE_PIZZA_IN_CART:
    return state.map(
        pizza => pizza.id === action.pizza.id ? action.pizza : pizza
      );

  default:
    return state;
  }
}

// The party is about to begin
export default cartReducer;
