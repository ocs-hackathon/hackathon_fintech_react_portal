import { useParams } from "react-router-dom";
import { useCustomers } from "../../useCustomers";
import styles from "./Doc.module.css";
import NoDocError from "./NoDocError";

function Doc() {
  const { id } = useParams();
  const { customers } = useCustomers();
  const customer = customers?.find((customer) => +id === customer.id);
  // const src = URL.createObjectURL(customer.photo);
  if (!false) return <NoDocError message="No document uploaded." />;
  return (
    <div className={styles.doc}>
      {/* <img src={src} alt="user-document" /> */}
    </div>
  );
}

export default Doc;
