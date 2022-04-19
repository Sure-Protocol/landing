import styles from "../styles/Footer.module.scss";
import Image from "next/image";

import sureLogo from "../public/sure.svg";
import twitterLogo from "../public/twitterLogo.svg";
import discordLogo from "../public/discordLogo.svg";
import githubLogo from "../public/GithubMark.png";

import { css, cx } from "@emotion/css";

const Footer = () => {
  return (
    <footer
      className={css`
        display: flex;
        justify-content: flex-start;
        padding-bottom: 4rem;
        padding-top: 4rem;
      `}
    >
      <div className={styles.footerItems}>
        <Image
          src={sureLogo}
          alt="Picture of the author"
          width={100}
          height={100}
        />
      </div>
      <div className={styles.footerItems}>
        <div
          className={css`
            margin-right: 7rem;
          `}
        >
          <h2>Social</h2>
          <ul
            className={css`
              list-style: none;
              padding: 0;
            `}
          >
            <li className={`margin-bottom-m ${styles.footerItem}`}>
              <a
                className={styles.footerItemTag}
                href="https://twitter.com/SureProtocol"
              >
                <div className={styles.footerItemImage}>
                  <Image
                    src={twitterLogo}
                    alt="Twitter Logo"
                    width={15}
                    height={15}
                  />
                </div>
                Twitter
              </a>
            </li>
            <li className="margin-bottom-m">
              <a
                className={styles.footerItemTag}
                href="https://discord.gg/GRaHtPufqn"
              >
                <div className={styles.footerItemImage}>
                  <Image
                    src={discordLogo}
                    alt="Discord Logo"
                    width={15}
                    height={15}
                  />
                </div>
                Discord
              </a>
            </li>
            <li className="margin-bottom-m">
              <a
                className={styles.footerItemTag}
                href="https://github.com/Sure-Protocol"
              >
                <div className={styles.footerItemImage}>
                  <Image
                    src={githubLogo}
                    alt="Github Logo"
                    width={15}
                    height={15}
                  />
                </div>
                Github
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2>Documents</h2>
          <ul
            className={css`
              list-style: none;
              padding: 0;
            `}
          >
            <li className="margin-bottom-m">
              <a
                className={styles.footerItemTag}
                href="https://sure-claims.slite.com/p/note/S5iFtyghDI-HohuJVMTXBS"
              >
                White Paper
              </a>
            </li>
          </ul>

          <ul
            className={css`
              list-style: none;
              padding: 0;
            `}
          >
            <li className="margin-bottom-m">
              <a
                className={styles.footerItemTag}
                href="https://medium.com/@sure.protocol"
              >
                Medium
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
