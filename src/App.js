
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home'
import CoinDetailspage from './pages/coinDetails'
import Banner from './components/banner/banner'
import Footer from './components/footer/footer'
import TopCrypto from './components/topCrypto/topCrypto'
import ScrollToTop from './components/scrollToTop/scrollToTop'




import { useSelector } from "react-redux";
import NotFound from './pages/notFound'

import "./styles/export.scss";

function App() {
  const darkMode = useSelector(state => state.crypto.darkMode)
  return (
    <Router>
      <ScrollToTop />
      <div className={darkMode ? 'app darkMode' : 'app'}>
        <Banner />
        <div className="container">
          <Routes>
            <Route exact path='/' element={<HomePage />} />
            <Route exact path={"coin/:id"} element={<CoinDetailspage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <TopCrypto />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
