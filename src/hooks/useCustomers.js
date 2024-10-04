import { useQuery } from "@tanstack/react-query";
import { getCustomers } from "../services/apiCustomers";
import { useAppContext } from "../contexts/AppContext";

/**
 * Custom hook to fetch and filter customers with the role of "client".
 *
 * This hook uses `react-query`'s `useQuery` to fetch customer data from the
 * `getCustomers` API function and filters out customers whose role is "client".
 * It retrieves the `accessToken` from the global app context to authenticate the request.
 *
 * @function
 *
 * @returns {Object} - An object containing:
 * @returns {boolean} isLoadingCustomers - Whether the customers data is currently loading.
 * @returns {Array} customers - A list of customers filtered by role ("client").
 * @returns {Object} error - Any error that occurred during the data fetching process.
 *
 * @example
 * const { isLoadingCustomers, customers, error } = useCustomers();
 */

export function useCustomers() {
  const { accessToken } = useAppContext();
  const {
    isLoading: isLoadingCustomers,
    data: customers = [],
    error,
  } = useQuery({
    queryKey: ["customers"],
    queryFn: getCustomers.bind({ accessToken }),
  });
  return {
    isLoadingCustomers,
    customers: customers?.filter((customer) => customer.role === "client"),
    error,
  };
}
