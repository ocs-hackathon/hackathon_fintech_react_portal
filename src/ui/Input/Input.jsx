import { FaSearch } from "react-icons/fa";
import styles from "./Input.module.css";
// eslint-disable-next-line react/prop-types
function Input({ onClick, placeholder }) {
  return (
    <div className={styles.search}>
      <FaSearch />
      <input
        type="text"
        placeholder={placeholder}
        onChange={(e) => onClick(e.target.value)}
      />
    </div>
  );
}

export default Input;
