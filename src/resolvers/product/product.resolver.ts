import { products } from './../../data/data';
import { QueryResolvers } from '../../generated/graphql';

export const productFunction: QueryResolvers['product'] = function (
  _,
  { id },
): {
  id: string;
  name: string;
  price: number;
  weight: number;
} {
  return products.filter((product) => product.id === id)[0];
};
