import { connect } from 'react-redux';
import { addPizzaToCart, updatePizzaInCart } from '../actions';
import Home from '../components/Home';
import API from '../helpers/api';

const mapStateToProps = state => ({
  cart: state.cart,
  data: {
    toppings: API.toppings,
    pizzaSizes: API.pizzaSizes,
    doughTypes: API.doughTypes,
  }
});

const mapDispatchToProps = {
  handleAddPizza: addPizzaToCart,
  handleUpdatePizza: updatePizzaInCart
};

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

export default HomeContainer;
