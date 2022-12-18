import { salesResolver as sales } from './sales/sales.resolver';
import { vendorsResolver as vendors } from './vendors/vendors.resolver';
import { vendorResolver as vendor } from './vendor/vendor.resolver';
import { returnedProductsResolver as returnedProducts } from './returnedProducts/returnedProducts.resolver';
import { Resolvers } from '../generated/graphql';

export const resolvers: Resolvers = {
  Query: {
    sales,
    vendors,
    vendor,
    returnedProducts,
  },
};
