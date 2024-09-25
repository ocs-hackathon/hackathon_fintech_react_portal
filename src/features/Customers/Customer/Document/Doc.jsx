import { useParams } from "react-router-dom";
import { useCustomers } from "../../useCustomers";
import styles from "./Doc.module.css";
function Doc() {
  const { id } = useParams();
  const { customers } = useCustomers();
  const customer = customers?.find((customer) => id === customer.id);
  console.log(customer);
  const src = URL.createObjectURL(customer.photo);
  return (
    <div className={styles.doc}>
      <img src={src} alt="user-document" />
    </div>
  );
}

export default Doc;
