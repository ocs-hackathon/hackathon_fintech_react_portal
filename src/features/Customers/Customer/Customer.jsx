import { NavLink, Outlet, useParams } from "react-router-dom";
import styles from "./Customer.module.css";

// import { useCustomers } from "../useCustomers";
function Customer() {
  const { id } = useParams();
  return (
    <div className={styles.user}>
      <h1>Customer Profile</h1>
      <div className={styles.header}>
        <img src="../../../../../public/user.png" alt="user-avatar" />
        <div>
          <h3>User id: {id}</h3>
        </div>
      </div>
      <nav>
        <ul className={styles.navbar}>
          <li>
            <NavLink to={`/customers/${id}/personal`}>Personal Info</NavLink>
          </li>
          <li>
            <NavLink to={`/customers/${id}/document`}>Document</NavLink>
          </li>
          <li>
            <NavLink to={`/customers/${id}/status`}>Status</NavLink>
          </li>
        </ul>
      </nav>
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
}

export default Customer;
