import React from 'react';
import './IndexScroll.css';

const IndexScroll = () => {
  return (
    <div className="container scroll-snap">
      {val.map((value, key) => { return(

        <div className="child-container" key={key}>
          <div className="first-part">

            <div className="symbol">
              {value.symbol}
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

const val = [
  {
    "symbol": "S&P 500",
    "percent_change": "-0.078%",
    "price": "4151.94",
    "price_change": "-3.23"
  },
  {
    "symbol": "Nasdaq",
    "percent_change": "0.41%",
    "price": "12720.58",
    "price_change": "52.42"
  },
  {
    "symbol": "Dow Jones",
    "percent_change": "-0.26%",
    "price": "32726.82",
    "price_change": "-85.68"
  },
  {
    "symbol": "Russel",
    "percent_change": "-0.13%",
    "price": "1906.46",
    "price_change": "-2.47"
  },
  {
    "symbol": "TSX",
    "percent_change": "0.16%",
    "price": "19577.04",
    "price_change": "31.10"
  },
  {
    "symbol": "Crude/Oil",
    "percent_change": "1.2%",
    "price": "10.00",
    "price_change": "0.01"
  },
  {
    "symbol": "Bitcoin",
    "percent_change": "-0.2%",
    "price": "4500.02",
    "price_change": "-2.3"
  },
  {
    "symbol": "Ethereum",
    "percent_change": "0.6%",
    "price": "450.00",
    "price_change": "5.3"
  }
]