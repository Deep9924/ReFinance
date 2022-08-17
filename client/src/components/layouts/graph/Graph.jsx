import React from 'react';
import ("./Graph.css");

const Graph = ({symbol}) => {
    return (
      <>
         <div class="parent">
  
          <div class="div1"> 
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