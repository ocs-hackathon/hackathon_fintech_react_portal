/* eslint-disable react/prop-types */

import { AreaChart } from "reaviz";

import styles from "./OffersChart.module.css";

function OffersChart({ offers }) {
  const offersData = offers.map((offer) => {
    return { key: new Date(offer.issuedAt), data: offer.amount };
  });

  return (
    <div className={styles.chart}>
      <h3>Loans</h3>
      <AreaChart height="500px" width="100%" data={offersData.slice(0, 10)} />
    </div>
  );
}

export default OffersChart;
