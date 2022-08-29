import React from 'react';
import "./Home.css";
import Graph from "../../components/layouts/graph/Graph";
import News from "../../components/layouts/news/News";
import Favourites from "../../components/layouts/favourites/Favourites";
import sym from "../../components/layouts/graph/interval";

const Home = () => {
  
  return (
    <div>
      <div className="mainweb">
        <div className="graph"> 
          <Graph symbol={sym} />
        </div>

        <div className="news"> 
          <News />
        </div>

        <div className="favourite"> 
          <Favourites />
        </div>
        
        <div className="footer"> 
        
      
        </div>

      </div> 
    </div>
  );}
  
export default Home;

