import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { topCrypto } from '../../actions/cryptoActions';
import PostPlaceholder from "../../Placeholders/postPlaceholder"
import Sparkline from '../cryptoListing/sparkline';
import { Link } from 'react-router-dom';


import './topCrypto.scss';





const TopCrypto = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(topCrypto());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const topCryptoArray = useSelector(state => state.crypto.topCrypto)

  return (
    <div className="topCrypto">
      {topCryptoArray.length !== 0 ? (
        <>
          <div className="row">
            {(topCryptoArray.map((crypto) =>
              <Link to={`coin/${crypto.id}`} className="card" key={crypto.symbol}>
                <span className="symbol"><img src={crypto.image} alt={`${crypto.name}`} width="20" /><span className="name">{crypto.name}</span></span>
                <span className={crypto.price_change_percentage_7d_in_currency > 0 ? 'green' : 'red'}>{crypto.price_change_percentage_7d_in_currency.toFixed(2)}<span className="percent">%</span></span>
                <span className="sparkline"><Sparkline item={crypto.sparkline_in_7d.price} itemColor={crypto.price_change_percentage_7d_in_currency > 0 ? '#408f8c' : 'red'} /></span>
              </Link>
            ))}
          </div>
          <div className="row">
            {(topCryptoArray.map((crypto) =>
              <Link to={`coin/${crypto.id}`} className="card" key={crypto.symbol}>
                <span className="symbol"><img src={crypto.image} alt={`${crypto.name}`} width="20" /><span className="name">{crypto.name}</span></span>
                <span className={crypto.price_change_percentage_7d_in_currency > 0 ? 'green percentage' : 'red percentage'}>{crypto.price_change_percentage_7d_in_currency.toFixed(2)}<span className="percent">%</span></span>
                <span className="sparkline"><Sparkline item={crypto.sparkline_in_7d.price} itemColor={crypto.price_change_percentage_7d_in_currency > 0 ? '#408f8c' : 'red'} /></span>
              </Link>
            ))}
          </div>
        </>

      ) : (
        <>
          <PostPlaceholder />
        </>
      )
      }
    </div >
  )
}

export default TopCrypto

