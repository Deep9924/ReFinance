import React from 'react';
import { useLocation, Navigate } from "react-router-dom";
import Graph from "../../components/layouts/graph/Graph";
import sym from "../../components/layouts/graph/interval";
import './Stock.css';

const Stock = () => {
  const location = useLocation();
  
  if (location.state == null){
    return (
    <Navigate replace to='/' />
  )}

  return (
    <div>
      <h1>Hello Stock</h1>
      <p>{location.state.symbol}</p>
      <Graph symbol={sym} />
    </div>
  );
}
  
export default Stock;