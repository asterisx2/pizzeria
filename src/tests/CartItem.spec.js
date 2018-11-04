import React from 'react';
import CartItem from '../components/CartItem';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

describe('Cart Component', () => {
  it('renders without crashing', () => {
    let pizza = {
      id: 1,
      size: 'small',
      basePrice: 199,
      quantity: 1,
      toppings: [
        {
          __typename: 'topping',
          name: 'pepperoni',
          price: 40
        }
      ],
      doughType: {
        id: 1,
        name: 'Thin',
        description: 'Thin and cristy Pizza dough',
        price: 0
      },
      imgPath: ''
    };

    const tree = renderer
      .create(
        <MemoryRouter>
          <CartItem pizza={pizza} removePizza={() => { }} />
        </MemoryRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  // TODO
  it('handles remove pizza correctly', () => { });
});
