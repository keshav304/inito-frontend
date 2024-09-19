import React from 'react';
import './InitoSteps.css';

const InitoSteps = () => {
  const steps = [
    {
      num: 1,
      background: "#BDE0E6",
      videoSrc: "https://cdn.inito.com/inito_website/step1.mp4",
      description: "Dip the test strip in urine for 15 seconds."
    },
    {
      num: 2,
      background: "#96CDD7",
      videoSrc: "https://cdn.inito.com/inito_website/step2.mp4",
      description: "Attach the Inito Fertility Monitor to your iPhone*."
    },
    {
      num: 3,
      background: "#64B4C3",
      videoSrc: "https://cdn.inito.com/inito_website/step3.mp4",
      description: "Insert the test strip into the Inito Fertility Monitor."
    },
    {
      num: 4,
      background: "#112D35",
      videoSrc: "https://cdn.inito.com/inito_website/step4.mp4",
      description: "Get personalized results on our App in 10 minutes."
    }
  ];

  return (
    <section className="inito-steps">
      <div className="content">
        <h1 className="text-dtheme text-center">A <span className="image_as_underline">fertility lab</span> at your fingertips</h1>
        <p className="description">
          Easy-to-read fertility diagnostic results directly on your iPhone*, in just 10 minutes.
        </p>
        <div className="visible-in-large">
          <a className="button" href="/buy-now">Get the Inito kit</a>
          <div className="inito-monitor-support">
            * The Inito Fertility Monitor currently supports iPhone 7 and up. Android phones are not supported at the moment.
          </div>
          <div className="download-on-app-store">
            <a target="_blank" rel="noopener noreferrer" href="https://apps.apple.com/us/app/inito-fertility-ovulation/id1183799668">
              <img src="https://cdn.inito.com/inito_website/download_on_app_store.png" alt="Download on App Store" />
            </a>
          </div>
        </div>
      </div>
      <div className="inito-steps-con">
        {steps.map((step, index) => (
          <div key={index} className="inito-step">
            <div className="video-con">
            <span className='small-view-index'>{index+1}</span>
              <video autoPlay loop muted playsInline src={step.videoSrc}></video>
            </div>
            <div className="data-con">
              <span className="data text-dtheme font-med">
                <span className="num">{step.num}</span>
              </span>
              <p className="description">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InitoSteps;