import { useQuery } from "@tanstack/react-query";

import { useAppContext } from "../../contexts/AppContext";
import { getAllOffers } from "../../services/apiLoan";

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
