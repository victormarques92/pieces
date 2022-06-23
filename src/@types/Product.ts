import PriceProps from './Price';

interface ProductProps {
  description: string;
  image: string;
  price: PriceProps;
  title: string;
  label?: string;
  featured?: boolean;
}

export default ProductProps;
