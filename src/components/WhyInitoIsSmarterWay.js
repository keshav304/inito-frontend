import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './WhyInitoIsSmarterWay.css';

const WhyInitoIsSmarterWay = () => {
  return (
    <section className="why-inito-is-smarter-way">
      <WhyMeasureProgesterone />
      <SmarterWaySection />
    </section>
  );
};
const WhyMeasureProgesterone = () => {
  return (
    <section className="why-measure-progesterone">
      <div className="progesterone-content">
        <img className="blue-calendar" src="https://cdn.inito.com/inito_website/blue_calendar.png" alt="Blue Calendar" />
        <h6>Why measure the PdG? (urine metabolite of progesterone)?</h6>
        <p>
          <strong>Anovulation</strong> (having a menstrual cycle with no egg) is actually a common occurrence, affecting 1 in 10 women*.<br /><br />
          If ovulation occurs, the levels of Progesterone and its urine metabolite PdG rise after a few days
          and stay elevated. Sustained, elevated PdG levels after peak fertility indicate a successful ovulation.<br /><br />
        </p>
        <div className="doctor-review-source">
          <span className="source">* Source: National Institutes of Health</span>
          <span className="quote">"Inito is all that you need to give you the best chance of conception."</span>
          <div className="doctor">
            <img className="doctor-image" src="https://cdn.inito.com/inito_website/doc_testimonial_wagner.jpg" alt="Dr. Rachel Wagner" />
            <div className="doctor-info">
              <strong className="doctor-name">Dr. Rachel Wagner</strong>
              <em className="doctor-qualification">MD</em>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


const SmarterWaySection = () => {
  return (
    <section className="blue-background">
      <h1>
        Why Inito is the smarter way to get{' '}
        <span className="image_as_underline">pregnant</span>
      </h1>

      <div className="card-container">
        <CardSection
          title="Get charts and actual values of your hormones"
          description={
            <>
              Most ovulation kits have a set value or a threshold, making them likely to give a false read if your hormones fall outside the average range.<br />
              <br/>
              <br/>
              Inito measures real values of your hormones to personalize results to the unique you.
            </>
          }
          buttonLabel="Get the Inito Kit"
          buttonLink="/buy-now"
          imageDesktop="https://cdn.inito.com/inito_website/why_inito_is_smarter_way/get_charts_and_actual_values@2x.png"
          imageMobile="https://cdn.inito.com/inito_website/why_inito_is_smarter_way/get_charts_and_actual_values.png"
          altText="Get Charts and Actual Values"
          className="left-card"
        />

        <div className="carousel-container">
          <FertilityCardCarousel />

          <CardSection
            title="Inito tracks everything so you don't have to"
            description={
              <>
                The Inito Fertility Monitor comes with a free easy-to-use App, so you can track your fertile days with ease and know exactly when you ovulate.<br /><br />
                Our App notifies you for everything:
                <ul className="blue-bullet-list">
                  <li>Your fertility levels</li>
                  <li>When to test on the right days</li>
                  <li>When you've successfully ovulated</li>
                  <li>And when to roll into bed!</li>
                </ul>
              </>
            }
            buttonLabel="Get the Inito Kit"
            buttonLink="/buy-now"
            imageDesktop="https://cdn.inito.com/inito_website/why_inito_is_smarter_way/inito_tracks_everything@2x.jpg"
            imageMobile="https://cdn.inito.com/inito_website/why_inito_is_smarter_way/inito_tracks_everything.jpg"
            altText="Inito Tracks Everything"
            className="right-card"
          />
        </div>
      </div>
    </section>
  );
};



const CardSection = ({ title, description, buttonLabel, buttonLink, imageDesktop, imageMobile, altText, className }) => {
  return (
    <section className={className}>
      <div className="text-content">
        {/* <h1>{title}</h1> */}
        {
          className==="left-card" ? (
            <h1>
              Get charts and actual <span className="image_as_underline">values</span> of your hormones
              <img src='https://cdn.inito.com/inito_website/homepage_4_star.png' alt='star'/>
            </h1>
          ) : <h1>{title}</h1>
        }
        <div>{description}</div>
        <a className="button" href={buttonLink}>{buttonLabel}</a>
      </div>
      <picture className="card-image">
        <source media="(min-width:769px)" srcSet={imageDesktop} />
        <source media="(max-width:768px)" srcSet={imageMobile} />
        <img src={imageDesktop} alt={altText} />
      </picture>
    </section >
  );
};

const FertilityCardCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    'https://dqxth8lmt6m4r.cloudfront.net/assets/v1/why_inito_is_smarter_way/high_fertility-277405f0c3b1f844907885a9866aac272ff865c0ed3431d0a7f5673b2440b21e.svg',
    'https://dqxth8lmt6m4r.cloudfront.net/assets/v1/why_inito_is_smarter_way/peak_fertility-21ac68f7f91f18f7e76b83c05e0eefec17e26037a254311312b59c3606bb952a.svg',
    'https://dqxth8lmt6m4r.cloudfront.net/assets/v1/why_inito_is_smarter_way/ovulation_confirmed-1af13f574905b54b0614d422f2161aebbdebd85d6cd39cb6ae2078706ba42642.svg',
    'https://dqxth8lmt6m4r.cloudfront.net/assets/v1/why_inito_is_smarter_way/low_fertility-51402a5906afd6879626e776235fbb7cbbe84d94529366f7266c51f4d3b406ab.svg'
  ];

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  // Optional: Autoplay feature
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change slides every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fertility-card-carousel">
      {/* Container to hold the main image */}
      <div className="image-container">
        <img
          src={images[currentSlide]}
          alt={`fertility ${currentSlide}`}
          className="slider-image"
        />
      </div>

      {/* Left and right navigation arrows */}
      {/* <button className="prev" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="next" onClick={nextSlide}>
        &#10095;
      </button> */}

      {/* Dots for navigation */}
      {/* <div className="dots-container">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div> */}
    </div>
  );
};

export default WhyInitoIsSmarterWay;