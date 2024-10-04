import { Outlet, useParams } from "react-router-dom";

import { useCustomers } from "../../hooks/useCustomers";

import CustomersList from "../../features/Customers/CustomersList/CustomersList";
import Header from "../../features/Customers/Header/Header";
import Pagination from "../../ui/Pagination/Pagination";
import Spinner from "../../ui/Spinner/Spinner";
import NoResultError from "../../ui/NoResultError/NoResultError";
import { useAppContext } from "../../contexts/AppContext";
import { useEffect, useState } from "react";

function Customers() {
  const params = useParams();
  const { setTotalPages, setSearchResult } = useAppContext();
  const { customers, isLoadingCustomers } = useCustomers();
  const [fakeLoading, setFakeLoading] = useState(true);

  useEffect(
    function () {
      setTotalPages(customers.length);
      setSearchResult([]);
      const wait = () => new Promise((res) => setTimeout(res, 1000));
      async function toogleLoading() {
        await wait();
        setFakeLoading(false);
      }
      toogleLoading();
    },
    [setTotalPages, customers.length, setSearchResult]
  );
  if (isLoadingCustomers || fakeLoading) return <Spinner />;
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
