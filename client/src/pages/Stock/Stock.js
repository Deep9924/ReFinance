import React from 'react';
import { useLocation, Navigate } from "react-router-dom";
import './Stock.css';

const Stock = () => {
  const location = useLocation();
  
  if (location.state == null){
    return (
    <Navigate replace to='/' />
  )}

  return (
    <>
      <h1>Hello Stock</h1>
      <p>{location.state.symbol}</p>
    </>
  );
}
  
export default Stock;