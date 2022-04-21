import styles from "../styles/Innovation.module.scss";
import Image from "next/image";
import concentratedLiquidity from "../public/ConcentratedLiquidity.svg";
import Voting from "../public/Voting.svg";
import POL from "../public/POL.svg";

const Innovation = () => {
  return (
    <div className={styles.innovations}>
      <div className={styles.innovation}>
        <div className={styles.description}>
          <h2 className="h2-gradient ">Concentrated Liquidity</h2>
          <p className="small">
            By allowing Liquidity Providers to concentrate liquidity in premium
            ranges SURE effectively creates a marketplace for insurance. Users
            are therefore guaranteed the lowest premium possible.
          </p>
        </div>
        <div className={styles.img}>
          <Image
            src={concentratedLiquidity}
            alt="Concentrated liquidity"
            width={500}
            height={359.5}
          />
        </div>
      </div>
      <div className={styles.innovationReversed}>
        <div className={styles.description}>
          <h2 className="h2-gradient ">Claim Voting</h2>
          <p className="small">
            Holders of $veSure have the privileged to vote on Proof of Claim in
            order to agree on the size of the claim. Through blind vote a vote
            distribution is created where the mean is considered the consensus.
            The closer the consensus you vote the greater reward you receive.
          </p>
        </div>
        <div className={styles.img}>
          <Image src={Voting} alt="Claims Voting" width={500} height={359.5} />
        </div>
      </div>
      <div className={styles.innovation}>
        <div className={styles.description}>
          <h2 className="h2-gradient ">Protocol Owned Liquidity</h2>
          <p className="small">
            By offering Liquidity Providers the best price denominated in $sure
            for their position SURE is able to own much of the liquidity. This
            is a win-win situation for all parties. By owning liquidity over
            many pools SURE has effectively diversified risk, acquired a revenue
            stream and increased the capital flexibility in case of a black swan
            type breach. By selling the position, the Liquidity Provider is
            entitled to rewards across all pools thus increasing the reward/risk
            ratio.
          </p>
        </div>
        <div className={styles.img}>
          <Image
            src={POL}
            alt="Protocol Owned Liquidity"
            width={500}
            height={359.5}
            className={styles.img}
          />
        </div>
      </div>
    </div>
  );
};

export default Innovation;
