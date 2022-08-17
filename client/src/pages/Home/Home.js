import React from 'react';
import "./Home.css";
import Graph from "../../components/layouts/graph/Graph";

const Home = () => {
  var sym = "SPX";
  return (
    <>
       <div className="mainweb">

        <div className="graph"> 
          <Graph symbol={sym}/>
        </div>

        <div className="news"> 
          <h1> HElloadas</h1>
        </div>

        <div className="favourite"> 
          <h1> HEllo</h1>
        </div>
        
        <div className="footer"> 
          <h1> HElloW</h1>
        </div>

      </div> 
    </>
  );}
  
export default Home;