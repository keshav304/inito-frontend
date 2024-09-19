import React from 'react';
import Header from './components/Header';
import MainHero from './components/MainHero';
import './App.css';
import UserReviews from './components/UserReviews';
import PressSection from './components/PressSection';
import Promotion from './components/Promotion';
import PredictWithActualData from './components/PredictWithActualData';
import WhyInitoIsSmarterWay from './components/WhyInitoIsSmarterWay';
import InitoSteps from './components/InitoSteps';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App = () => (
  <div>
    <Header />
    <MainHero />
    <PressSection />
    <Promotion />
    <PredictWithActualData />
    <WhyInitoIsSmarterWay />
    <InitoSteps />
    <UserReviews />
    <FAQ/>
    <Footer/>
  </div>
);

export default App;
