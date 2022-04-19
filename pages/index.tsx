import type { NextPage } from "next";
import Footer from "./_footer";
import Header from "./_header";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import { css } from "@emotion/css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sure Protocol</title>
        <meta name="description" content="Sure protocol" />
        <link rel="icon" href="/sure.svg" />
      </Head>
      <Header />

      <main className={styles.main}>
        <div
          className={css`
            text-align: left;
          `}
        >
          <h1 className={styles.title}>Live Carefree</h1>
          <h1 className={styles.title}>Be Sure</h1>
        </div>

        <div
          className={css`
            width: 30%;
            text-align: center;
          `}
        >
          <p className={styles.description}>
            Sure provides smart contract insurance for everyday users.
          </p>
          <p className={styles.description}>
            Yield farming for liquidity providers.
          </p>
        </div>
        <h2 className="h2-gradient">Governance for every token holder</h2>
      </main>
      <main className={styles.main}>
        <div
          className={css`
            text-align: left;
          `}
        >
          <h1 className={styles.title}>Rethink Insurance</h1>
        </div>

        <div
          className={css`
            width: 40%;
            text-align: center;
          `}
        >
          <p className={styles.description}>
            We encourage well vetted open sourced project but we understand that
            bugs can sneak in.
          </p>
          <p className={styles.description}>
            sure enables true on-chain insurance against smart contract
            breaches. Through strong incentives users are rewarded for being
            honest.
          </p>

          <p className={styles.description}>
            The native token allows users and liquidity providers to take part
            in reducing the impact of breaches. Thus lowering the bar for new
            crypto native users.
          </p>
        </div>
      </main>
      <main className={styles.main}>
        <div
          className={css`
            text-align: left;
          `}
        >
          <h1 className={styles.title}>Key Innovations</h1>
        </div>

        <div
          className={css`
            width: 40%;
            text-align: center;
          `}
        >
          <p className={styles.description}>
            Sure is not like any other protocol. We use the full range of defi
            innovations mixed with insurance best practises to create a
            marketplace that benfits every user.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
