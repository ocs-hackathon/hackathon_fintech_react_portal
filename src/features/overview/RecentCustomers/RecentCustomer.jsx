/* eslint-disable react/prop-types */
import { formatDate } from "../../../utils/format";
import styles from "./RecentCustomer.module.css";

function RecentCustomer({ customer }) {
  const { name, status, createdAt } = customer;
  return (
    <li className={styles.user}>
      <div className={styles.left}>
        <span className={styles.name}>{name}</span>
        <span className={styles.date}>{formatDate(createdAt)}</span>
      </div>
      <span className={`${styles.status} ${styles[status]}`}>{status}</span>
    </li>
  );
}


export default RecentCustomer;
