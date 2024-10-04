import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { createLoanOffer } from "../../../services/apiLoan";

/**
 * Custom hook to create a loan offer using `useMutation` from React Query.
 * 
 * On success, it invalidates the `loan_offers` query to refetch updated data
 * and shows a success notification. On error, it displays an error notification.
 * 
 * @returns {Object} - An object containing:
 * @returns {boolean} isCreating - Whether the loan offer creation is in progress.
 * @returns {function} createLoan - Function to trigger the loan offer creation.
 */

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
