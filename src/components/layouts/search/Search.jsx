import React from 'react';
import './Search.css';

const Search = ({placeholder, data}) => {
    return (
        <div className="search">
            <div className="search-input">
                <input type="text" placeholder={placeholder}></input> {/*Can have data field: data = {Data}*/}
            </div>
            
        </div>
    )
}
/*
<div className="search-result">
                {data.map((value,key) => {
                    return  <div> {value.title} </div>;
                    //<a href={value.link} target="_blank"> {" "} {value.title} {" "}</a>;
                })}
            </div>
*/

export default Search;
