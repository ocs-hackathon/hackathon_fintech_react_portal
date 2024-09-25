import { IoCalendar } from "react-icons/io5";
import styles from "./Date.module.css";
import { formatDate } from "../../utils/format";
function Date() {
  return (
    <div className={styles.date}>
      <IoCalendar />
      <span>{formatDate()}</span>
    </div>
  );
}

export default Date;
