import React from 'react';
import ("./Graph.css");

const Graph = ({symbol}) => {
  // , { useState }
  // const [ xvalue, setXvalue ] = useState([]);
  // const [ yvalue, setYvalue ] = useState([]);

  //setTheArray(oldArray => [...oldArray, newElement]); 
  // to add values to the old array 
  console.log ()
    return (
      <>
        {console.log(symb)}
         <div className="parent">
  
          <div className="div1"> 
            <h2> { Object.keys(symbol).map(key => {
              return(
                <div>
                  { symbol[key].meta.symbol }
                </div>
              )})} 
            </h2>
          </div>

  
        </div> 
      </>
    );}
    
  export default Graph;

/* 

import React from 'react';
import Plot from 'react-plotly.js';

class Stock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stockChartXValues: [],
      stockChartYValues: []
    }
  }

  componentDidMount() {
    this.fetchStock();
  }

  fetchStock() {
    const pointerToThis = this;
    console.log(pointerToThis);
    const API_KEY = 'HGJWFG4N8AQ66ICD';
    let StockSymbol = 'FB';
    let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${StockSymbol}&outputsize=compact&apikey=${API_KEY}`;
    let stockChartXValuesFunction = [];
    let stockChartYValuesFunction = [];

    fetch(API_Call)
      .then(
        function(response) {
          return response.json();
        }
      )
      .then(
        function(data) {
          console.log(data);

          for (var key in data['Time Series (Daily)']) {
            stockChartXValuesFunction.push(key);
            stockChartYValuesFunction.push(data['Time Series (Daily)'][key]['1. open']);
          }

          // console.log(stockChartXValuesFunction);
          pointerToThis.setState({
            stockChartXValues: stockChartXValuesFunction,
            stockChartYValues: stockChartYValuesFunction
          });
        }
      )
  }

  render() {
    return (
      <div>
        <h1>Stock Market</h1>
        <Plot
          data={[
            {
              x: this.state.stockChartXValues,
              y: this.state.stockChartYValues,
              type: 'scatter',
              mode: 'lines+markers',
              marker: {color: 'red'},
            }
          ]}
          layout={{width: 720, height: 440, title: 'A Fancy Plot'}}
        />
      </div>
    )
  }
}

export default Stock;

*/







  const symb = [
    {
      "meta": {
        "symbol": "AAPL",
        "interval": "1min",
        "currency": "USD",
        "exchange_timezone": "America/New_York",
        "exchange": "NASDAQ",
        "mic_code": "XNGS",
        "type": "Common Stock"
      },
      "values": [
        {
          "datetime": "2022-08-17 15:59:00",
          "open": 174.48,
          "high": 174.63,
          "low": 174.48,
          "close": 174.55,
          "volume": 0
        },
        {
          "datetime": "2022-08-17 15:58:00",
          "open": 174.46001,
          "high": 174.50999,
          "low": 174.41,
          "close": 174.49001,
          "volume": 0
        },
        {
          "datetime": "2022-08-17 15:57:00",
          "open": 174.39999,
          "high": 174.47,
          "low": 174.39999,
          "close": 174.44,
          "volume": 0
        },
        {
          "datetime": "2022-08-17 15:56:00",
          "open": 174.58,
          "high": 174.58,
          "low": 174.41,
          "close": 174.41,
          "volume": 0
        },
        {
          "datetime": "2022-08-17 15:55:00",
          "open": 174.60001,
          "high": 174.64999,
          "low": 174.58,
          "close": 174.59,
          "volume": 0
        },
        {
          "datetime": "2022-08-17 15:54:00",
          "open": 174.59,
          "high": 174.67,
          "low": 174.59,
          "close": 174.60001,
          "volume": 0
        },
        {
          "datetime": "2022-08-17 15:53:00",
          "open": 174.53999,
          "high": 174.61,
          "low": 174.53999,
          "close": 174.56,
          "volume": 0
        },
        {
          "datetime": "2022-08-17 15:52:00",
          "open": 174.25,
          "high": 174.52,
          "low": 174.25,
          "close": 174.5,
          "volume": 0
        },
        {
          "datetime": "2022-08-17 15:51:00",
          "open": 174.36,
          "high": 174.36,
          "low": 174.25,
          "close": 174.25,
          "volume": 0
        },
        {
          "datetime": "2022-08-17 15:50:00",
          "open": 174.47,
          "high": 174.50999,
          "low": 174.41,
          "close": 174.41,
          "volume": 0
        },
        {
          "datetime": "2022-08-17 15:49:00",
          "open": 174.45,
          "high": 174.50999,
          "low": 174.45,
          "close": 174.50999,
          "volume": 0
        },
        {
          "datetime": "2022-08-17 15:48:00",
          "open": 174.41,
          "high": 174.50999,
          "low": 174.41,
          "close": 174.46001,
          "volume": 0
        },
        {
          "datetime": "2022-08-17 15:47:00",
          "open": 174.62,
          "high": 174.63,
          "low": 174.44,
          "close": 174.44,
          "volume": 0
        },
        {
          "datetime": "2022-08-17 15:46:00",
          "open": 174.64999,
          "high": 174.67999,
          "low": 174.64,
          "close": 174.67999,
          "volume": 0
        },
        {
          "datetime": "2022-08-17 15:45:00",
          "open": 174.78,
          "high": 174.78,
          "low": 174.63,
          "close": 174.63,
          "volume": 0
        },
        {
          "datetime": "2022-08-17 15:44:00",
          "open": 174.84,
          "high": 174.89,
          "low": 174.81,
          "close": 174.81,
          "volume": 0
        },
        {
          "datetime": "2022-08-17 15:43:00",
          "open": 174.67999,
          "high": 174.78,
          "low": 174.64,
          "close": 174.78,
          "volume": 0
        },
        {
          "datetime": "2022-08-17 15:42:00",
          "open": 174.71001,
          "high": 174.77,
          "low": 174.69,
          "close": 174.69,
          "volume": 0
        },
        {
          "datetime": "2022-08-17 15:41:00",
          "open": 174.78999,
          "high": 174.81,
          "low": 174.72,
          "close": 174.72,
          "volume": 0
        },
        {
          "datetime": "2022-08-17 15:40:00",
          "open": 174.7,
          "high": 174.81,
          "low": 174.7,
          "close": 174.75,
          "volume": 0
        },
        {
          "datetime": "2022-08-17 15:39:00",
          "open": 174.75,
          "high": 174.75,
          "low": 174.66,
          "close": 174.67999,
          "volume": 0
        },
        {
          "datetime": "2022-08-17 15:38:00",
          "open": 174.72,
          "high": 174.78999,
          "low": 174.7,
          "close": 174.75,
          "volume": 0
        },
        {
          "datetime": "2022-08-17 15:37:00",
          "open": 174.69,
          "high": 174.81,
          "low": 174.69,
          "close": 174.72,
          "volume": 0
        },
        {
          "datetime": "2022-08-17 15:36:00",
          "open": 174.78999,
          "high": 174.8,
          "low": 174.67999,
          "close": 174.71001,
          "volume": 0
        },
        {
          "datetime": "2022-08-17 15:35:00",
          "open": 174.60001,
          "high": 174.8,
          "low": 174.59,
          "close": 174.8,
          "volume": 0
        },
        {
          "datetime": "2022-08-17 15:34:00",
          "open": 174.71001,
          "high": 174.72,
          "low": 174.62,
          "close": 174.62,
          "volume": 0
        },
        {
          "datetime": "2022-08-17 15:33:00",
          "open": 174.66,
          "high": 174.78,
          "low": 174.66,
          "close": 174.72,
          "volume": 0
        },
        {
          "datetime": "2022-08-17 15:32:00",
          "open": 174.75999,
          "high": 174.78,
          "low": 174.64,
          "close": 174.67,
          "volume": 0
        },
        {
          "datetime": "2022-08-17 15:31:00",
          "open": 174.85001,
          "high": 174.92999,
          "low": 174.71001,
          "close": 174.73,
          "volume": 0
        },
        {
          "datetime": "2022-08-17 15:30:00",
          "open": 174.92,
          "high": 174.92999,
          "low": 174.78999,
          "close": 174.86,
          "volume": 0
        }
      ],
      "status": "ok"
    }]