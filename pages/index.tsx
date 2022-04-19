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
            Sure will make using blockchain technology safer. This is achieved
            by creating a marketplace for smart contract insurance.
          </p>
          <p className={styles.description}>
            Users gets the lowest premiums possible while liquidity providers
            receive a higher return for the risk taken
          </p>
        </div>
        <h2 className="h2-gradient">
          Long term investors can take part in governance
        </h2>
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
            We understand that exploitable bugs can sneak in
          </p>
          <p className={styles.description}>
            Sure wants to create a virtuous circle of incentivizing liquidity
            providers to reduce the risk of the insured protocols. Since
            premiums are commoditized LPs can increase their reward risk ratio
            by securing the protcols.
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
