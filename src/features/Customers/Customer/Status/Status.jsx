import { useParams } from "react-router-dom";

import { useCustomers } from "../../useCustomers";

import styles from "./status.module.css";
import { useState } from "react";
import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  blockCustomer,
  updateCustomer,
} from "../../../../services/apiCustomers";
import { useAppContext } from "../../../../contexts/AppContext";

function Status() {
  const { id } = useParams();
  const { customers } = useCustomers();
  const customer = customers?.find((customer) => id === String(customer.id));
  const { status } = customer;
  const [option, setOption] = useState(status);
  const queryClient = useQueryClient();
  const { accessToken } = useAppContext();

  const { mutate: updateCustomerStatus } = useMutation({
    mutationFn: updateCustomer,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["customers"],
      });
      toast.success(`User status updated successfully.`);
    },
    onError: (err) => {
      console.error(err.message);
      toast.error("Failed to update user status. Please try again.");
    },
  });

  const { mutate: blockUser } = useMutation({
    mutationFn: blockCustomer,
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ["customers"],
      });
      toast.success(data?.message);
    },
    onError: (err) => {
      console.error(err.message);
      toast.error("Failed to update user status. Please try again.");
    },
  });

  async function updateStatus(status) {
    if (status === "blocked") {
      blockUser({ id, accessToken });
      return;
    }
    if (status === "active") status = "accept";
    updateCustomerStatus(
      { status, id, accessToken },
      { onSuccess: () => setOption(status) }
    );
  }

  return (
    <div className={styles.statusContainer}>
      <div className={styles.row}>
        <span>Current status</span>
        <span className={`${styles.status} ${styles[status]}`}>{status}</span>
      </div>
      <form className={styles.row}>
        <span>Update status</span>
        <select
          className={styles.select}
          name="status"
          id="status"
          onChange={(e) => updateStatus(e.target.value)}
          value={option}
        >
          <option value="active">Active</option>
          <option value="rejected">Reject</option>
          <option value="blocked">Block</option>
        </select>
      </form>
    </div>
  );
}

export default Status;
