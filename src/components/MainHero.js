import React from 'react';
import './MainHero.css';
import starIcon from '../assests/star.png';
import heroMobile from '../assests/v2_main_hero_mobile.png';
import heroDesktop from '../assests/v2_main_hero_desktop.png';

const MainHero = () => {
  return (
    <section className="main-hero">
      <div className="container">
        <div className="tagline-text">
          <div className="main-hero-stars">
            {[...Array(5)].map((_, index) => (
              <img key={index} className="img-star" src={starIcon} alt="Star" />
            ))}
            <span className="text">TRUSTED BY 20,000+ COUPLES</span>
          </div>
          <h1 className="font-bold">Track your fertility hormones at home, in 10 minutes</h1>
          <h6>Get accurate results of <strong>Estrogen, LH, PdG (urine metabolite of progesterone) and FSH</strong> with
            Inito, the all-in-one fertility monitor.</h6>
          <div className="main-hero__button">
            <a className="button font-semi-bold tex fertility-kit-slidedown" href="#only-fertility-kit">How does Inito work?</a>
          </div>
        </div>
        <div className="main-hero__img">
          <img className="small-view" src={heroMobile} alt="Inito Fertility Monitor Mobile" />
          <img className="large-view" src={heroDesktop} alt="Inito Fertility Monitor Desktop" />
        </div>
      </div>
    </section>
  );
};

export default MainHero;