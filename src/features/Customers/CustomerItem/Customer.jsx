/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import styles from "./Customer.module.css";
function Customer({ customer }) {
  const navigate = useNavigate();
  const { fullName, email, id, status, activeLoan, address } = customer;
  return (
    <li className={styles.user} onClick={() => navigate(`/customers/${id}`)}>
      <span>#{id}</span>
      <div className={styles.name}>
        <img src="../../../../public/ava.png" alt={`${name}-image`} />
        <span>{fullName}</span>
      </div>
      <span>{email}</span>
      <span>{address}</span>
      <button className={`${styles[status]} ${styles.status}`}>{status}</button>
      <span>{activeLoan ? `$${activeLoan}` : "-"}</span>
    </li>
  );
}

export default Customer;
