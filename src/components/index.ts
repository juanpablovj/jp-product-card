import { ProductCard as ProductCardHOC } from './ProductCard';
import { ProductImage } from './ProductImage';
import { ProductTitle } from './ProductTitle';
import { ProductButtons } from './ProductButtons';
import { ProductCardHOCProps } from '../interfaces/interfaces';

const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC, {
	Title: ProductTitle,
	Image: ProductImage,
	Buttons: ProductButtons,
});

export { ProductCard, ProductImage, ProductTitle, ProductButtons };
