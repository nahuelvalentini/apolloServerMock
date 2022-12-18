import { sales } from '../../data/data';
import { QueryResolvers } from '../../generated/graphql';

export const salesResolver: QueryResolvers['sales'] = function () {
  return sales;
};
