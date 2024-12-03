/* eslint-disable react/prop-types */
import { useAppContext } from "../../../contexts/AppContext";
import { formatDate } from "../../../utils/format";
import styles from "./OffersChart.module.css";
import {
  AreaChart,
  Area,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function OffersChart({ offers }) {
  const { isDarkMode } = useAppContext();
  const data = offers?.slice(0, 20).map((offer, i) => {
    return {
      label: formatDate(Date.now() - i * 1000 * 60 * 60 * 24).slice(0, -6),
      amount: offer.amount / 1000,
    };
  });

  const colors = isDarkMode
    ? {
        amount: { stroke: "#b88dfe", fill: "#b88dfe" },
        text: "#e5e7eb",
        background: "#18212f",
      }
    : {
        amount: { stroke: "#4f46e5", fill: "#c7d2fe" },
        text: "#374151",
        background: "#fff",
      };

  return (
    <div className={styles.chart}>
      <h3>Loans</h3>
      {offers.length ? (
        <ResponsiveContainer height={500} width="100%">
          <AreaChart data={data}>
            <XAxis
              dataKey="label"
              tick={{ fill: colors.text }}
              tickLine={{ stroke: colors.text }}
            />
            <YAxis
              unit="K"
              tick={{ fill: colors.text }}
              tickLine={{ stroke: colors.text }}
            />
            <CartesianGrid strokeDasharray="4" />
            <Tooltip contentStyle={{ backgroundColor: colors.background }} />
            <Area
              animateNewValues
              animationBegin={10}
              dataKey="amount"
              type="monotone"
              stroke={colors.amount.stroke}
              fill={colors.amount.fill}
              strokeWidth={2}
              name="Loan amount"
              unit="K ETB"
            />
          </AreaChart>
        </ResponsiveContainer>
      ) : (
        "No Loans To display"
      )}
    </div>
  );
}

export default OffersChart;
