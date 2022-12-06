import React, { useState, useEffect } from 'react';
import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import StockInfo from '../stockInfo/StockInfo';
import { Typography, Rating } from "@mui/material";
import { useAuth } from '../../../firebase/AuthContext';

import('./Graph.css');
window.Chart = Chart

const Graph = ({ symbol, stockData, stockCandle, stockInfoData, userData }) => {
  const { currentUser } = useAuth();
  const [data, setData] = useState([]);
  const [timestamp, setTimestamp] = useState([]);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    stockCandle && setData(stockCandle.c);
    stockCandle && setTimestamp(stockCandle.t);
  }, [stockCandle])

  const labels = timestamp.map(values => {
    return new Date(values * 1000).toLocaleDateString();
  })

  const open_Data = data.map(values => {
    return (
      values
    )
  })

  const options = {
    layout: {
      padding: {
        left: 10,
        right: 10,
        top: 20,
        bottom: 20
      }
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const graph_data = {
    labels: labels,
    datasets: [{
      label: 'My First Dataset',
      data: open_Data,
      fill: true,
      borderColor: "black",
      tension: 0.5,
      pointRadius: 0.8,
      borderWidth: 2,
    }],
  };

  function handleAddorRemove() {
    if (!userData.includes(symbol)) {
      axios
        .post(process.env.REACT_APP_LOCAL + "fav/addfav", {
          user_email: currentUser.email.toLowerCase(),
          user_favstock: symbol
        })
        .then(() => {
          setRating(1)
        }
        )
        .catch((err) => console.log(err));
    }
    if (userData.includes(symbol)) {
      axios
        .post(process.env.REACT_APP_LOCAL + "fav/removefav", {
          user_email: currentUser.email.toLowerCase(),
          user_favstock: symbol
        })
        .then(() => {
          setRating(0)
        }
        )
        .catch((err) => console.log(err));
    }
  }

  return (
    <>
      <div className="graph_parent">
        <Typography variant='h5' display="flex">
          {stockInfoData && stockInfoData.description} ({symbol})
          {currentUser ?
            <Rating
              name="favourites"
              max={1}
              defaultValue={0}
              value={rating}//{value}
              size='large'
              sx={{ ml: 2 }}
              onClick={handleAddorRemove} //userData.includes(symbol) ? 1 : 0
            /> : ""}
        </Typography>

        <div className='testing_this'>
          <div className="graph">
            <Line data={graph_data} options={options} />
          </div>

          <div className='graph_details_container'>
            {stockData && <StockInfo stockData={stockData} />}
          </div>
        </div>
      </div>
    </>
  );
}

export default Graph;

/*  useEffect(() => {
     axios.get(process.env.REACT_APP_LOCAL + `stock?id=${symbol}&field=candle`)
       .then(res => {
         setData(res.data.candle.result.c);
         setTimestamp(res.data.candle.result.t);
       })
       .catch(err =>
         console.log(err))
   }, [symbol]); */