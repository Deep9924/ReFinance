import React, { useState, useEffect } from 'react';
import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
//import axios from 'axios';
import StockInfo from '../stockInfo/StockInfo';
import { Typography, Rating, Stack } from "@mui/material"; //Divider,
import { useAuth } from '../../../firebase/AuthContext';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

import('./Graph.css');
window.Chart = Chart

const Graph = ({ symbol, stockData, stockCandle, stockInfoData }) => {
  const { currentUser, userFav, removeFromFavourites, addToFavourites } = useAuth();
  const [data, setData] = useState([]);
  const [timestamp, setTimestamp] = useState([]);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    stockCandle && setData(stockCandle.c);
    stockCandle && setTimestamp(stockCandle.t);
  }, [stockCandle])

  useEffect(() => {
    userFav && setRating(userFav.includes(symbol) ? 1 : 0)
  }, [userFav, symbol])

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
        top: 10,
        bottom: 10
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
      label: '', //My First Dataset
      data: open_Data,
      fill: true,
      borderColor: "black",
      tension: 0.5,
      pointRadius: 0.8,
      borderWidth: 2,
    }],
  };

  function handleAddorRemove() {
    rating === 1 ? removeFromFavourites(symbol) : addToFavourites(symbol);
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
              value={rating}
              size='large'
              sx={{ ml: 2 }}
              onClick={handleAddorRemove}
            /> : ""}
        </Typography>

        <Stack
          direction="row"
          sx={{ alignItems: 'center' }}
          divider={<FiberManualRecordIcon sx={{ fontSize: 8, color: 'grey.300' }} />}//  <Divider orientation="vertical" variant="middle" flexItem />
          spacing={0.5}
        >
          <Typography variant='h5'> ${data.at(-1)} </Typography>
          <Typography variant='body1'> {stockInfoData.currency} </Typography>
          <Typography variant='body1'> {stockInfoData.mic} </Typography>
          <Typography variant='body1'> {stockInfoData.type} </Typography>
        </Stack>

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