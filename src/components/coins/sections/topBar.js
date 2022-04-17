import React from 'react';


const Topbar = (props) => {
  let coin = props.coin

  return (
    <section className="coinTopBar">
      <div className="barInfo">
        <img src={coin.image && coin.image.small ? coin.image.small : null} alt={coin.symbol} />
        <span className="coinName">{coin.name}<span className="label">{coin.symbol}</span></span>
      </div>
      <div className="barInfo">
        <span className="coinPrice">${coin.market_data && coin.market_data.current_price ? coin.market_data.current_price.usd.toLocaleString() : null}</span>
        <span className="label">1 {coin.symbol}</span>
      </div>
      <div className="barInfo">
        <span className={coin.market_data && coin.market_data.price_change_percentage_24h > 0 ? 'green' : 'red'}>
          {coin.market_data && coin.market_data.price_change_percentage_24h ? coin.market_data.price_change_percentage_24h.toFixed(2).toLocaleString() : null}%
        </span>
        <span className="label">24H Change</span>
      </div>
    </section>

  );

}


export default Topbar;