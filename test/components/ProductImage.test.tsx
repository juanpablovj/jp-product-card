import * as React from 'react';
import renderer from 'react-test-renderer';
import { ProductImage, ProductCard } from '../../src/components';
import { product2 } from '../data/products';

describe('ProductImage', () => {
  test('should de mostrar el componente correctamente con el img personalizado', () => {
    const wrapper = renderer.create(
        <ProductImage img={'./cat.jpg'} className='custom-class'/>
    )
    expect(wrapper).toMatchSnapshot();
  });

  test('should de mostrar el componente con el img del producto', () => { 
    const wrapper = renderer.create(
        <ProductCard product={product2} className='custom-class'>
            {() => <ProductImage />}
        </ProductCard>
    )
    expect(wrapper).toMatchSnapshot();
   })
});
