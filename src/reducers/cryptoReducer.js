
const intialState = {
  marketData: [],
  searchCoins: [],
  coinDetails: [],
  coinPrices: [],
  globalInfo: [],
  newsData: [],
  topCrypto: [],
  darkMode: false

}
const getCrypto = (state = intialState, action) => {
  // REDUCER
  switch (action.type) {

    case "GET_INFO":
      return { ...state, marketData: action.payload }

    case "SEARCH_COIN":
      return { ...state, searchCoins: action.payload }

    case "GET_COIN":
      return { ...state, coinDetails: action.payload }

    case "MARKET_INFO":
      return { ...state, globalInfo: action.payload }

    case "GET_PRICE":
      return { ...state, coinPrices: action.payload }

    case "GET_NEWS":
      return { ...state, newsData: action.payload }

    case "TOP_CRYPTO":
      return { ...state, topCrypto: action.payload }

    case "SWITCH_DARK_MODE":
      return { ...state, darkMode: !state.darkMode }

    default:
      return state
  }
}
export default getCrypto;