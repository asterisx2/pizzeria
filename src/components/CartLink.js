import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class CartLink extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: this.props.cart.length
    };
  }

  static propTypes = {
    store: PropTypes.shape({
      pizzas: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          size: PropTypes.string.isRequired,
          basePrice: PropTypes.number.isRequired,
          quantity: PropTypes.number.isRequired,
          toppings: PropTypes.arrayOf(
            PropTypes.shape({
              __typename: PropTypes.string.isRequired,
              name: PropTypes.string.isRequired,
              price: PropTypes.number.isRequired
            }).isRequired
          ).isRequired
        }).isRequired
      ).isRequired
    })
  };

  getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.total !== prevState.total) {
      if (nextProps.store.pizzas.length > 0) {
        let sum = 0;
        nextProps.store.pizzas.map(pizza => (sum += pizza.quantity));
        return { quantity: sum };
      }
    }
  }

  render() {
    return (
      <div>
        <Link 
          to="/cart" 
          className="text-light">
          <i 
            className="fa fa-shopping-cart pr-1" 
            aria-hidden="true" />
            ({this.state.quantity})
        </Link>
      </div>
    );
  }
}
