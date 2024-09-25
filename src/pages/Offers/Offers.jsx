import { useQuery } from "@tanstack/react-query";
import OffersList from "../../features/Offers/OffersList/OffersList";
import Pagination from "../../ui/Pagination/Pagination";
import { getAllOffers } from "../../services/apiLoan";
import Spinner from "../../ui/Spinner/Spinner";
import Header from "../../features/Offers/Header/Header";
import { useAppContext } from "../../contexts/AppContext";
import Modal from "../../ui/Modal/Modal";
import CreateOffer from "../../features/Offers/CreateOffer/CreateOffer";

function Offers() {
  const { acessToken } = useAppContext();
  const { showModal } = useAppContext();

  const { data: offers, isLoading } = useQuery({
    queryKey: ["loan_offers"],
    queryFn: getAllOffers.bind({ acessToken }),
  });

  if (isLoading) return <Spinner />;
  return (
    <div>
      <h1>All Offers</h1>
      <Header />
      <OffersList offers={offers} />
      <Pagination total={offers?.length} />
      {showModal && (
        <Modal>
          <CreateOffer />
        </Modal>
      )}
    </div>
  );
}

export default Offers;