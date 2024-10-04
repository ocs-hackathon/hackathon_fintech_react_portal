import { useEffect, useState } from "react";

import { useAppContext } from "../../contexts/AppContext";

import OffersList from "../../features/Offers/OffersList/OffersList";
import Pagination from "../../ui/Pagination/Pagination";
import Spinner from "../../ui/Spinner/Spinner";
import Header from "../../features/Offers/Header/Header";
import Modal from "../../ui/Modal/Modal";
import CreateOffer from "../../features/Offers/CreateOffer/CreateOffer";
import NoResultError from "../../ui/NoResultError/NoResultError";

import { useOffers } from "../../hooks/useOffers";

function Offers() {
  const { showModal, setTotalPages } = useAppContext();

  const { offers, isLoadingOffers } = useOffers();

  const [fakeLoading, setFakeLoading] = useState(true);

  useEffect(
    function () {
      const wait = () => new Promise((res) => setTimeout(res, 1000));
      setTotalPages(offers.length);
      async function toogleLoading() {
        await wait();
        setFakeLoading(false);
      }
      toogleLoading();
    },
    [setTotalPages, offers.length]
  );

  if (isLoadingOffers || fakeLoading) return <Spinner />;

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
