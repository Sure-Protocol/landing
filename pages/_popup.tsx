import { useContext } from "react";
import styles from "../styles/Popup.module.scss";
import { PopupContext } from "../context/popup";

const Popup = () => {
  const popup = useContext(PopupContext);
  if (!popup.isOpen) {
    return null;
  }
  return (
    <div className={styles.popup}>
      <div className={styles.popupContent}>
        <p className="small">hodl on, we are currently building it</p>
      </div>
    </div>
  );
};

export default Popup;
