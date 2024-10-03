import { useEffect } from "react";

import { useOffers } from "../useOffers";
import { useAppContext } from "../../../contexts/AppContext";

import styles from "./Header.module.css";
import Date from "../../../ui/Date/Date";
import Input from "../../../ui/Input/Input";

function Header() {
  const {
    setOfferSearchResult,
    setShowModal,
    setTotalPages,
    offerSearchResult,
  } = useAppContext();
  const { offers } = useOffers();
  function searchOffer(searchKey) {
    if (!searchKey.length) {
      setOfferSearchResult([]);
      setTotalPages(offers.length);
      return;
    }
    const key = searchKey.toLowerCase();
    const searchResults = offers.filter(
      (offer) =>
        String(offer.id).toLowerCase().includes(key) ||
        String(offer.amount).includes(key)
      // offer.issuedBy.toLowerCase().includes(key) ||
    );
    setOfferSearchResult(searchResults);
  }

  useEffect(
    function () {
      setTotalPages((state) =>
        offerSearchResult.length ? offerSearchResult.length : state
      );
    },
    [setTotalPages, offerSearchResult]
  );

  return (
    <div className={styles.header}>
      <Date />
      <Input
        onClick={searchOffer}
        placeholder={"Search by offer id | issuer | amount"}
      />
      <button className={styles.btn} onClick={() => setShowModal(true)}>
        Create new Offer
      </button>
    </div>
  );
}

export default Header;
