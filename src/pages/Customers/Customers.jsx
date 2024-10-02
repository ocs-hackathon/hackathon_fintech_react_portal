import { Outlet, useParams } from "react-router-dom";

import { useCustomers } from "../../features/Customers/useCustomers";

import CustomersList from "../../features/Customers/CustomersList/CustomersList";
import Header from "../../features/Customers/Header/Header";
import Pagination from "../../ui/Pagination/Pagination";
import Spinner from "../../ui/Spinner/Spinner";
import NoResultError from "../../ui/NoResultError/NoResultError";

function Customers() {
  const params = useParams();

  const { customers, isLoadingCustomers } = useCustomers();

  if (isLoadingCustomers) return <Spinner />;
  return (
    <div>
      {params.id ? (
        <Outlet />
      ) : 5 < 4 ? (
        <>
          <Header />
          <CustomersList customers={customers} />
          <Pagination total={customers.length} />
        </>
      ) : (
        <NoResultError />
      )}
    </div>
  );
}

export default Customers;
