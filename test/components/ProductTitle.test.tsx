import * as React from 'react';
import renderer from 'react-test-renderer';
import { ProductTitle, ProductCard } from '../../src/components';
import { product1 } from '../data/products';

describe('ProductTitle', () => {
  test('should de mostrar el componente correctamente con el titulo personalizado', () => {
    const wrapper = renderer.create(
        <ProductTitle title='El titulo' className='custom-class'/>
    )
    expect(wrapper).toMatchSnapshot();
  });

  test('should de mostrar el componente con el nombre del producto', () => { 
    const wrapper = renderer.create(
        <ProductCard product={product1} className='custom-class'>
            {() => <ProductTitle />}
        </ProductCard>
    )
    expect(wrapper).toMatchSnapshot();
   })
});
