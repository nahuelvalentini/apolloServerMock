import { sales } from '../../data/data';
import { QueryResolvers } from '../../generated/graphql';

export const vendorResolver: QueryResolvers['vendor'] = function (_, { id }) {
  return sales.filter((sale) => sale.vendorId === id)[0];
};
