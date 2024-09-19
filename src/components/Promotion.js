import React from 'react';
import './Promotion.css';
import underlineImage from '../assests/plain_underline.png';

const Promotion = () => {
  return (
    <section className="promotion-section">
      <div className="container">
        <div className="promotion">
          <h1>
            The <span className="image_as_underline">only
            </span> fertility kit you will ever need
          </h1>
          <p className="description">
            Most ovulation tests predict your fertile days by tracking Estrogen and Luteinizing Hormone (LH), 
            but fail to measure the hormone that actually confirms your ovulation: <strong>PdG (urine metabolite of progesterone).</strong>
          </p>
        </div>

        <div className="makes-inito-different">
          <h1>What makes Inito different?</h1>
          <p className="description">
            Inito is the only fertility monitor that measures all <strong>4 hormones</strong> on a <strong>single test strip</strong>, 
            showing you a full picture of your cycles with results unique to your body.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Promotion;