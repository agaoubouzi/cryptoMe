import React, { useEffect } from 'react';
import { coinDetails } from '../../actions/cryptoActions';
import Topbar from './sections/topBar';
import Descriptios from './sections/description';
import Statictics from './sections/statictics';
import CoinInfo from './sections/coinInfo';



import CryptoSerch from '../hero/cryptoSearch/cryptoSerch';
import { useParams } from 'react-router-dom';
import CoinChart from './chart/chart';
import { useDispatch, useSelector } from "react-redux";

import './coinDetails.scss';

const CoinDetails = () => {

  const dispatch = useDispatch();
  const { id } = useParams();
  let coin = null;

  useEffect(() => {
    dispatch(coinDetails(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  coin = useSelector(state => state.crypto.coinDetails)

  return (
    <div className="coinDetails">
      {coin != null ? (
        <>
          <div className="header-section">
            <Topbar coin={coin} />
            <CryptoSerch />
          </div>
          <CoinChart />
          <CoinInfo coin={coin} />
          <div className="coinData">
            <Descriptios coin={coin} />
            <Statictics coin={coin} />
          </div>
        </>
      ) : (
        <>
          <h2>no data</h2>
        </>
      )
      }


    </div >
  );

}


export default CoinDetails;