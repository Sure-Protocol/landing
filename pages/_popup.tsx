import { useContext } from "react";
import styles from "../styles/Popup.module.scss";
import { PopupContext } from "../context/popup";

type PopupProps = {
  title: String;
  description: String;
};

const Popup: React.FC<PopupProps> = ({ title, children }) => {
  const popup = useContext(PopupContext);
  if (!popup.isOpen) {
    return null;
  }
  return (
    <div className={styles.popup}>
      <div className={styles.popupContent}>
        <h2 className="h2-margin-s">{title}</h2>
        {children}
      </div>
    </div>
  );
};

export default Popup;
