import { useParams } from "react-router-dom";
import { useCustomers } from "../../useCustomers";
import styles from "./Doc.module.css";
function Doc() {
  const { id } = useParams();
  const { customers } = useCustomers();
  const customer = customers?.find((customer) => id === customer.id);
  console.log(customer);
  return <div>Doc</div>;
}

export default Doc;
