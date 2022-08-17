import React from 'react';
import "./Home.css";
import Graph from "../../components/layouts/graph/Graph";

const Home = () => {
  var sym = "SPX";
  return (
    <>
       <div class="parent">

        <div class="div1"> 
          <Graph symbol={sym}/>
        </div>

        <div class="div2"> 
          <h1> HElloadas</h1>
        </div>

        <div class="div3"> 
          <h1> HEllo worldasdasdas</h1>
        </div>
        
        <div class="div4"> 
          <h1> HEllo worldasdasdas</h1>
        </div>

      </div> 
    </>
  );}
  
export default Home;