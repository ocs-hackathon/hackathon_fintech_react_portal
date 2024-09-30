/* eslint-disable react/prop-types */
// import toast from "react-hot-toast";

import { useAppContext } from "../../../contexts/AppContext";

import styles from "./CustomersList.module.css";
import Customer from "../CustomerItem/Customer";
import { getCustomers } from "../../../testData";
import { useEffect } from "react";

function CustomersList({ customers = getCustomers() }) {
  const {
    currentPage,
    recordPerPage,
    searchResult = [],
    setTotalPages,
  } = useAppContext();

  const index = recordPerPage * currentPage;
  const lastIndex = index > customers?.length ? customers?.length : index;
  const rem = index - lastIndex;
  const firstIndex = lastIndex - recordPerPage;
  const customersPerPage = customers?.slice(firstIndex + rem, lastIndex);
  const searchResultPerPage = searchResult?.length
    ? searchResult?.slice(firstIndex + rem, lastIndex)
    : searchResult;

  useEffect(
    function () {
      setTotalPages(
        searchResult.length ? searchResult.length : customers.length
      );
    },
    [searchResult.length, setTotalPages, customers]
  );

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
        ? searchResultPerPage?.map((customer) => (
            <Customer key={customer.id} customer={customer} />
          ))
        : customersPerPage?.map((customer) => (
            <Customer key={customer.id} customer={customer} />
          ))}
    </ul>
  );
}

export default CustomersList;
