import { returnedProducts } from '../../data/data';
import { QueryResolvers } from '../../generated/graphql';
import { serviceReturnedProducts } from './returnedProducts.resolver.service';

export const returnedProductsResolver: QueryResolvers['returnedProducts'] =
  function (_, { productId, price, date }) {
    if (!productId && !price && !date) return returnedProducts;

    return serviceReturnedProducts(
      { productId, price, date },
      returnedProducts,
    );
  };
