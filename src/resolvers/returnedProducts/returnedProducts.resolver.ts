import { returnedProducts } from '../../data/data';
import {
  QueryResolvers,
  QueryReturnedProductsArgs,
} from '../../generated/graphql';
import { serviceReturnedProducts } from './returnedProducts.resolver.service';

export const returnedProductsResolver: QueryResolvers['returnedProducts'] =
  function (_, { productId, price, date }) {
    if (!productId && !price && !date) return returnedProducts;

    return serviceReturnedProducts<
      keyof QueryReturnedProductsArgs,
      typeof returnedProducts[0]
    >({ productId, price, date }, returnedProducts);
  };
