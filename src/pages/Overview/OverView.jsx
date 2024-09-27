import styles from "./OverView.module.css";
import Stats from "../../features/overview/Stats/Stats";
import RecentCustomers from "../../features/overview/RecentCustomers/RecentCustomers";

function OverView() {
  return (
    <div className={styles.overview}>
      <h1>Overview</h1>
      <Stats />
      <div>
        <RecentCustomers />
      </div>
    </div>
  );
}

export default OverView;
