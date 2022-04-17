import React from 'react'
import CryptoListing from '../components/cryptoListing/cryptoListing'
import News from '../components/news/news'
import HeroSection from '../components/hero/hero'


export default function homePage() {
  return (
    <>
      <HeroSection />
      <News />
      <CryptoListing />
    </>
  )
}
