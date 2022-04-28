import React from "react";
import { useContext } from "react";
import styles from "../styles/Popup.module.scss";
import { PopupContext } from "../context/popup";

interface PopupProps {
  title: String;
  children?: React.ReactNode;
}

const Popup: React.FC<PopupProps> = (props) => {
  const { title, children } = props;
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
