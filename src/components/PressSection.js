import React from 'react';
import './PressSection.css';
import forbesLogo from '../assests/press/forbes.png';
import wsjLogo from '../assests/press/wsj.png';
import bloombergLogo from '../assests/press/bloomberg.png';
import theWeekLogo from '../assests/press/theweek.png';
import enterpreneurLogo from '../assests/press/enterpreneur.png';

const PressSection = () => {
  const pressLogos = [
    { src: bloombergLogo, alt: "Bloomberg" },
    { src: forbesLogo, alt: "Forbes" },
    { src: theWeekLogo, alt: "The Week" },
    { src: wsjLogo, alt: "Wall Street Journal" },
    { src: enterpreneurLogo, alt: "Entrepreneur" },
  ];

  return (
    <section className="press-section">
      <div className="container">
        <h2 className="section-title">As seen on</h2>
        <div className="press-logos">
          {pressLogos.map((logo, index) => (
            <div key={index} className="press-logo">
              <img src={logo.src} alt={logo.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PressSection;