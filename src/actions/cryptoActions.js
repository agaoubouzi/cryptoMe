
import axios from "axios";


const headers = {
  'x-rapidapi-host': 'coingecko.p.rapidapi.com',
  'x-rapidapi-key': `${process.env.REACT_APP_LISTING_API}`
}

// GET THE MARKET COINS INFO
export const markets = (id = 100) => async (dispatch) => {
  const options = {
    method: 'GET',
    url: 'https://coingecko.p.rapidapi.com/coins/markets',
    params: { vs_currency: 'usd', page: '1', per_page: `${id}`, price_change_percentage: '24h,7d', order: 'market_cap_desc', sparkline: true },
    headers: headers
  };
  await axios.request(options).then(function (response) {
    dispatch({
      type: 'GET_INFO',
      payload: response.data
    })
  })
}

// GET THE MARKET COINS INFO
export const searchForCoin = (id = 500) => async (dispatch) => {
  const options = {
    method: 'GET',
    url: 'https://coingecko.p.rapidapi.com/coins/markets',
    params: { vs_currency: 'usd', page: '1', per_page: `${id}`, order: 'market_cap_desc', sparkline: false },
    headers: headers
  };
  await axios.request(options).then(function (response) {
    dispatch({
      type: 'SEARCH_COIN',
      payload: response.data
    })
  })
}
// GET THE MARKET COINS INFO
export const coinPrices = (coin, days = '7') => async (dispatch) => {
  const options = {
    method: 'GET',
    url: `https://coingecko.p.rapidapi.com/coins/${coin}/market_chart`,
    params: { vs_currency: 'usd', days: `${days}` },
    headers: headers
  };
  await axios.request(options).then(function (response) {
    dispatch({
      type: 'GET_PRICE',
      payload: response.data
    })
  })
}
// ---------------------------------------------------------------

export const coinDetails = (id) => async (dispatch) => {
  const options = {
    method: 'GET',
    url: `https://coingecko.p.rapidapi.com/coins/${id}`,
    headers: headers
  };
  await axios.request(options).then(function (response) {
    dispatch({
      type: 'GET_COIN',
      payload: response.data
    })
  })

}

// ---------------------------------------------------------------

export const globalInfo = () => async (dispatch) => {
  const options = {
    method: 'GET',
    url: 'https://coinlore-cryptocurrency.p.rapidapi.com/api/global/',
    headers: {
      'x-rapidapi-host': 'coinlore-cryptocurrency.p.rapidapi.com',
      'x-rapidapi-key': `${process.env.REACT_APP_GLOBAL_INFO_API}`
    }
  };
  await axios.request(options).then(function (response) {
    dispatch({
      type: 'MARKET_INFO',
      payload: response.data[0]
    })
  })

}

export const getNews = () => async (dispatch) => {
  const options = {
    method: 'GET',
    url: 'https://crypto-news14.p.rapidapi.com/news/cointelegraph',
    headers: {
      'x-rapidapi-host': 'crypto-news14.p.rapidapi.com',
      'x-rapidapi-key': `${process.env.REACT_APP_NEWS_API}`
    }
  };
  await axios.request(options).then(function (response) {
    dispatch({
      type: 'GET_NEWS',
      payload: response.data
    })
  })
}

// GET THE MARKET COINS INFO
export const topCrypto = (id = 10) => async (dispatch) => {
  const options = {
    method: 'GET',
    url: 'https://coingecko.p.rapidapi.com/coins/markets',
    params: { vs_currency: 'usd', page: '1', per_page: `${id}`, price_change_percentage: '24h,7d', order: 'market_cap_desc', sparkline: true },
    headers: {
      'x-rapidapi-host': 'crypto-news14.p.rapidapi.com',
      'x-rapidapi-key': `${process.env.REACT_APP_TOP_API}`
    }
  };
  await axios.request(options).then(function (response) {
    dispatch({
      type: 'TOP_CRYPTO',
      payload: response.data
    })
  })
}

export const darkMode = () => (dispatch) => {
  dispatch({
    type: 'SWITCH_DARK_MODE',
  })
}