import { Outlet, useParams } from "react-router-dom";

import { useCustomers } from "../../features/Customers/useCustomers";

import CustomersList from "../../features/Customers/CustomersList/CustomersList";
import Header from "../../features/Customers/Header/Header";
import Pagination from "../../ui/Pagination/Pagination";
import Spinner from "../../ui/Spinner/Spinner";
import NoResultError from "../../ui/NoResultError/NoResultError";
import { useAppContext } from "../../contexts/AppContext";
import { useEffect } from "react";

function Customers() {
  const params = useParams();
  const { setTotalPages } = useAppContext();
  const { customers, isLoadingCustomers } = useCustomers();

  useEffect(
    function () {
      setTotalPages(customers.length);
    },
    [setTotalPages, customers.length]
  );

  if (isLoadingCustomers) return <Spinner />;
  return (
    <div>
      {params.id ? (
        <Outlet />
      ) : customers.length ? (
        <>
          <Header />
          <CustomersList customers={customers} />
          <Pagination total={customers.length} />
        </>
      ) : (
        <NoResultError message="No customers data found." />
      )}
    </div>
  );
}

export default Customers;
