/* eslint-disable react/prop-types */
import styles from "./LatestLoans.module.css";

import LatestItem from "./LatestItem";

// eslint-disable-next-line react/prop-types
function LatestLoans({ offers }) {
  const latest = offers
    .map((offer) => offer)
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    )
    .slice(0, 7);

  return (
    <ul className={styles.latest}>
      <h3>Latest offers</h3>
      <li className={styles.listHeading}>
        <span>Offer id</span>
        <span>Amount</span>
        <span>Interest rate</span>
        <span>Duration</span>
        <span>Status</span>
      </li>
      {latest.map((offer) => (
        <LatestItem offer={offer} key={offer.id} />
      ))}
    </ul>
  );
}

export default LatestLoans;
