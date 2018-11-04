export const ADD_PIZZA_TO_CART = 'ADD_PIZZA_TO_CART';
export const REMOVE_PIZZA_FROM_CART = 'REMOVE_PIZZA_FROM_CART';
export const UPDATE_PIZZA_IN_CART = 'UPDATE_PIZZA_IN_CART';

export function addPizzaToCart(pizza) {
  return { type: ADD_PIZZA_TO_CART, pizza };
};

export function removePizzaFromCart(pizzaId) {
  return { type: REMOVE_PIZZA_FROM_CART, pizzaId };
};

export function updatePizzaInCart(pizza) {
  return { type: UPDATE_PIZZA_IN_CART, pizza };
};
