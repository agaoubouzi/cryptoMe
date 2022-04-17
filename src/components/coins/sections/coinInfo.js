import React from 'react'
import Toolips from '../../cryptoListing/toolips';


const CoinInfo = (props) => {
  let coin = props.coin
  const infoText = {
    market_cap: "The total market value of a cryptocurrency's circulating supply. It is analogous to the free-float capitalization in the stock market. Market Cap = Current Price x Circulating Supply.",
    supply: "The amount of coins that are circulating in the market and are in public hands. It is analogous to the flowing shares in the stock market.",
    volume: "A measure of how much of a cryptocurrency was traded in the last 24 hours."
  }

  return (
    <div className="coinInfo">
      <div className="infos">
        <div className="info links">
          {coin.links && coin.links.homepage && coin.links.homepage[0] ? (
            <a className="button-link" href={coin.links && coin.links.homepage && coin.links.homepage[0] ? coin.links.homepage[0].toLocaleString() : null} target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-globe"></i>{coin.name}</a>
          ) : (null)}
          {coin.links && coin.links.blockchain_site && coin.links.blockchain_site[0] ? (
            <a className="button-link" href={coin.links && coin.links.blockchain_site && coin.links.blockchain_site[0] ? coin.links.blockchain_site[0].toLocaleString() : null} target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-link"></i>Blockchain</a>
          ) : (null)}
          {coin.links && coin.links.repos_url && coin.links.repos_url.github[0] ? (
            <a className="button-link" href={coin.links.repos_url.github[0].toLocaleString()} target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github"></i>GitHub</a>
          ) : (null)}
        </div>
        <div className="info marketCap">
          <span className="value-title">Market Cap <Toolips info={infoText.market_cap} /></span>
          {coin.market_data && coin.market_data.market_cap.usd ? (
            <span className="value">${coin.market_data && coin.market_data.market_cap.usd ? coin.market_data.market_cap.usd.toLocaleString() : null}</span>
          ) : (null)}
          {coin.market_data && coin.market_data.market_cap_change_percentage_24h ? (
            <span className={coin.market_data.market_cap_change_percentage_24h > 0 ? 'green ' : 'red '}>{coin.market_data.market_cap_change_percentage_24h.toLocaleString()}%</span>
          ) : (null)}
        </div>
        <div className="info volume">
          <span className="value-title">Volume <Toolips info={infoText.volume} /></span>
          {coin.market_data && coin.market_data.total_volume ? (
            <span className="value">${coin.market_data.total_volume.usd.toLocaleString()}</span>
          ) : (null)}
        </div>
        <div className="info supply">
          <span className="value-title">Circulating Supply <Toolips info={infoText.supply} /></span>
          <div className="value progress-value">
            {coin.market_data && coin.market_data.max_supply ? (
              <>
                <progress className="max_supply_progress" value={coin.market_data.circulating_supply} max={coin.market_data.max_supply}></progress>
                <span className="info-coin">{((100 * coin.market_data.circulating_supply) / coin.market_data.max_supply).toFixed(2)}%</span>
              </>
            ) : ('--')}
          </div>
          <div className="value"><span>Max Supply</span>
            <span className="info-coin">
              {coin.market_data && coin.market_data.max_supply ? (
                coin.market_data.max_supply.toLocaleString()
              ) : ('--')}
            </span>
          </div>
          <div className="value"><span>Total Supply</span><span className="info-coin">
            {coin.market_data && coin.market_data.circulating_supply ? (
              coin.market_data.circulating_supply.toLocaleString()
            ) : ('--')}
          </span></div>
        </div>
      </div>
    </div>
  )
}
export default CoinInfo;
