import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './UserReviews.css';

const UserReviews = () => {
    const reviews = [
        {
            name: "Stephanie",
            image: "https://cdn.inito.com/inito_website/user_reviews/stephanie.png",
            text: `I purchased this monitor to figure out my ovulation patterns after 2 failed IUI’s. 
            I discovered that my LH surge is a gradual onset and that we inseminated far too early. 
            Now that we know which day I actually ovulate as it confirms my fertile window, I am hoping to be more succesful on my next IUI.
            Highly recommend this if you are looking for guaranteed results!`,
            rating: 5
        },
        {
            name: "Kimberly",
            image: "https://cdn.inito.com/inito_website/user_reviews/kimberly.png",
            text: `I wish I had used this sooner. Don’t waste your money on other OPK tests. 
            This system is more accurate and monitors 4 key hormones that effect ovulation. 
            The other cheaper brands can not do this. It gives you a better insight on your 
            body’s hormone fluctuations during a cycle and where any possible problems with 
            conception could be coming from. It is worth the investment and can save you time 
            on identifying fertility issues and help you get pregnant faster.`,
            rating: 5
        },
        {
            name: "Melissa",
            image: "https://cdn.inito.com/inito_website/user_reviews/melissa.png",
            text: `My husband and I were TTC for 3 months and we got pregnant the first month of using Inito! 
            I started with the cheap LH/ovulation strips but my progression seemed to be off at times with that. 
            I loved how Inito gives you the exact values so that you’re able to tell when your peak is more accurately. 
            Also loves that it measures PdG because I never really was able to get real spikes to confirm ovulation 
            when I would take my basal body temp, but Inito was able to confirm by measuring my PdG.`,
            rating: 5
        },
        {
          name: "MJ",
          image: "https://cdn.inito.com/inito_website/user_reviews/melissa.png",
          text: `My husband and I were TTC for 3 months and we got pregnant the first month of using Inito! 
          I started with the cheap LH/ovulation strips but my progression seemed to be off at times with that. 
          I loved how Inito gives you the exact values so that you’re able to tell when your peak is more accurately. 
          Also loves that it measures PdG because I never really was able to get real spikes to confirm ovulation 
          when I would take my basal body temp, but Inito was able to confirm by measuring my PdG.`,
          rating: 5
      },
      {
        name: "Nancy",
        image: "https://cdn.inito.com/inito_website/user_reviews/melissa.png",
        text: `My husband and I were TTC for 3 months and we got pregnant the first month of using Inito! 
        I started with the cheap LH/ovulation strips but my progression seemed to be off at times with that. 
        I loved how Inito gives you the exact values so that you’re able to tell when your peak is more accurately. 
        Also loves that it measures PdG because I never really was able to get real spikes to confirm ovulation 
        when I would take my basal body temp, but Inito was able to confirm by measuring my PdG.`,
        rating: 5
    }
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,         // Enable autoplay
        autoplaySpeed: 1000,     // 1 second per slide
        pauseOnHover: true,      // Pause autoplay when hovering over the slide
        arrows: false,           // Hide arrows if you don't need them
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <section className="user-reviews">
        <div className="container">
          <Slider {...settings}>
            {reviews.map((review, index) => (
              <div key={index}>
              <div key={index} className="review-card">
                <div className="review-header">
                  <div className="user-info">
                    <div className="star-rating">
                      {[...Array(review.rating)].map((_, i) => (
                        <img key={i} src="https://cdn.inito.com/inito_website/star.png" alt="star" className="star" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="review-text">{review.text}</p>
              <p className='small-view-data-username'>{review.name}</p>
              </div>
            <p className='data-username'>{review.name}</p>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    );
};

export default UserReviews;