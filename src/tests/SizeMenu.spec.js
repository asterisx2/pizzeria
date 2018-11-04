import React from 'react';
import SizeMenu from '../components/SizeMenu';
import renderer from 'react-test-renderer';

describe('SizeMenu Component', () => {
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

  it('renders without crashing', () => {
    const tree = renderer
      .create(
        <SizeMenu
          pizzaSizes={pizzaSizes}
          handleSelectSize={() => { }}
          selectedSize={'small'}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  // TODO
  it('handles size selection correctly', () => { });
});
