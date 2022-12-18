export const filterArrayByKeys: <I extends keyof K, K>(
  argsFromQuery: Record<I, K[keyof K] | undefined | null>,
  arrayToFilter: K[],
) => K[] = (params, arrayToFilter) => {
  let toReturn = arrayToFilter;
  const keys = Object.keys(params);
  keys.forEach((key) => {
    const byProductID = (returnedProduct: unknown) => {
      return (
        (returnedProduct as Record<string, unknown>)[key] ===
        (params as Record<string, unknown>)[key]
      );
    };
    if ((params as Record<string, unknown>)[key]) {
      toReturn = toReturn.filter(byProductID);
    }
  });
  return toReturn;
};
