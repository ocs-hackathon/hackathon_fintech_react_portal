/* eslint-disable react/prop-types */

import styles from "./OffersChart.module.css";
import { useAppContext } from "../../../contexts/AppContext";
import { formatDate } from "../../../utils/format";
import { AreaChart } from "reaviz";
function OffersChart({ offers }) {
  const { isDarkMode } = useAppContext();
  const colors = isDarkMode
    ? {
        amount: { stroke: "#4f46e5", fill: "#4f46e5" },
        text: "#e5e7eb",
        background: "#18212f",
      }
    : {
        amount: { stroke: "#4f46e5", fill: "#c7d2fe" },
        text: "#374151",
        background: "#fff",
      };
  const data = offers.map((offer) => {
    return {
      lable: formatDate(offer.issuedAt),
      amount: offer.amount,
    };
  });

  return (
    <div className={styles.chart}>
      <h3>Loans</h3>
      <AreaChart
        height={300}
        width={300}
        data={[
          { key: new Date("11/29/2019"), data: 10 },
          { key: new Date("11/30/2019"), data: 7 },
          { key: new Date("12/1/2019"), data: 14 },
        ]}
      />

    </div>
  );
}

export default OffersChart;
