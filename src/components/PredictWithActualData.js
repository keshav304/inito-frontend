import React from 'react';
import Slider from 'react-slick';
import './PredictWithActualData.css';
import ovulationConfirmed from '../assests/ovulation_confirmed.png';
import hormoneChart from '../assests/hormone_chart.png';
import cycleDayView from '../assests/cycle_day_view.png';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

// Slick Slider settings
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000, // 1 second
};

const PredictWithActualData = () => {
  return (
    <section className="PredictWithActualData-contianer">
    <section className="predict-with-actual-data">
      <div className="content">
        <h1>Predict and confirm your ovulation with <span className="image_as_underline">actual</span> data</h1>
        <p className="description">
          Unlike most ovulation tests that only give you "yes/no" results, Inito provides <strong>real numerical values</strong> of your
          fertility hormones.<br /><br />
          If you have irregular cycles, actual data is necessary to know <em>exactly</em> when you ovulate, and when is the best time to try to conceive.
        </p>
        <a className="button" href="/buy-now">
          <span className="button__small-view">
            GET THE INITO KIT
          </span>
          <span className="button__large-view">
            Get the Inito Kit
          </span>
        </a>
      </div>
      <div className="iphone">
        <Slider {...sliderSettings}>
          <div>
            <img src={ovulationConfirmed} alt="Ovulation Confirmed" />
          </div>
          <div>
            <img src={hormoneChart} alt="Hormone Chart" />
          </div>
          <div>
            <img src={cycleDayView} alt="Cycle Day View" />
          </div>
        </Slider>
      </div>
    </section>
    <section className="chart-con">
      <div className="chart-con__text-content">
        <h1 className="text-center text-dtheme">
          Never miss <span className="an-egg">
           <img class="text-image" src="https://cdn.inito.com/inito_website/an_egg.png" alt=''/>
            a day
            <img className="strike-through" src="https://cdn.inito.com/inito_website/strike_through.png" alt="Strike through" />
          </span>
          again with Inito
        </h1>
        <p className="description">
          Inito tracks up to 6 fertile days and confirms ovulation by measuring all 4 hormones
          in just 10 minutes:
        </p>
        <div className="chart-con__text-content__about">
          <ul>
            <li className='green'>Estrogen, which rises 3-4 days before ovulation</li>
            <li className='purple'>LH, which surges 24-36 hours before ovulation</li>
            <li className='blue'>PdG, which rises after ovulation</li>
            <li className='orange'>FSH, to track follicle growth</li>
          </ul>
        </div>
      </div>
      <picture>
        <source media="(max-width: 768px)" srcSet="https://cdn.inito.com/inito_website/hormones_graph_mob.jpg" />
        <source media="(min-width: 769px)" srcSet="https://cdn.inito.com/inito_website/hormones_graph_desktop_v2.png" />
        <img className="v2-homepage-chart" src="https://cdn.inito.com/inito_website/hormones_graph_desktop_v2.png" alt="Hormone graph" />
      </picture>
    </section>
    </section>
  );
};

export default PredictWithActualData;
