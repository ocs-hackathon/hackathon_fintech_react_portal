/* eslint-disable react/prop-types */
import { formatDate } from "../../../utils/format";
import styles from "./OfferItem.module.css";

function OfferItem({ offer }) {
  const {
    id: offerId,
    createdAt,
    amount,
    interestRate,
    durationToReturn: duration,
    user: { id: issuedBy },
    status,
    userId: borrowerId = "",
  } = offer;
  
  return (
    <li className={styles.offer}>
      <span>#{offerId}</span>
      <span>{formatDate(createdAt)}</span>
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
