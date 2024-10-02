import { useCustomers } from "../../features/Customers/useCustomers";

import styles from "./OverView.module.css";
import Stats from "../../features/overview/Stats/Stats";
// import RecentCustomers from "../../features/overview/RecentCustomers/RecentCustomers";
import LatestLoans from "../../features/overview/LatestLoans/LatestLoans";
import OffersChart from "../../features/overview/charts/OffersChart";
import Spinner from "../../ui/Spinner/Spinner";
import { useOffers } from "../../features/Offers/useOffers";

function OverView() {
  const { offers, isLoadingOffers } = useOffers();
  const { customers, isLoadingCustomers } = useCustomers();

  if (isLoadingOffers || isLoadingCustomers) return <Spinner />;

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
