import React from 'react'

const Statictics = (props) => {
  let coin = props.coin

  return (
    <div className="statictics">
      <h2 className="h2-title">{coin.name} Price Statistics</h2>
      <div className="infos">
        <div className="info">
          <span className="label">Price :</span>
          <span className="value">${coin.market_data && coin.market_data.current_price ? coin.market_data.current_price.usd.toLocaleString() : null}</span>
        </div>
        <div className="info">
          <span className="label">Price Change 24h :</span>
          <span className="value">{coin.market_data && coin.market_data.price_change_percentage_24h ? coin.market_data.price_change_percentage_24h.toFixed(2).toLocaleString() : null}%</span>
        </div>
        <div className="info">
          <span className="label">Trading Volume :</span>
          <span className="value">{coin.market_data && coin.market_data.total_volume ? coin.market_data.total_volume.usd.toLocaleString() : null}</span>
        </div>
        <div className="info">
          <span className="label">Volume / Market Cap :</span>
          <span className="value">{coin.market_data && coin.market_data.market_cap_change_percentage_24h ? coin.market_data.market_cap_change_percentage_24h.toLocaleString() : null}</span>
        </div>
        <div className="info">
          <span className="label">24h Low / 24h High :</span>
          <span className="value">$ {coin.market_data && coin.market_data.low_24h ? coin.market_data.low_24h.usd.toLocaleString() : null} / $ {coin.market_data && coin.market_data.high_24h ? coin.market_data.high_24h.usd.toLocaleString() : null}</span>
        </div>
        <div className="info">
          <span className="label">Market Rank :</span>
          <span className="value">#{coin.market_data && coin.market_data.market_cap_rank ? coin.market_data.market_cap_rank : null}</span>
        </div>
      </div>
    </div>
  )
}
export default Statictics;
