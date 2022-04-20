import styles from "../styles/Header.module.scss";
import Image from "next/image";
import { css } from "@emotion/css";
import { useRouter } from "next/router";
import Link from "next/link";

import sureLogo from "../public/sure.svg";

const Header = () => {
  const router = useRouter();
  return (
    <div className={styles.header}>
      <div
        className={css`
          padding-top: 15px;
        `}
      >
        <Image
          src={sureLogo}
          alt="Picture of the author"
          width={150}
          height={150}
        />
      </div>
      <nav className={styles.navbar}>
        <ul className={styles.navList}>
          <li className={styles.navListItem}>
            <Link href="/">
              <a className={router.asPath === "/" ? "isActive" : ""}>Home</a>
            </Link>
          </li>
        </ul>
        <button className="primary-button">App</button>
      </nav>
    </div>
  );
};

export default Header;
