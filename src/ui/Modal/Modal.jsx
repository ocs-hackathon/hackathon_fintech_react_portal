import styles from "./Modal.module.css";
// eslint-disable-next-line react/prop-types
function Modal({children}) {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>{children}</div>
    </div>
  );
}

export default Modal;
