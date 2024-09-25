/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import styles from "./Customer.module.css";
function Customer({ customer }) {
  const navigate = useNavigate();
  const { name, email, id, status, loan, image, country } = customer;
  return (
    <li className={styles.user} onClick={() => navigate(`/customers/${id}`)}>
      <span>#{id}</span>
      <div className={styles.name}>
        <img src={image} alt={`${name}-image`} />
        <span>{name}</span>
      </div>
      <span>{email}</span>
      <span>{country}</span>
      <button className={`${styles[status]} ${styles.status}`}>{status}</button>
      <span>${loan}</span>
    </li>
  );
}

export default Customer;
