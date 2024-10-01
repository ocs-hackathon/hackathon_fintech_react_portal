import { IoMdClose } from "react-icons/io";
import styles from "./CreateOffer.module.css";
import { useForm } from "react-hook-form";
import { useAppContext } from "../../../contexts/AppContext";
import Error from "../../../ui/Error/Error";
import { createLoanOffer } from "../../../services/apiLoan";
import toast from "react-hot-toast";
function CreateOffer() {
  const { setShowModal, acessToken } = useAppContext();
  const { register, formState, handleSubmit } = useForm();
  const { errors } = formState;

  async function onSubmit(data) {
    try {
      const res = await createLoanOffer(data, acessToken);
      if (res) setShowModal(false);
    } catch (err) {
      toast.error(err.message);
      setShowModal(false);
    }
  }
  return (
    <div className={styles.wrapper}>
      <IoMdClose className={styles.icon} onClick={() => setShowModal(false)} />
      <div className={styles.bg}></div>
      <div className={styles.open}></div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Create Loan Offer</h1>
        <div className={styles.box}>
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            {...register("amount", { required: "This field is required" })}
          />
          <div className={styles.error}>
            {errors.amount && <Error message={errors.amount.message} />}
          </div>
        </div>
        <div className={styles.box}>
          <label htmlFor="rate">Interest rate</label>
          <input
            type="text"
            id="rate"
            {...register("interestRate", {
              required: "This field is required",
            })}
          />
          <div className={styles.error}>
            {errors.interestRate && (
              <Error message={errors.interestRate.message} />
            )}
          </div>
        </div>
        <div className={styles.box}>
          <label htmlFor="duration">Duration</label>
          <input
            type="text"
            id="duration"
            {...register("durationToReturn", {
              required: "This field is required",
            })}
          />
          <div className={styles.error}>
            {errors.durationToReturn && (
              <Error message={errors.durationToReturn.message} />
            )}
          </div>
        </div>
        <div className={styles.btns}>
          <button className={styles.btn} type="reset">
            Cancel
          </button>
          <button className={`${styles.btn} ${styles.create}`} type="submit">
            Create offer
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateOffer;
