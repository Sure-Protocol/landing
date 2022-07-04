import styles from "../styles/Footer.module.scss";
import Image from "next/image";

import sureLogo from "../public/sure.svg";
import twitterLogo from "../public/twitterLogo.svg";
import discordLogo from "../public/discordLogo.svg";
import githubLogo from "../public/githubMark.png";

import { css } from "@emotion/css";

const Footer = () => {
  return (
    <footer className={styles.footerItems}>
      <div className={styles.footerItem}>
        <Image
          src={sureLogo}
          alt="Picture of the author"
          width={100}
          height={100}
        />
      </div>
      <div className={styles.footerGroup}>
        <div className={styles.footerGroupItem}>
          <h2>Social</h2>
          <ul className={styles.footerGroupItemList}>
            <li className={styles.footerGroupItemListItem}>
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
            <li className={styles.footerGroupItemListItem}>
              <a
                className={styles.footerItemTag}
                href="https://discord.gg/nZrF2jhhnM"
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
            <li className={styles.footerGroupItemListItem}>
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
        <div className={styles.footerGroupItem}>
          <h2>Documents</h2>
          <ul className={styles.footerGroupItemList}>
            <li className={styles.footerGroupItemListItem}>
              <a
                className={styles.footerItemTag}
                href="https://sure-protocol.gitbook.io/white-paper/"
              >
                White Paper
              </a>
            </li>
            <li className={styles.footerGroupItemListItem}>
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
