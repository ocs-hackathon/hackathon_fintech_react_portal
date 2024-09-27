import styles from "./RecentCustomers.module.css";
import { useCustomers } from "../../Customers/useCustomers";
import { getCustomers } from "../../../testData";
import RecentCustomer from "./RecentCustomer";

function RecentCustomers() {
  const { customers = getCustomers() } = useCustomers();
  const recents = customers
    .sort((a, b) => b.createdAt - a.createdAt)
    .slice(0, 7);

  return (
    <ul className={styles.recent}>
      <h3>Recent Customers</h3>
      {recents.map((customer) => (
        <RecentCustomer customer={customer} key={customer.id} />
      ))}
    </ul>
  );
}

export default RecentCustomers;
