import * as React from 'react';
import renderer from 'react-test-renderer';
import { ProductCard } from '../../src/components';
import { product1 } from '../data/products';

const { act } = renderer;

describe('ProductCard', () => {
  test('should de mostrar el componente correctamente', () => {
    const wrapper = renderer.create(
      <ProductCard product={product1}>
        {() => <div>ProductCard</div>}
      </ProductCard>
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('should de incrementar el contador', () => {
    const wrapper = renderer.create(
      <ProductCard product={product1}>
        {({ count, increaseBy }) => (
          <>
            <h1>ProductCard</h1>
            <span>{count}</span>
            <button onClick={() => increaseBy(1)}></button>
          </>
        )}
      </ProductCard>
    );

    let tree = wrapper.toJSON();
    expect(wrapper).toMatchSnapshot();
    act(() => {
      (tree as any).children[2].props.onClick();
    });

    tree = wrapper.toJSON();

    expect((tree as any).children[1].children[0]).toBe('1');
  });
});
