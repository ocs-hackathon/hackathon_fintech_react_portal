import { useQuery } from "@tanstack/react-query";

import { useAppContext } from "../../contexts/AppContext";
import { getAllOffers } from "../../services/apiLoan";

import OffersList from "../../features/Offers/OffersList/OffersList";
import Pagination from "../../ui/Pagination/Pagination";
import Spinner from "../../ui/Spinner/Spinner";
import Header from "../../features/Offers/Header/Header";
import Modal from "../../ui/Modal/Modal";
import CreateOffer from "../../features/Offers/CreateOffer/CreateOffer";

function Offers() {
  const { accessToken, showModal } = useAppContext();

  const { data: offers = [], isLoading } = useQuery({
    queryKey: ["loan_offers"],
    queryFn: getAllOffers.bind({ accessToken }),
  });

  if (isLoading) return <Spinner />;
  return (
    <div>
      <h1>All Offers</h1>
      <Header />
      <OffersList offers={offers} />
      <Pagination total={offers.length} />
      {showModal && (
        <Modal>
          <CreateOffer />
        </Modal>
      )}
    </div>
  );
}

export default Offers;
