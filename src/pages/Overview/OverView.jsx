import styles from "./OverView.module.css";
import Stats from "../../features/overview/Stats/Stats";
import RecentCustomers from "../../features/overview/RecentCustomers/RecentCustomers";
import LatestLoans from "../../features/overview/LatestLoans/LatestLoans";
import OffersChart from "../../features/overview/charts/OffersChart";
import { useQuery } from "@tanstack/react-query";
import { getAllOffers } from "../../services/apiLoan";
import { useAppContext } from "../../contexts/AppContext";
import Spinner from "../../ui/Spinner/Spinner";
import { useAuthenticate } from "../../features/authentication/useAuthenticate";

function OverView() {
  useAuthenticate();
  const { accessToken } = useAppContext();
  const { data: offers, isLoading } = useQuery({
    queryKey: ["loan_offers"],
    queryFn: getAllOffers.bind({ accessToken }),
  });

  if (isLoading) return <Spinner />;

  return (
    <div className={styles.overview}>
      <h1>Overview</h1>
      <Stats />
      <div className={styles.recents}>
        <RecentCustomers />
        <LatestLoans offers={offers} />
      </div>
      <OffersChart offers={offers} />
    </div>
  );
}

export default OverView;
