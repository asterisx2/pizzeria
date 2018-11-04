import React from 'react';
import CartLink from '../components/CartLink';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

describe('CartLink Component', () => {
  let cart = [];

  it('renders without crashing', () => {
    const tree = renderer.create(
            <MemoryRouter>
                <CartLink
                    cart={cart}
                />
            </MemoryRouter>
        ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
