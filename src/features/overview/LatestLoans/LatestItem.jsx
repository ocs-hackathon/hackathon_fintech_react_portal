/* eslint-disable react/prop-types */
import styles from "./LatestItem.module.css";

function LatestItem({ offer }) {
  const {
    id: loanId,
    amount,
    durationToReturn: duration,
    interestRate,
    status,
  } = offer;
  return (
    <li className={styles.offer}>
      <span className={styles.bold}>#{loanId}</span>
      <span>${amount}</span>
      <span>{interestRate}</span>
      <span>{duration}</span>
      <button className={`${styles.status} ${styles[status]}`}>{status}</button>
    </li>
  );
}

export default LatestItem;
