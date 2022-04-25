import type { NextPage } from "next";
import Footer from "./_footer";
import Head from "next/head";
import Innovation from "./_innovations";
import styles from "../styles/Home.module.scss";
import Image from "next/image";
import SureInLogo from "../public/sureInLogo.svg";
import TwitterWhite from "../public/TwitterWhite.svg";
import DiscordWhite from "../public/DiscordWhite.svg";
import GithubWhite from "../public/GithubWhite.svg";

import { PopupContext } from "../context/popup";
import PrimaryButton from "./buttons/_PrimaryButton";

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
          <div className={styles.main}>
            <div className={styles.container}>
              <div className="icon-vertical-margin-xl">
                <Image
                  src={SureInLogo}
                  alt="Sure in Logo"
                  width={250}
                  height={250}
                />
              </div>

              <div className={styles.statement}>
                <div>
                  <h1 className="white-font">
                    The ecosystem’s first truly free-market program insurance
                    protocol.
                  </h1>
                </div>
                <PrimaryButton>Launch App</PrimaryButton>
                <div className={styles.socialMediaRow}>
                  <a href="https://twitter.com/SureProtocol">
                    <div>
                      <Image
                        src={TwitterWhite}
                        alt="Twitter Logo"
                        width={45}
                        height={45}
                      />
                    </div>
                  </a>
                  <a href="https://discord.gg/GRaHtPufqn">
                    <div>
                      <Image
                        src={DiscordWhite}
                        alt="Discord Logo"
                        width={45}
                        height={45}
                      />
                    </div>
                  </a>
                  <a href="https://github.com/Sure-Protocol">
                    <div>
                      <Image
                        src={GithubWhite}
                        alt="Github Logo"
                        width={45}
                        height={45}
                      />
                    </div>
                  </a>
                </div>
                <div
                  className={css`
                    max-width: 100rem;
                    text-align: center;
                  `}
                >
                  <div className={styles.typewriting}>
                    <p className={`font-light ${styles.description}`}>
                      Inspire confidence and trust by betting on protocols that{" "}
                      <span className={"font-bold font-underline"}>
                        you believe in.
                      </span>
                    </p>
                  </div>
                </div>
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
