import { returnedProducts } from '../../data/data';
import { QueryReturnedProductsArgs } from '../../generated/graphql';

export const serviceReturnedProducts: (
  argsFromQuery: QueryReturnedProductsArgs,
  arrayReturnedProducts: typeof returnedProducts,
) => typeof returnedProducts = (
  { productId, price, date },
  returnedProducts,
) => {
  let toReturn = returnedProducts;
  if (productId) {
    const byProductID = (returnedProduct: typeof returnedProducts[0]) =>
      returnedProduct.productId === productId;
    toReturn = toReturn.filter(byProductID);
  }
  if (price) {
    const byPrice = (returnedProduct: typeof returnedProducts[0]) =>
      returnedProduct.price === price;
    toReturn = toReturn.filter(byPrice);
  }
  if (date) {
    const byDate = (returnedProduct: typeof returnedProducts[0]) =>
      returnedProduct.date.getDate() === new Date(date).getDate();
    toReturn = toReturn.filter(byDate);
  }
  return toReturn;
};
