/* eslint-disable react/prop-types */
import { formatDate } from "../../../utils/format";
import styles from "./OfferItem.module.css";

function OfferItem({ offer }) {
  const {
    id: offerId,
    // issuedAt,
    amount,
    interestRate,
    durationToReturn: duration,
    // issuedBy,
    status,
    // borrowerId = "",
  } = offer;
  return (
    <li className={styles.offer}>
      <span>#{offerId}</span>
      <span>{formatDate()}</span>
      <span>${amount}</span>
      <span>{interestRate}</span>
      <span>{duration}</span>
      <span>#{123121}</span>
      <span>#{432141}</span>
      <button className={`${styles[status]} ${styles.status}`}>{status}</button>
    </li>
  );
}

export default OfferItem;
