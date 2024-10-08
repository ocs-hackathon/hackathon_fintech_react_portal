/* eslint-disable react/prop-types */

import { useAppContext } from "../../../contexts/AppContext";
import OfferItem from "../OfferItem/OfferItem";
import styles from "./OffersList.module.css";
import { useEffect } from "react";

function OffersList({ offers }) {
  const offersReversed = offers.map(
    (_, i, offers) => offers[offers.length - i - 1]
  );
  const { offerSearchResult, currentPage, setCurrentPage, recordPerPage } =
    useAppContext();

  const index = recordPerPage * currentPage;
  const lastIndex = index > offers?.length ? offers?.length : index;
  const rem = index - lastIndex;
  const firstIndex = lastIndex - recordPerPage;
  const offersPerPage = offersReversed.slice(firstIndex + rem, lastIndex);
  const offerSearchResultPerPage = offerSearchResult?.length
    ? offerSearchResult?.slice(firstIndex + rem, lastIndex)
    : offerSearchResult;

  useEffect(
    function () {
      setCurrentPage(1);
    },
    [setCurrentPage]
  );

  return (
    <ul className={styles.list}>
      <li className={styles.headingList}>
        <span>Loan Id</span>
        <span>Issued at</span>
        <span>Amount</span>
        <span>Interest Rate</span>
        <span>Duration</span>
        <span>Issued By</span>
        <span>Borrower Id</span>
        <span>Status</span>
      </li>

      {Object.keys(offerSearchResult).length
        ? offerSearchResultPerPage?.map((offer) => (
            <OfferItem key={offer.id} offer={offer} />
          ))
        : offersPerPage?.map((offer) => (
            <OfferItem key={offer.id} offer={offer} />
          ))}
    </ul>
  );
}

export default OffersList;
