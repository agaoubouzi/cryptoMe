import React from 'react';
import CryptoSerch from './cryptoSearch/cryptoSerch';
import heroImage from '../../images/crypto-min.png'


import './hero.scss';

const HeroSection = () => {

  return (
    <div className="heroSection">
      <div className="left-side">
        <h1 className="h1-title"><span>Watch</span> Your Best Crypto</h1>
        <h2 className="description light-title">Discover how specific cryptocurrencies work — and get a bit of each crypto to try out for yourself.</h2>
        <CryptoSerch></CryptoSerch>
      </div>
      <div className="right-side">
        <img src={heroImage} alt="Cryptome Images" />
      </div>

    </div >
  );

}


export default HeroSection;