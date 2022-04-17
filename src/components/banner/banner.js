import React, { useEffect } from 'react';
import { globalInfo } from '../../actions/cryptoActions';
import { darkMode } from '../../actions/cryptoActions';
import { useDispatch, useSelector } from "react-redux";
import LinePlaceholder from '../../Placeholders/linePlaceholder';
import { Link } from 'react-router-dom';


import './banner.scss';


const Banner = () => {
  let marketInfo, darkModeValue = null
  const dispatch = useDispatch();
  const fetchData = () => dispatch(globalInfo());

  let switch_mode = () => {
    dispatch(darkMode());
    darkModeValue ? localStorage.setItem('darkMode', false) : localStorage.setItem('darkMode', true);
  }

  useEffect(() => {
    fetchData()
    if (localStorage.getItem('darkMode') === 'true') {
      switch_mode();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  darkModeValue = useSelector(state => state.crypto.darkMode)

  marketInfo = useSelector(state => state.crypto.globalInfo)
  useEffect(() => {
    darkModeValue ? document.getElementById('root').setAttribute("data-theme", "dark") : document.getElementById('root').setAttribute("data-theme", "light");
  }, [darkModeValue])
  return (
    <div className='banner'>
      {marketInfo.length !== 0 ? (
        <div className="marketDetails">
          <div className="info">
            <div>
              <span>Cryptos:<span className="value">{marketInfo.coins_count}</span></span>
              <span>Active Markets:<span className="value">{marketInfo.active_markets.toLocaleString()}</span></span>
              <span>Market Cap:<span className="value">{marketInfo.total_mcap.toLocaleString()}</span></span>
              <span>Total Volume:<span className="value">{marketInfo.total_volume.toLocaleString()}</span></span>
              <span>Dominance:<span className="value">BTC: {marketInfo.btc_d}% ETH: {marketInfo.eth_d}%</span></span>
              <span>Market Cap Change:<span className="value">{marketInfo.mcap_change}%</span></span>
              <span>Volume:<span className="value">{marketInfo.volume_change}%</span></span>
              <span>Volume ATH:<span className="value">{marketInfo.volume_ath.toLocaleString()}</span></span>
              <span>Market Cap ATH:<span className="value">{marketInfo.mcap_ath.toLocaleString()}</span></span>
            </div>
            <div>
              <span>Cryptos:<span className="value">{marketInfo.coins_count}</span></span>
              <span>Active Markets:<span className="value">{marketInfo.active_markets.toLocaleString()}</span></span>
              <span>Market Cap:<span className="value">{marketInfo.total_mcap.toLocaleString()}</span></span>
              <span>Total Volume:<span className="value">{marketInfo.total_volume.toLocaleString()}</span></span>
              <span>Dominance:<span className="value">BTC: {marketInfo.btc_d}% ETH: {marketInfo.eth_d}%</span></span>
              <span>Market Cap Change:<span className="value">{marketInfo.mcap_change}%</span></span>
              <span>Volume:<span className="value">{marketInfo.volume_change}%</span></span>
              <span>Volume ATH:<span className="value">{marketInfo.volume_ath.toLocaleString()}</span></span>
              <span>Market Cap ATH:<span className="value">{marketInfo.mcap_ath.toLocaleString()}</span></span>
            </div>
          </div>
          <div className="bannerControle">
            <i className="fa-solid fa-moon" onClick={switch_mode}></i>
            <Link to={`/`} >
              <i className="fa-solid fa-house-user"></i>
            </Link>
          </div>
        </div>

      ) : (
        <>
          <LinePlaceholder />

        </>
      )
      }
    </div>
  );

}


export default Banner;