import React, { useState, useEffect } from 'react';
import { searchForCoin } from '../../../actions/cryptoActions';
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from 'react-router-dom';



import './cryptoSerch.scss';


const CryptoSerch = () => {
  let searchData = []
  let [query, setQuery] = useState("")
  const dispatch = useDispatch();
  const { id } = useParams();
  const fetchData = () => dispatch(searchForCoin());
  useEffect(() => {
    setQuery("");
  }, [id])
  searchData = useSelector(state => state.crypto.searchCoins)


  return (
    <div className="cryptoSerch">
      <div className="searchInput">
        <input type="text" autoComplete="off" name="cryptosearch" value={query} onClick={fetchData} onChange={event => setQuery(event.target.value)} placeholder="Search for your Crypto" className="cryptosearch" id="cryptosearch" />
        <span className="searchIcon"><i className="fa-solid fa-magnifying-glass"></i></span>
      </div>

      <div className="searchResult">
        {searchData.length !== 0 ? (
          <ul className="coins" >
            {
              // eslint-disable-next-line array-callback-return
              searchData.filter(coin => {
                if (query === '') {
                  return null;
                } else if (coin.name.toLowerCase().includes(query.toLowerCase()) ||
                  coin.symbol.toLowerCase().includes(query.toLowerCase())) {
                  return coin.name;
                }
              }).map((coin, index) => (
                <li className="coin" key={index}>
                  <Link to={`/coin/${coin.id}`} >
                    <span className="coinName">&#35;{coin.market_cap_rank}<img src={coin.image} alt={`${coin.name}`} width="20" />{coin.name} <span className="symbol">{coin.symbol}</span></span>
                    <span className={coin.price_change_percentage_24h > 0 ? 'green' : 'red'}>{coin.price_change_percentage_24h.toFixed(2)}%</span>
                  </Link>
                </li>
              ))
            }
          </ul>
        ) : (
          <>
          </>
        )
        }
      </div>
    </div >
  );

}


export default CryptoSerch;