import React from 'react';
import { useLocation } from "react-router-dom";
import Graph from "../../components/layouts/graph/Graph";
import sym from "../../components/layouts/graph/interval";
import NotFound from '../../components/layouts/notFound/NotFound';
import './Stock.css';

const Stock = () => {
  const {state} = useLocation();
  
  if (state == null){
    return (
    <NotFound />
  )}

  return (
    <div>
      <h1>Hello Stock</h1>
      <p>{state.symbol}</p>
      <Graph symbol={sym} />
    </div>
  );
}
  
export default Stock;