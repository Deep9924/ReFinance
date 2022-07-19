import React from 'react';
import './Search.css';
// import Data from "./data.json";

const Search = ({placeholder, data}) => {
    return (
        <div className="search">
            <div className="search-input">
                <input type="text" placeholder={placeholder}></input> {/*Can have data field: data = {Data}*/}
            </div>
            <div className="search-result">
                
            </div>
        </div>
    )
}


export default Search;
