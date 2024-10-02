import { Outlet, useParams } from "react-router-dom";
import CustomersList from "../../features/Customers/CustomersList/CustomersList";
import Header from "../../features/Customers/Header/Header";
import Pagination from "../../ui/Pagination/Pagination";

import { useAppContext } from "../../contexts/AppContext";
import Spinner from "../../ui/Spinner/Spinner";
import { useEffect } from "react";
import { useCustomers } from "../../features/Customers/useCustomers";

function Customers() {
  const params = useParams();
  const { setTotalPages } = useAppContext();

  const { customers, isLoadingCustomers } = useCustomers();

  useEffect(
    function () {
      setTotalPages(customers.length);
    },
    [setTotalPages, customers]
  );

  if (isLoadingCustomers) return <Spinner />;
  return (
    <div>
      {params.id ? (
        <Outlet />
      ) : (
        <>
          <Header />
          <CustomersList customers={customers} />
          <Pagination total={customers.length} />
        </>
      )}
    </div>
  );
}

export default Customers;
