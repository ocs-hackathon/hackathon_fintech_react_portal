import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { createLoanOffer } from "../../../services/apiLoan";

export function useCreateOffer() {
  const queryClient = useQueryClient();

  const { isLoading: isCreating, mutate: createLoan } = useMutation({
    mutationFn: createLoanOffer,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["loan_offers"],
      });
      toast.success("New offer successfuly created!");
    },
    onError: () => toast.error("Loan offer couldn't be created."),
  });

  return { isCreating, createLoan };
}
