import { vendors } from '../../data/data';
import { QueryResolvers } from '../../generated/graphql';

export const vendorsResolver: QueryResolvers['vendors'] = function () {
  return vendors;
};
