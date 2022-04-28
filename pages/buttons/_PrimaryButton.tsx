import styles from "../../styles/Button.module.scss";

type PrimaryButtonProps = {
  children?: any;
  onClick: () => void;
};

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ children, onClick }) => {
  return (
    <button
      className={`${styles.primaryButtonVerticalMargin} ${styles.primaryButton}`}
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
