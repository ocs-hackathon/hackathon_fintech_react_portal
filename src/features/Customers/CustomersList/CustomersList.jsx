/* eslint-disable react/prop-types */
// import toast from "react-hot-toast";

import { useAppContext } from "../../../contexts/AppContext";

import styles from "./CustomersList.module.css";
import Customer from "../CustomerItem/Customer";
import { getCustomers } from "../../../testData";

function CustomersList({ customers = getCustomers() }) {
  const { currentPage, recordPerPage, searchResult } = useAppContext();

  const index = recordPerPage * currentPage;
  const lastIndex = index > customers?.length ? customers?.length : index;
  const rem = index - lastIndex;
  const firstIndex = lastIndex - recordPerPage;
  const customersPerPage = customers?.slice(firstIndex + rem, lastIndex);

  return (
    <ul className={styles.list}>
      <li className={styles.headingList}>
        <span>User Id</span>
        <span>Name</span>
        <span>Email</span>
        <span>Country</span>
        <span>Status</span>
        <span>Loan</span>
      </li>

      {Object.keys(searchResult).length
        ? searchResult?.map((customer) => (
            <Customer key={customer.id} customer={customer} />
          ))
        : customersPerPage?.map((customer) => (
            <Customer key={customer.id} customer={customer} />
          ))}
    </ul>
  );
}

export default CustomersList;
