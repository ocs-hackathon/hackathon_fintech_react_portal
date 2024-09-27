import { HiOutlineBanknotes, HiUserGroup } from "react-icons/hi2";
import Stat from "../Stat/Stat";
import styles from "./Stats.module.css";
import { VscGraph } from "react-icons/vsc";
import { FcMoneyTransfer } from "react-icons/fc";
function Stats() {
  return (
    <div className={styles.stats}>
      <Stat iconbgColor="#e0f2fe" iconColor="#fff" icon={<HiUserGroup />}>
        <div>
          <span className={styles.title}>Total customers</span>
          <h3>3400</h3>
        </div>
      </Stat>
      <Stat
        bgColor="#fef9c3d5"
        iconColor="#2e6930"
        icon={<HiOutlineBanknotes />}
      >
        <div>
          <span className={styles.title}>Total loans</span>
          <h3>$4.1M</h3>
        </div>
      </Stat>
      <Stat bgColor="#4caf4f24" iconColor="#4caf50" icon={<FcMoneyTransfer />}>
        <div>
          <span className={styles.title}>Active loans</span>
          <h3>40</h3>
        </div>
      </Stat>
      <Stat bgColor="#e0e7ff" iconColor="#374151" icon={<VscGraph />}>
        <div>
          <span className={styles.title}>Aceptance rate</span>
          <h3>60%</h3>
        </div>
      </Stat>
    </div>
  );
}

export default Stats;
