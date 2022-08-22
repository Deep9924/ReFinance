import React, { useState } from 'react';
import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import ("./Graph.css");
window.Chart = Chart

const Graph = ({ symbol }) => {
  const [dat, setDat] = useState([])

  useEffect(() => {
    axios.get(process.env.REACT_APP_LOCAL + 'index')
        .then (res =>{
          setDat(res.data);
          //console.log(res.data);
        })
        .catch(err => 
            console.log(err))
  }, []);

  
  const labels = Object.keys(dat).map(keys => {
    return(

       symbol[keys].values.map(val => {
        return (
          val.datetime.split(" ")[1].split(":", 2).join(":")
        )})
    )});

  const open_Data = Object.keys(dat).map(key => {
    return(

       symbol[key].values.map(val => {
        return (
          val.open
        )})
    )});


  const data = {
  labels: labels[0],
  datasets: [{
    label: 'My First Dataset',
    data: open_Data[0], //[65, 59, 80, 81, 56, 55, 40],
    fill: false,
    borderColor: "black", // 'rgb(75, 192, 192)',
    tension: 0.5,
    pointRadius: 0.8,
    borderWidth: 2
    
  }]
  };

  // , { useState }
  // const [ xvalue, setXvalue ] = useState([]);
  // const [ yvalue, setYvalue ] = useState([]);

  //setTheArray(oldArray => [...oldArray, newElement]); 
  // to add values to the old array                         {console.log(symb.map)}
  /* console.log (Object.keys(symb).map(key => {
    return(

       symbol[key].values.map(val => {
        return (
          val.open
        )})

    )})) */
    return (
      <>
      
         <div className="parent">
  
          <div className="div1"> 
            <h2> { Object.keys(symbol).map(key => {
              return(
                <div key={ key }>
                  { symbol[key].meta.symbol }
                </div>
              )})} 
            </h2>
            <Line data={ data } />
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



/* const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]; */