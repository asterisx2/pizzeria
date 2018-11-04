import cartReducer from './cartReducer';

export default function pizzeriaApp(state = [], action) {
  return cartReducer(state, action)
};
