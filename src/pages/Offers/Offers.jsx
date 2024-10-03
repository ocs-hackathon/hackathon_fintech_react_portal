import { useQuery } from "@tanstack/react-query";

import { useAppContext } from "../../contexts/AppContext";
import { getAllOffers } from "../../services/apiLoan";

import OffersList from "../../features/Offers/OffersList/OffersList";
import Pagination from "../../ui/Pagination/Pagination";
import Spinner from "../../ui/Spinner/Spinner";
import Header from "../../features/Offers/Header/Header";
import Modal from "../../ui/Modal/Modal";
import CreateOffer from "../../features/Offers/CreateOffer/CreateOffer";
import NoResultError from "../../ui/NoResultError/NoResultError";
import { useEffect } from "react";

function Offers() {
  const { accessToken, showModal, setTotalPages } = useAppContext();

  const { data: offers = [], isLoading } = useQuery({
    queryKey: ["loan_offers"],
    queryFn: getAllOffers.bind({ accessToken }),
  });

  useEffect(
    function () {
      setTotalPages(offers.length);
    },
    [setTotalPages, offers.length]
  );
  if (isLoading) return <Spinner />;
  return (
    <div>
      <h1>All Offers</h1>
      <Header />
      {offers.length ? (
        <>
          <OffersList offers={offers} />
          <Pagination total={offers.length} />
        </>
      ) : (
        <NoResultError message="There are no Loan offers created. Click on create new offer at the top corner to start." />
      )}
      {showModal && (
        <Modal>
          <CreateOffer />
        </Modal>
      )}
    </div>
  );
}

export default Offers;
