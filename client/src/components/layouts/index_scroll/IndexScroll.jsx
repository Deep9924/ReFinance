import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './IndexScroll.css';

const IndexScroll = () => {
  const [dat, setDat] = useState([])
/*
  useEffect(() => {
    axios.get(process.env.REACT_APP_LOCAL + 'indices')
        .then (res =>
          setDat(res.data))
        .catch(err => 
            console.log(err))
}, []);
*/

useEffect(() => {
  axios.get(process.env.REACT_APP_LOCAL + 'index')
      .then (res =>{
        setDat(res.data);
        //console.log(res.data);
      })
      .catch(err => 
          console.log(err))
}, []);
  
  return (


    <div className="container scroll-snap">
      {dat.map((value, key) => { return(
        <div className="child-container" key={key} onClick={() =>{
          console.log("Fixing");
          //const link = `https://api.twelvedata.com/quote?symbol=${value.symbol}&apikey=${process.env.REACT_APP_STOCK_TOKEN}`;
          //window.open(link, "_blank")
          }}>

          <div className="first-part">

            <div className="symbol">
              {value.name}
            </div>

            <div className="stock-price">
              {value.price}
            </div>

          </div>

          <div className="second-part">
           
            <div className={parseFloat(value.percent_change) < 0 ? "percent-change negative" : "percent-change positive"}>
              {value.percent_change}
            </div>
            
            <div className={value.price_change < 0 ? "price-change negative" : "price-change  positive"}>
              {value.price_change}
            </div>
            
          </div>
        </div>
      )})}
        
    </div>
  )
}

export default IndexScroll



