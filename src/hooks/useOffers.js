import { useQuery } from "@tanstack/react-query";

import { useAppContext } from "../contexts/AppContext";
import { getAllOffers } from "../services/apiLoan";

/**
 * Custom hook to fetch and filter loan offers.
 *
 * This hook uses `react-query`'s `useQuery` to fetch offers data from the
 * `getALlOffers` API function.
 * It retrieves the `accessToken` from the global app context to authenticate the request.
 *
 * @function
 *
 * @returns {Object} - An object containing:
 * @returns {boolean} - isLoadingOffers - Whether the offers data is currently loading.
 * @returns {Array} - offers - A list of offers.
 * @returns {Object} - error - Any error that occurred during the data fetching process.
 *
 * @example
 * const { isLoadingOffers, Offers, error } = useOffers();
 */

export function useOffers() {
  const { accessToken } = useAppContext();
  const {
    data: offers = [],
    isLoading: isLoadingOffers,
    error,
  } = useQuery({
    queryKey: ["loan_offers"],
    queryFn: getAllOffers.bind({ accessToken }),
  });
  return { offers, isLoadingOffers, error };
}
