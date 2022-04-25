import { useContext } from "react";
import { PopupContext } from "../../context/popup";
import styles from "../styles/Header.module.scss";
import Image from "next/image";
import { css } from "@emotion/css";
import { useRouter } from "next/router";
import Link from "next/link";
import Popup from "../_popup";

import sureLogo from "../public/sure.svg";

const Header = () => {
  const popup = useContext(PopupContext);
  const router = useRouter();
  return (
    <div>
      <div className={styles.header}>
        <div
          className={css`
            padding-top: 15px;
          `}
        >
          <Image src={sureLogo} alt="Sure Logo" width={150} height={150} />
        </div>
        <nav className={styles.navbar}>
          <ul className={styles.navList}>
            <li className={styles.navListItem}>
              <Link href="/">
                <a className={router.asPath === "/" ? "isActive" : ""}>Home</a>
              </Link>
            </li>
          </ul>
          <button
            onClick={() => popup.toggle(!popup.isOpen)}
            className="primary-button"
          >
            App
          </button>
        </nav>
      </div>
      <Popup />
    </div>
  );
};

export default Header;
