import { Outlet, useParams } from "react-router-dom";
import CustomersList from "../../features/Customers/CustomersList/CustomersList";
import Header from "../../features/Customers/Header/Header";
import Pagination from "../../ui/Pagination/Pagination";
import { useQuery } from "@tanstack/react-query";
import { getCustomers } from "../../services/apiCustomers";

import { useAppContext } from "../../contexts/AppContext";
import Spinner from "../../ui/Spinner/Spinner";

function Customers() {
  const params = useParams();
  const { accessToken } = useAppContext();
  const { data: customers = [], isLoading } = useQuery({
    queryKey: ["customers"],
    queryFn: getCustomers.bind({ accessToken }),
  });

  if (isLoading) return <Spinner />;
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
