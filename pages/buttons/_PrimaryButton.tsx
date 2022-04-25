import styles from "../../styles/Button.module.scss";

type PrimaryButtonProps = {
  children?: any;
};

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ children }) => {
  return (
    <button
      className={`${styles.primaryButtonVerticalMargin} ${styles.primaryButton}`}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
