import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { createLoanOffer } from "../../../services/apiLoan";

export function useCreateOffer() {
  const queryClient = useQueryClient();

  const { isLoading: isCreating, mutate: createLoan } = useMutation({
    mutationFn: createLoanOffer,
    onSuccess: () => {
      console.log("succCreated");
      queryClient.invalidateQueries({
        queryKey: ["loan_offers"],
      });
      toast.success("New cabin successfuly created!");
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createLoan };
}
