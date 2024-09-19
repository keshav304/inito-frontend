import React, { useState, useEffect } from 'react';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './Footer.css';

const Footer = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Check on component mount
    window.addEventListener('resize', handleResize); // Add event listener

    return () => window.removeEventListener('resize', handleResize); // Cleanup event listener
  }, []);

  return (
    <footer>
      {isMobile ? <MobileFooter /> : <DesktopFooter />}
      <div className="bottom-bar">
        <div className="bottom-bar-inner-con">
          <img
            src="https://dqxth8lmt6m4r.cloudfront.net/assets/v1/Logo Inito Small-469e31eca89154d7507eaa91c3dd05b75cc908346860f04e2729a9fca8094e2b.svg"
            alt="Inito Logo"
          />
          <p className="font-med">
            Copyright 2024. Samplytics Technologies Private Limited. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

const DesktopFooter = () => (
  <div>
    {/* Desktop Footer Links */}
    <div className="links-con">
      <ul>
        <li className="head">Company</li>
        <li><a href="/about-us">About Us</a></li>
        <li><a href="/careers">Careers</a></li>
        <li><a id="footer-order-now" href="/buy-now">Buy Now</a></li>
        <li><a href="/contact-us">Contact Us</a></li>
      </ul>
      <ul>
        <li className="head">Support</li>
        <li><a href="/faqs">FAQ</a></li>
        <li><a href="/terms">Terms</a></li>
        <li><a href="/privacy-policy">Privacy Policy</a></li>
        <li><a href="/replacements-and-warranty">Returns & Warranty</a></li>
        <li><a href="/consumer-health-data-privacy-policy">Consumer Health Data Privacy Policy</a></li>
      </ul>
      <ul>
        <li className="head">Get In Touch</li>
        <li><a href="tel:+91-9742931931">+91-9742931931</a></li>
        <li><a href="mailto:help@inito.com">help@inito.com</a></li>
        <li>2nd Floor, #44, 100 Feet Rd, Koramangala 4th Block, Bengaluru, 560034, IN</li>
      </ul>
    </div>
    <div className="social-icon-dark">
      <a href="https://www.facebook.com/groups/initofertility" target="_blank" rel="noopener noreferrer">
        <img src="https://cdn.inito.com/inito_website/footer/Facebook - Negative.png" alt="Facebook" />
      </a>
      <a href="https://www.instagram.com/initofertility" target="_blank" rel="noopener noreferrer">
        <img src="https://cdn.inito.com/inito_website/footer/Instagram - Negative.png" alt="Instagram" />
      </a>
      <a href="https://www.linkedin.com/company/initoinc" target="_blank" rel="noopener noreferrer">
        <img src="https://cdn.inito.com/inito_website/footer/LinkedIn - Negative.png" alt="LinkedIn" />
      </a>
      <a href="https://www.youtube.com/@Inito" target="_blank" rel="noopener noreferrer">
        <img src="https://cdn.inito.com/inito_website/footer/YouTube - Negative.png" alt="YouTube" />
      </a>
    </div>
  </div>
);

const MobileFooter = () => (
  <div>
      <div className="social-icon-dark">
      <a href="https://www.facebook.com/groups/initofertility" target="_blank" rel="noopener noreferrer">
        <img src="https://cdn.inito.com/inito_website/footer/Facebook - Negative.png" alt="Facebook" />
      </a>
      <a href="https://www.instagram.com/initofertility" target="_blank" rel="noopener noreferrer">
        <img src="https://cdn.inito.com/inito_website/footer/Instagram - Negative.png" alt="Instagram" />
      </a>
      <a href="https://www.linkedin.com/company/initoinc" target="_blank" rel="noopener noreferrer">
        <img src="https://cdn.inito.com/inito_website/footer/LinkedIn - Negative.png" alt="LinkedIn" />
      </a>
      <a href="https://www.youtube.com/@Inito" target="_blank" rel="noopener noreferrer">
        <img src="https://cdn.inito.com/inito_website/footer/YouTube - Negative.png" alt="YouTube" />
      </a>
    </div>
    <MuiAccordion title="Company">
      <ul>
        <li><a href="/about-us">About Us</a></li>
        <li><a href="/careers">Careers</a></li>
        <li><a id="footer-order-now" href="/buy-now">Buy Now</a></li>
        <li><a href="/contact-us">Contact Us</a></li>
      </ul>
    </MuiAccordion>
    <MuiAccordion title="Support">
      <ul>
        <li><a href="/faqs">FAQ</a></li>
        <li><a href="/terms">Terms</a></li>
        <li><a href="/privacy-policy">Privacy Policy</a></li>
        <li><a href="/replacements-and-warranty">Returns & Warranty</a></li>
        <li><a href="/consumer-health-data-privacy-policy">Consumer Health Data Privacy Policy</a></li>
      </ul>
    </MuiAccordion>
    <MuiAccordion title="Get In Touch">
      <ul>
        <li><a href="tel:+91-9742931931">+91-9742931931</a></li>
        <li><a href="mailto:help@inito.com">help@inito.com</a></li>
        <li>2nd Floor, #44, 100 Feet Rd, Koramangala 4th Block, Bengaluru, 560034, IN</li>
      </ul>
    </MuiAccordion>
  </div>
);

const MuiAccordion = ({ title, children }) => (
  <Accordion>
    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
      <h3>{title}</h3>
    </AccordionSummary>
    <AccordionDetails>
      {children}
    </AccordionDetails>
  </Accordion>
);

export default Footer;
