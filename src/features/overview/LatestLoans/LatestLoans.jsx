/* eslint-disable react/prop-types */
import styles from "./LatestLoans.module.css";

import LatestItem from "./LatestItem";

// eslint-disable-next-line react/prop-types
function LatestLoans({ offers }) {
  const latest = offers
    .map((offer) => offer)
    .sort((a, b) => b.issuedAt - a.issuedAt)
    .slice(0, 7);

  return (
    <ul className={styles.latest}>
      <h3>Latest offers</h3>
      {latest.map((offer) => (
        <LatestItem offer={offer} key={offer.id} />
      ))}
    </ul>
  );
}

export default LatestLoans;
