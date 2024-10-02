import { useParams } from "react-router-dom";

import { useCustomers } from "../../useCustomers";
import styles from "./Personal.module.css";
import { formatDate } from "../../../../utils/format";

function Personal() {
  const { id } = useParams();
  const { customers } = useCustomers();
  console.log(customers);
  const customer = customers?.find((customer) => id === String(customer.id));
  const { fullName: name, address, creditScore, phoneNumber } = customer;
  const [firstName, lastName] = name.split(" ");

  return (
    <div className={styles.personal}>
      <div>
        <div className={styles.row}>
          <p className={styles.heading}>First Name</p>
          <p>{firstName}</p>
        </div>
        <div className={styles.row}>
          <p className={styles.heading}>Last Name</p>
          <p>{lastName}</p>
        </div>
        <div className={styles.row}>
          <p className={styles.heading}>Date of Birth</p>
          <p>{formatDate()}</p>
        </div>
        <div className={styles.row}>
          <p className={styles.heading}>Phone no</p>
          <p>{phoneNumber}</p>
        </div>
        <div className={styles.row}>
          <p className={styles.heading}>Residence</p>
          <p>{address}</p>
        </div>
      </div>
      <div>
        <div className={styles.row}>
          <p className={styles.heading}>Bank</p>
          <p>{`CBE`}</p>
        </div>
        <div className={styles.row}>
          <p className={styles.heading}>Account no</p>
          <p>{`1000464835078`}</p>
        </div>

        <div className={styles.row}>
          <p className={styles.heading}>Credit score</p>
          <p>{creditScore}</p>
        </div>
      </div>
    </div>
  );
}

export default Personal;
