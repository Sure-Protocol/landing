import type { NextPage } from "next";
import Footer from "./_footer";
import Header from "./_header";
import Head from "next/head";
import Innovation from "./_innovations";
import styles from "../styles/Home.module.scss";
import { PopupContext } from "../context/popup";
import { css } from "@emotion/css";
import { useState } from "react";

const Home: NextPage = () => {
  const [isOpen, toggle] = useState(false);
  return (
    <div>
      <div className={styles.page}>
        <Head>
          <title>Sure Protocol</title>
          <meta name="description" content="Sure protocol" />
          <link rel="icon" href="/sureShield.svg" />
        </Head>

        <PopupContext.Provider value={{ isOpen, toggle }}>
          <Header />
          <div className={styles.main}>
            <div className={styles.container}>
              <div className={styles.statement}>
                <div>
                  <h1>Live Carefree</h1>
                  <h1>Be Sure</h1>
                </div>

                <div
                  className={css`
                    max-width: 100rem;
                    text-align: center;
                  `}
                >
                  <p className={styles.description}>
                    SURE will make using blockchain technology safer. This is
                    achieved by creating a marketplace for smart contract
                    insurance.
                  </p>
                  <p className={styles.description}>
                    Users gets the lowest premiums possible while liquidity
                    providers receive a higher return for the risk taken.
                  </p>
                </div>
                <h2 className="h2-gradient">
                  Anybody can take part in governance.
                </h2>
              </div>
            </div>
            <div className={styles.container}>
              <div className={styles.statement}>
                <div>
                  <h1>Rethink Insurance</h1>
                </div>

                <div
                  className={css`
                    max-width: 100rem;
                    text-align: center;
                  `}
                >
                  <p>We understand that bugs can sneak in</p>
                  <p>
                    SURE wants to create a virtuous circle of incentivizing
                    liquidity providers to reduce the risk of the insured
                    protocols. Since premiums are commoditized, LPs can increase
                    their reward risk ratio by securing the protcols.
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.container}>
              <div className={styles.statement}>
                <div>
                  <h1>Key Innovations</h1>
                </div>

                <div
                  className={css`
                    max-width: 100rem;
                    text-align: center;
                  `}
                >
                  <p>
                    Sure is not like any other protocol. We use the full range
                    of DeFi innovations mixed with insurance best practises to
                    create a marketplace that benfits every user.
                  </p>
                </div>
              </div>
              <Innovation />
            </div>
          </div>
        </PopupContext.Provider>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
