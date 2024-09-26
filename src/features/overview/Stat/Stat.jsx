/* eslint-disable react/prop-types */
import styles from "./Stat.module.css";

function Stat({ children, bgColor, iconColor, icon }) {
  const style = {
    backgroundColor: bgColor,
    color: iconColor,
  };
  return (
    <div className={styles.stat}>
      <span className={styles.icon} style={style}>
        {icon}
      </span>
      {children}
    </div>
  );
}

export default Stat;
