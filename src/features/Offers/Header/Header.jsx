import { useQuery } from "@tanstack/react-query";
import { useAppContext } from "../../../contexts/AppContext";
import Date from "../../../ui/Date/Date";
import Input from "../../../ui/Input/Input";
import styles from "./Header.module.css";
import { getAllOffers } from "../../../services/apiLoan";

function Header() {
  const { setSearchResult, setShowModal } = useAppContext();
  const { data: offers = JSON.parse(localStorage.getItem("offers")) } =
    useQuery({
      queryKey: ["offers"],
      queryFn: getAllOffers,
    });
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
