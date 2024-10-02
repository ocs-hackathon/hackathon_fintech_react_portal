import { useQuery } from "@tanstack/react-query";
import { getCustomers } from "../../services/apiCustomers";
import { useAppContext } from "../../contexts/AppContext";

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
  return { isLoadingCustomers, customers, error };
}
