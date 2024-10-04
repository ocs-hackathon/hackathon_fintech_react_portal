import { useEffect, useState } from "react";

import { useCustomers } from "../../hooks/useCustomers";
import { useOffers } from "../../hooks/useOffers";

import styles from "./OverView.module.css";
import Stats from "../../features/overview/Stats/Stats";
// import RecentCustomers from "../../features/overview/RecentCustomers/RecentCustomers";
import LatestLoans from "../../features/overview/LatestLoans/LatestLoans";
import OffersChart from "../../features/overview/charts/OffersChart";
import Spinner from "../../ui/Spinner/Spinner";

function OverView() {
  const { offers, isLoadingOffers } = useOffers();
  const { customers, isLoadingCustomers } = useCustomers();

  const [fakeLoading, setFakeLoading] = useState(true);

  useEffect(function () {
    const wait = () => new Promise((res) => setTimeout(res, 1000));
    async function toogleFakeLoading() {
      await wait();
      setFakeLoading(false);
    }
    toogleFakeLoading();
  }, []);

  if (isLoadingOffers || isLoadingCustomers || fakeLoading) return <Spinner />;

  return (
    <div className={styles.overview}>
      <h1>Overview</h1>
      <Stats offers={offers} customers={customers} />
      <div className={styles.recents}>
        <OffersChart offers={offers} />
        <LatestLoans offers={offers} />
      </div>
      {/* <RecentCustomers customers={customers} /> */}
    </div>
  );
}

export default OverView;
