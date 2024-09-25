import { useParams } from "react-router-dom";

import { useCustomers } from "../../useCustomers";
import styles from "./Personal.module.css";
import { formatDate } from "../../../../utils/format";
import { getCustomers } from "../../../../testData";

function Personal() {
  const { id } = useParams();
  const { customers = getCustomers() } = useCustomers();
  const customer = customers?.find((customer) => id === customer.id);
  const { name, country } = customer;
  const [firstName, lastName] = name.split(" ");

  // first name, last name, middle name,
  // phone, country, date of birth, bank, bank account,
  // id(national or passport) and bank statement.
  
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
          <p>{`+251 986261979`}</p>
        </div>
        <div className={styles.row}>
          <p className={styles.heading}>Residence</p>
          <p>{country}</p>
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
          <p className={styles.heading}>Residence</p>
          <p>{country}</p>
        </div>
      </div>
    </div>
  );
}

export default Personal;
