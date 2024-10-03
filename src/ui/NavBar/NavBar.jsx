import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";
import {
  MdOutlineLocalOffer,
  // MdOutlineQueryStats,
  MdWindow,
} from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { FaSignInAlt } from "react-icons/fa";
// import { LuCircleDollarSign } from "react-icons/lu";
import { FaUsers } from "react-icons/fa";

function NavBar() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.main}>
        <li>
          <NavLink to="overview" className={styles.link}>
            <MdWindow className={styles.icon} />
            <span className={styles.linkDesc}>Overview</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="offers" className={styles.link}>
            <MdOutlineLocalOffer className={styles.icon} />
            <span>Loan Offers</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="customers" className={styles.link}>
            <FaUsers className={styles.icon} />
            <span>Customers</span>
          </NavLink>
        </li>
        {/* <li>
          <NavLink to="transactions" className={styles.link}>
            <LuCircleDollarSign className={styles.icon} />
            <span>Transactions</span>
          </NavLink>
        </li> */}
        {/* <li>
          <NavLink to="analytics" className={styles.link}>
            <MdOutlineQueryStats className={styles.icon} />
            <span>Analytics</span>
          </NavLink>
        </li> */}
      </ul>
      <ul className={styles.other}>
        <li>
          <NavLink to="settings" className={styles.link}>
            <IoSettings className={styles.icon} />
            <span>Settings</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="signup" className={styles.link}>
            <FaSignInAlt />
            <span>Sign up</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
