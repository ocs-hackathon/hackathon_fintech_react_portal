import { useEffect } from "react";

import { useOffers } from "../useOffers";
import { useAppContext } from "../../../contexts/AppContext";

import styles from "./Header.module.css";
import Date from "../../../ui/Date/Date";
import Input from "../../../ui/Input/Input";

function Header() {
  const { setSearchResult, setShowModal, setTotalPages } = useAppContext();
  const { offers } = useOffers();
  function searchOffer(searchKey) {
    console.log(searchKey);
    if (searchKey.length < 3) {
      setSearchResult({});
      return;
    }
    const key = searchKey.toLowerCase();
    const searchResults = offers.filter(
      (offer) =>
        offer.loanId.toLowerCase().includes(key) ||
        offer.issuedBy.toLowerCase().includes(key) ||
        offer.amount == key
    );
    setSearchResult(searchResults);
  }

  useEffect(
    function () {
      setTotalPages(offers.length);
    },
    [setTotalPages, offers]
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
