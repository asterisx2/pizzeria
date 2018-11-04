import React from 'react';
import Customize from '../components/Customize.js';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

describe('Form Component', () => {
  it('renders without crashing', () => {
    let toppings = [
      {
        __typename: 'topping',
        name: 'pepperoni',
        price: 40
      }
    ];
    let doughTypes = [
      {
        id: 1,
        name: 'Thin',
        description: 'Thin and cristy Pizza dough',
        price: 0
      }
    ];
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
          <Customize
            pizza={pizza}
            handleUpdatePizza={() => { }}
            toppings={toppings}
            doughTypes={doughTypes}
          />
        </MemoryRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  // TODO
  it('handles update pizza correctly', () => { });
});
