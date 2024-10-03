/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import { HiOutlineBanknotes, HiUserGroup } from "react-icons/hi2";
import { VscGraph } from "react-icons/vsc";
import { FcMoneyTransfer } from "react-icons/fc";

import Stat from "../Stat/Stat";
import styles from "./Stats.module.css";
import { formatMoney } from "../../../utils/format";

function Stats({ offers, customers }) {
  const totalCustomers = customers?.length * 100;
  const totalLoanAmt =
    offers?.reduce((total, offer) => total + offer.amount, 0) * 10;

  const [custCount, setCustCount] = useState(0);
  const [totalLoan, setTotalLoan] = useState(0);
  const increment = Math.floor(totalCustomers / 10);
  const incrementLoan = Math.floor(totalLoanAmt / 10);
  const interval = 50;

  const activeLoanCount = offers?.filter(
    (offer) => offer.status.toLowerCase() === "active"
  ).length;
  const activeLoanRate = (activeLoanCount / offers.length) * 100;

  useEffect(
    function () {
      const timer = setInterval(function () {
        setCustCount((custCount) =>
          custCount > totalCustomers - increment
            ? totalCustomers
            : custCount + increment
        );
      }, interval);

      const loanTimer = setInterval(() => {
        setTotalLoan((loanCount) =>
          loanCount > totalLoanAmt - incrementLoan
            ? totalLoanAmt
            : loanCount + incrementLoan
        );
      }, interval);
      if (custCount > totalCustomers) clearInterval(timer);
      if (totalLoan > totalLoanAmt) clearInterval(loanTimer);

      return function () {
        clearInterval(timer);
        clearInterval(loanTimer);
      };
    },
    [
      custCount,
      totalLoan,
      incrementLoan,
      increment,
      totalCustomers,
      totalLoanAmt,
    ]
  );

  return (
    <div className={styles.stats}>
      <Stat iconbgColor="#e0f2fe" iconColor="#fff" icon={<HiUserGroup />}>
        <div>
          <span className={styles.title}>Total customers</span>
          <h3>{custCount}</h3>
        </div>
      </Stat>
      <Stat
        bgColor="#fef9c3d5"
        iconColor="#2e6930"
        icon={<HiOutlineBanknotes />}
      >
        <div>
          <span className={styles.title}>Total loans</span>
          <h3>{formatMoney(totalLoan)}</h3>
        </div>
      </Stat>
      <Stat bgColor="#4caf4f24" iconColor="#4caf50" icon={<FcMoneyTransfer />}>
        <div>
          <span className={styles.title}>Active loans</span>
          <h3>{activeLoanCount}</h3>
        </div>
      </Stat>
      <Stat bgColor="#e0e7ff" iconColor="#374151" icon={<VscGraph />}>
        <div>
          <span className={styles.title}>Aceptance rate</span>
          <h3>{activeLoanRate}%</h3>
        </div>
      </Stat>
    </div>
  );
}

export default Stats;
