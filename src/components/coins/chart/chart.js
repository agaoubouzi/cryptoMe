import React, { useEffect } from 'react';
import { coinPrices } from '../../../actions/cryptoActions';
import Tablist from './tablist/tablist';
import CustomTooltip from './customTooltip'

import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { format } from "date-fns";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';



import './chart.scss';

const CoinChart = () => {

  const { id } = useParams();

  const dispatch = useDispatch();
  let coinPricesArray = null;
  let data = [];
  useEffect(() => {
    dispatch(coinPrices(id, '1'));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])
  coinPricesArray = useSelector(state => state.crypto.coinPrices)
  coinPricesArray = coinPricesArray.prices;
  if (coinPricesArray) {
    // eslint-disable-next-line array-callback-return
    coinPricesArray.map((p) => {
      let coinDate = new Date(p[0]);
      let coinTime = (coinDate.getHours() + ":" + (coinDate.getMinutes() < 10 ? '0' + coinDate.getMinutes() : coinDate.getMinutes())) + (coinDate.getHours() > 12 ? ' PM' : ' AM')
      coinDate = coinDate.toDateString();
      data.push({
        date: coinDate,
        value: p[1],
        time: coinTime
      });
    })
  }

  const tablistDays = (days, e) => { // the callback. Use a better name
    dispatch(coinPrices(id, days));
    if (!e.currentTarget.classList.contains("active")) {
      Array.from(document.getElementsByClassName("active")).forEach((el) => el.classList.remove("active"));
    }
    e.currentTarget.classList.toggle('active')

  };

  return (
    <div className="coinChart">
      {coinPricesArray ? (
        <>
          <Tablist tablistDays={tablistDays} />

          < ResponsiveContainer width="100%" height={500}>

            <AreaChart
              data={data}
              margin={{
                top: 120,
                bottom: 40,
              }}
            >
              <defs>
                <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#408f8c" stopOpacity={0.6} />
                  <stop offset="95%" stopColor="#408f8c" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid
                opacity={.3}
                vertical={false}
                strokeDasharray="3 3" />

              <XAxis
                axisLine={false}
                tickLine={false}
                tickCount={6}
                dataKey="date"
                color="#ffff"
                tick={{ fontSize: 12, angle: 0 }}
                tickFormatter={(str) => {
                  let date = new Date(str);
                  return format(date, "MMM, d");
                }}
              />

              <YAxis
                axisLine={false}
                tickLine={false}
                tickCount={6}
                dy={-15} dx={0}
                tick={{ fontSize: 12, angle: 0 }}
                domain={[dataMin => (dataMin - (dataMin / 90)), 'dataMax']}
                allowDataOverflow={true}
                dataKey="value"
                tickFormatter={(number) => `$${number.toFixed(2)}`}
              />

              <Tooltip content={<CustomTooltip />} />
              <Area
                dataKey="value"
                stroke="#408f8c"
                fill="url(#color)"
              />
            </AreaChart>
          </ResponsiveContainer>
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
export default CoinChart;