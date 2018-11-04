import { connect } from 'react-redux';
import { removePizzaFromCart } from '../actions';
import Cart from '../components/Cart';

const mapStateToProps = (state) => ({
  cart: state.cart
});

const mapDispatchToProps = {
  handleRemovePizza: removePizzaFromCart
};

const CartContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);

export default CartContainer;
