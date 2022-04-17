import React, { Component } from 'react';
import { connect } from 'react-redux';
import { markets } from '../../actions/cryptoActions';
import Toolips from './toolips';
import Placeholder from '../../Placeholders/placeholder';
import Sparkline from './sparkline';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

import './cryptoListing.scss';
import { Link } from 'react-router-dom';



class cryptoListing extends Component {


  constructor(props) {
    super(props);
    this.state = { loading: true, currentid: 10, loadingText: false }
  }
  loadingText = () => {
    return new Promise((resolve, reject) => {
      this.setState({ loadingText: true });
      setTimeout(() => {
        this.setState({ loadingText: false });
        resolve();
        ;
      }, 1000
      );
    })
  }
  componentDidMount() {
    this.props.markets(this.state.currentid);
    setTimeout(() => this.setState({ loading: false }), 1000);
  }

  loadmore = async () => {
    await this.loadingText()
    this.setState({
      currentid: this.state.currentid + 20
    });
    await this.props.markets(this.state.currentid)
  }
  watchlist = (e) => {
    e.currentTarget.classList.toggle('watched');
  };

  sortWatchList = (e) => {
    if (document.querySelectorAll('.watched').length > 0) e.currentTarget.classList.toggle('activeWatchList');
    const watchlists = document.querySelectorAll('.watchlist');
    let activeWatchList = (document.querySelectorAll('.watched').length > 0 && e.currentTarget.classList.contains('activeWatchList')) ? true : false;
    Array.from(watchlists).map(el => el).map(le2 =>
      activeWatchList ?
        (le2.classList.contains('watched') ? '' : le2.parentElement.classList.add('hidden')) :
        (!le2.classList.contains('watched') ? le2.parentElement.classList.remove('hidden') : '')
    )
  }

  // Sort
  sortBy = (type, e) => {
    // **** remove all the "sorted" class name on <th> tags ****
    if (!e.currentTarget.classList.contains("sorted")) {
      Array.from(document.getElementsByClassName("sorted")).forEach((el) => el.classList.remove("sorted"));
    }
    e.currentTarget.classList.toggle('sorted')
    // **** sort crypto by each type ****
    let sorted = e.target.classList.contains('sorted') ? true : false
    this.setState({ crypto: this.props.crypto.sort((a, b) => (sorted ? (a[type] < b[type]) : (a[type] > b[type])) ? 1 : -1,) })
  }



  render() {
    let { crypto } = this.props;
    const infoText = {
      market_cap: "The total market value of a cryptocurrency's circulating supply. It is analogous to the free-float capitalization in the stock market. Market Cap = Current Price x Circulating Supply.",
      supply: "The amount of coins that are circulating in the market and are in public hands. It is analogous to the flowing shares in the stock market."
    }
    return (
      <div className="cryptoListing">
        {this.state.loading ? (
          <>
            <Placeholder />
            <Placeholder />
          </>
        ) : (

          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th onClick={this.sortWatchList} scope="col"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" /></svg></th>
                <th scope="col"><span onClick={this.sortBy.bind(this, 'market_cap_rank')} >#</span></th>
                <th scope="col"><span onClick={this.sortBy.bind(this, 'name')}>Name</span></th>
                <th scope="col"><span onClick={this.sortBy.bind(this, 'current_price')}>Price</span></th>
                <th scope="col"><span onClick={this.sortBy.bind(this, 'price_change_percentage_24h')}>24h %</span></th>
                <th scope="col"><span onClick={this.sortBy.bind(this, 'price_change_percentage_7d_in_currency')}>7d %</span></th>
                <th scope="col"><span onClick={this.sortBy.bind(this, 'market_cap')}>Market Cap</span> <Toolips info={infoText.market_cap} /></th>
                <th scope="col"><span onClick={this.sortBy.bind(this, 'circulating_supply')}>Circulating Supply</span><Toolips info={infoText.supply} /></th>
                <th scope="col"><span>Last 7 Days</span></th>

              </tr>
            </thead>
            <tbody id="listing">
              {
                crypto.map((item, key) =>

                  <tr key={item.name}>
                    <td className="watchlist " onClick={this.watchlist}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" /></svg>
                    </td>
                    <th scope="row">{item.market_cap_rank}</th>
                    <td><Link to={`coin/${item.id}`} ><img src={item.image} alt={`${item.name}`} width="20" />  {item.name} <span className="symbol">{item.symbol}</span></Link></td>
                    <td>{item.current_price.toLocaleString()}</td>
                    <td className={item.price_change_percentage_24h > 0 ? 'green' : 'red'}>{item.price_change_percentage_24h.toFixed(2)}<span className="percent">%</span></td>
                    <td className={item.price_change_percentage_7d_in_currency > 0 ? 'green' : 'red'}>{item.price_change_percentage_7d_in_currency.toFixed(2)}<span className="percent">%</span></td>
                    <td>{item.market_cap.toLocaleString()}</td>
                    <td className="max_supply">
                      <span>{item.circulating_supply.toLocaleString()}</span>
                      {item.max_supply != null ?
                        <OverlayTrigger
                          placement={'bottom'}
                          overlay={
                            <Tooltip id="tooltip-bottom">
                              <div>
                                <div><span>Percentage</span> <span>{((100 * item.circulating_supply) / item.max_supply).toFixed(2)}%</span></div>
                                <progress className="max_supply_progress" value={item.circulating_supply} max={item.max_supply}></progress>
                                <div><span>Circulating Supply</span> <span>{item.circulating_supply}</span></div>
                                <div><span>Max Supply</span> <span>{item.max_supply}</span></div>

                              </div>
                            </Tooltip>
                          }
                        >
                          <progress className="max_supply_progress" value={item.circulating_supply} max={item.max_supply}></progress>
                        </OverlayTrigger>
                        : ""
                      }
                    </td>
                    <td className="sparkline">
                      <Sparkline item={item.sparkline_in_7d.price} itemColor={item.price_change_percentage_7d_in_currency > 0 ? '#408f8c' : 'red'} />
                    </td>
                  </tr>
                )}
            </tbody>
          </table>
        )
        }
        <span className="loadmore" onClick={this.loadmore}>{this.state.loadingText ? <div className="lds-ripple"><div></div><div></div></div> : 'Load More'}</span>
      </div >
    );
  }
}
const mapStateToProps = (state) => {
  return {
    crypto: state.crypto.marketData
  }
}

export default connect(mapStateToProps, { markets })(cryptoListing);