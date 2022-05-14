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
            By allowing Liquidity Providers(LPs) to concentrate liquidity in premium
            ranges, Sure ensures that protocols are insured at true market cost. Sure relies
            on its LPs to submit bids on risk, with the policy holders always guaranteed the lowest
            premium rates possible.
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
            Holders of $veSure have the privilege of voting on claims in. Through blind voting,
            vote distribution is established with consensus existing at mean.
            The closer to consensus that a vote is, the greater the reward the voter receives.
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
            Over time, Sure will collect fees on premium payments that will be reallocated to pools; stabilizing liquidity and
            accruing value to holders of Sure&apos;s governance tokens.
            This is a win-win situation for all parties. By owning liquidity over
            many pools Sure will have diversified risk, acquired a revenue
            stream and increased capital flexibility in the event of a black swan
            type breach. Stabilizing pools will also serve to reduce their perceived risk-reward,
            lowering effective premium rates for protocols and improving perceived security of pools, as
            established by LPs.
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
