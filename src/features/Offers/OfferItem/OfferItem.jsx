/* eslint-disable react/prop-types */
import { formatDate } from "../../../utils/format";
import styles from "./OfferItem.module.css";

function OfferItem({ offer }) {
  const {
    loanId,
    issuedAt,
    amount,
    interestRate,
    duration,
    issuedBy,
    status,
    borrowerId,
  } = offer;
  return (
    <li className={styles.offer}>
      <span>#{loanId}</span>
      <span>{formatDate(issuedAt)}</span>
      <span>${amount}</span>
      <span>{interestRate}</span>
      <span>{duration}</span>
      <span>#{issuedBy}</span>
      <span>#{borrowerId}</span>
      <button className={`${styles[status]} ${styles.status}`}>{status}</button>
    </li>
  );
}

export default OfferItem;
