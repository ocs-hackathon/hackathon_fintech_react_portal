/* eslint-disable react/prop-types */

import { AreaChart, AreaSeries, TooltipArea } from "reaviz";

import styles from "./OffersChart.module.css";
import { formatDate } from "../../../utils/format";

function OffersChart({ offers }) {
  const offersData = offers.map((offer) => {
    return { key: new Date(offer.issuedAt), data: offer.amount };
  });

  console.log(offersData);
  return (
    <div className={styles.chart}>
      <h3>Loans</h3>
      <AreaChart height="500px" width="100%" data={offersData.slice(0, 10)} />
      <TooltipArea />
    </div>
  );
}

export default OffersChart;
